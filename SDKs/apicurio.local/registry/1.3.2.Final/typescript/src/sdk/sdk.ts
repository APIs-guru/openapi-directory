import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://apicurio.local",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CreateArtifact - Create artifact
  /** 
   * Creates a new artifact by posting the artifact content.  The body of the request should
   * be the raw content of the artifact.  This is typically in JSON format for *most* of the 
   * supported types, but may be in another format for a few (for example, `PROTOBUF`).
   * 
   * The registry attempts to figure out what kind of artifact is being added from the
   * following supported list:
   * 
   * * Avro (`AVRO`)
   * * Protobuf (`PROTOBUF`)
   * * Protobuf File Descriptor (`PROTOBUF_FD`)
   * * JSON Schema (`JSON`)
   * * Kafka Connect (`KCONNECT`)
   * * OpenAPI (`OPENAPI`)
   * * AsyncAPI (`ASYNCAPI`)
   * * GraphQL (`GRAPHQL`)
   * * Web Services Description Language (`WSDL`)
   * * XML Schema (`XSD`)
   * 
   * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
   * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
   * 
   * ```
   * Content-Type: application/json; artifactType=AVRO
   * ```
   * 
   * An artifact is created using the content provided in the body of the request.  This
   * content is created under a unique artifact ID that can be provided in the request
   * using the `X-Registry-ArtifactId` request header.  If not provided in the request,
   * the server generates a unique ID for the artifact.  It is typically recommended
   * that callers provide the ID, because this is typically a meaningful identifier, 
   * and for most use cases should be supplied by the caller.
   * 
   * If an artifact with the provided artifact ID already exists, the default behavior
   * is for the server to reject the content with a 409 error.  However, the caller can
   * supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
   * query parameter can have one of the following values:
   * 
   * * `FAIL` (*default*) - server rejects the content with a 409 error
   * * `UPDATE` - server updates the existing artifact and returns the new metadata
   * * `RETURN` - server does not create or add content to the server, but instead 
   * returns the metadata for the existing artifact
   * * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
   * provided content if such a version exists, otherwise a new version is created
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * An invalid `ArtifactType` was indicated (HTTP error `400`)
   * * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
   * * Provided content (request body) was empty (HTTP error `400`)
   * * An artifact with the provided ID already exists (HTTP error `409`)
   * * The content violates one of the configured global rules (HTTP error `409`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  CreateArtifact(
    req: operations.CreateArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArtifactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/artifacts";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateArtifactRule - Create artifact rule
  /** 
   * Adds a rule to the list of rules that get applied to the artifact when adding new
   * versions.  All configured rules must pass to successfully add a new artifact version.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * Rule (named in the request body) is unknown (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
  **/
  CreateArtifactRule(
    req: operations.CreateArtifactRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArtifactRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArtifactRuleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateArtifactRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateArtifactVersion - Create artifact version
  /** 
   * Creates a new version of the artifact by uploading new content.  The configured rules for
   * the artifact are applied, and if they all pass, the new content is added as the most recent 
   * version of the artifact.  If any of the rules fail, an error is returned.
   * 
   * The body of the request should be the raw content of the new artifact version.  This 
   * is typically in JSON format for *most* of the supported types, but may be in another 
   * format for a few (for example, `PROTOBUF`).
   * 
   * The registry attempts to figure out what kind of artifact is being added from the
   * following supported list:
   * 
   * * Avro (`AVRO`)
   * * Protobuf (`PROTOBUF`)
   * * Protobuf File Descriptor (`PROTOBUF_FD`)
   * * JSON Schema (`JSON`)
   * * Kafka Connect (`KCONNECT`)
   * * OpenAPI (`OPENAPI`)
   * * AsyncAPI (`ASYNCAPI`)
   * * GraphQL (`GRAPHQL`)
   * * Web Services Description Language (`WSDL`)
   * * XML Schema (`XSD`)
   * 
   * Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType` 
   * HTTP request header, or by including a hint in the request's `Content-Type`.
   * 
   * For example:
   * 
   * ```
   * Content-Type: application/json; artifactType=AVRO
   * ```
   * 
   * This operation can fail for the following reasons:
   * 
   * * Provided content (request body) was empty (HTTP error `400`)
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  CreateArtifactVersion(
    req: operations.CreateArtifactVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArtifactVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArtifactVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateArtifactVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.versionMetaData = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateGlobalRule - Create global rule
  /** 
   * Adds a rule to the list of globally configured rules.
   * 
   * This operation can fail for the following reasons:
   * 
   * * The rule type is unknown (HTTP error `400`)
   * * The rule already exists (HTTP error `409`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  CreateGlobalRule(
    req: operations.CreateGlobalRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateGlobalRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateGlobalRuleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rules";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateGlobalRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteAllGlobalRules - Delete all global rules
  /** 
   * Deletes all globally configured rules.
   * 
   * This operation can fail for the following reasons:
   * 
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  DeleteAllGlobalRules(
    
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAllGlobalRulesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rules";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAllGlobalRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteArtifact - Delete artifact
  /** 
   * Deletes an artifact completely, resulting in all versions of the artifact also being
   * deleted.  This may fail for one of the following reasons:
   * 
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  DeleteArtifact(
    req: operations.DeleteArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteArtifactRule - Delete artifact rule
  /** 
   * Deletes a rule from the artifact.  This results in the rule no longer applying for
   * this artifact.  If this is the only rule configured for the artifact, this is the 
   * same as deleting **all** rules, and the globally configured rules now apply to
   * this artifact.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No rule with this name/type is configured for this artifact (HTTP error `404`)
   * * Invalid rule type (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
  **/
  DeleteArtifactRule(
    req: operations.DeleteArtifactRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactRuleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules/{rule}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteArtifactRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteArtifactRules - Delete artifact rules
  /** 
   * Deletes all of the rules configured for the artifact.  After this is done, the global
   * rules apply to the artifact again.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  DeleteArtifactRules(
    req: operations.DeleteArtifactRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactRulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteArtifactRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteArtifactVersionMetaData - Delete artifact version metadata
  /** 
   * Deletes the user-editable metadata properties of the artifact version.  Any properties
   * that are not user-editable are preserved.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No version with this `version` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  DeleteArtifactVersionMetaData(
    req: operations.DeleteArtifactVersionMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactVersionMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactVersionMetaDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/meta", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteArtifactVersionMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteGlobalRule - Delete global rule
  /** 
   * Deletes a single global rule.  If this is the only rule configured, this is the same
   * as deleting **all** rules.
   * 
   * This operation can fail for the following reasons:
   * 
   * * Invalid rule name/type (HTTP error `400`)
   * * No rule with name/type `rule` exists (HTTP error `404`)
   * * Rule cannot be deleted (HTTP error `409`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  DeleteGlobalRule(
    req: operations.DeleteGlobalRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteGlobalRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteGlobalRuleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/rules/{rule}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteGlobalRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactByGlobalId - Get artifact by global ID
  /** 
   * Gets the content for an artifact version in the registry using its globally unique
   * identifier.
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * No artifact version with this `globalId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetArtifactByGlobalId(
    req: operations.GetArtifactByGlobalIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactByGlobalIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactByGlobalIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ids/{globalId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactByGlobalIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactMetaData - Get artifact metadata
  /** 
   * Gets the metadata for an artifact in the registry.  The returned metadata includes
   * both generated (read-only) and editable metadata (such as name and description).
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  GetArtifactMetaData(
    req: operations.GetArtifactMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactMetaDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/meta", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactMetaDataByContent - Get artifact metadata by content
  /** 
   * Gets the metadata for an artifact that matches the raw content.  Searches the registry
   * for a version of the given artifact matching the content provided in the body of the
   * POST.
   * 
   * This operation can fail for the following reasons:
   * 
   * * Provided content (request body) was empty (HTTP error `400`)
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * No artifact version matching the provided content exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetArtifactMetaDataByContent(
    req: operations.GetArtifactMetaDataByContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactMetaDataByContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactMetaDataByContentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/meta", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactMetaDataByContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactMetaDataByGlobalId - Get global artifact metadata
  /** 
   * Gets the metadata for an artifact version in the registry using its globally unique
   * identifier.  The returned metadata includes both generated (read-only) and editable
   * metadata (such as name and description).
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * No artifact version with this `globalId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetArtifactMetaDataByGlobalId(
    req: operations.GetArtifactMetaDataByGlobalIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactMetaDataByGlobalIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactMetaDataByGlobalIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ids/{globalId}/meta", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactMetaDataByGlobalIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactRuleConfig - Get artifact rule configuration
  /** 
   * Returns information about a single rule configured for an artifact.  This is useful
   * when you want to know what the current configuration settings are for a specific rule.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No rule with this name/type is configured for this artifact (HTTP error `404`)
   * * Invalid rule type (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
  **/
  GetArtifactRuleConfig(
    req: operations.GetArtifactRuleConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactRuleConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactRuleConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules/{rule}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactRuleConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rule = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactVersion - Get artifact version
  /** 
   * Retrieves a single version of the artifact content.  Both the `artifactId` and the
   * unique `version` number must be provided.  The `Content-Type` of the response depends 
   * on the artifact type.  In most cases, this is `application/json`, but for some types 
   * it may be different (for example, `PROTOBUF`).
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No version with this `version` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetArtifactVersion(
    req: operations.GetArtifactVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetArtifactVersionMetaData - Get artifact version metadata
  /** 
   * Retrieves the metadata for a single version of the artifact.  The version metadata is 
   * a subset of the artifact metadata and only includes the metadata that is specific to
   * the version (for example, this doesn't include `modifiedOn`).
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No version with this `version` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetArtifactVersionMetaData(
    req: operations.GetArtifactVersionMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactVersionMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactVersionMetaDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/meta", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetArtifactVersionMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.versionMetaData = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetGlobalRuleConfig - Get global rule configuration
  /** 
   * Returns information about the named globally configured rule.
   * 
   * This operation can fail for the following reasons:
   * 
   * * Invalid rule name/type (HTTP error `400`)
   * * No rule with name/type `rule` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetGlobalRuleConfig(
    req: operations.GetGlobalRuleConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGlobalRuleConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGlobalRuleConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/rules/{rule}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetGlobalRuleConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rule = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLatestArtifact - Get latest artifact
  /** 
   * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
   * response depends on the artifact type.  In most cases, this is `application/json`, but 
   * for some types it may be different (for example, `PROTOBUF`).
   * 
   * This operation may fail for one of the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  GetLatestArtifact(
    req: operations.GetLatestArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLatestArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLatestArtifactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLatestArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListArtifactRules - List artifact rules
  /** 
   * Returns a list of all rules configured for the artifact.  The set of rules determines
   * how the content of an artifact can evolve over time.  If no rules are configured for
   * an artifact, the set of globally configured rules are used.  If no global rules 
   * are defined, there are no restrictions on content evolution.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  ListArtifactRules(
    req: operations.ListArtifactRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListArtifactRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListArtifactRulesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListArtifactRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ruleTypes = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListArtifactVersions - List artifact versions
  /** 
   * Returns a list of all version numbers for the artifact.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  ListArtifactVersions(
    req: operations.ListArtifactVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListArtifactVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListArtifactVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListArtifactVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listArtifactVersions200ApplicationJsonInt64Integers = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListArtifacts - List all artifact IDs
  /** 
   * Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
   * server is configured to limit the number of artifact IDs returned when a large number 
   * of artifacts exist. In this case, the result of this call may be non-deterministic. The 
   * default limit is typically 1000 artifacts.
  **/
  ListArtifacts(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListArtifactsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/artifacts";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListArtifactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listArtifacts200ApplicationJsonStrings = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListGlobalRules - List global rules
  /** 
   * Gets a list of all the currently configured global rules (if any).
   * 
   * This operation can fail for the following reasons:
   * 
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  ListGlobalRules(
    
    config?: AxiosRequestConfig
  ): Promise<operations.ListGlobalRulesResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rules";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListGlobalRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.ruleTypes = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchArtifacts - Search for artifacts
  /** 
   * Returns a paginated list of all artifacts that match the provided search criteria.
   * 
  **/
  SearchArtifacts(
    req: operations.SearchArtifactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchArtifactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchArtifactsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/search/artifacts";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SearchArtifactsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifactSearchResults = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SearchVersions - Search artifact versions
  /** 
   * Searches for versions of a specific artifact.  This is typically used to get a listing
   * of all versions of an artifact (for example, in a user interface).
  **/
  SearchVersions(
    req: operations.SearchVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchVersionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/artifacts/{artifactId}/versions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SearchVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.versionSearchResults = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TestUpdateArtifact - Test update artifact
  /** 
   * Tests whether an update to the artifact's content *would* succeed for the provided content.
   * Ultimately, this applies any rules configured for the artifact against the given content
   * to determine whether the rules would pass or fail, but without actually updating the artifact
   * content.
   * 
   * The body of the request should be the raw content of the artifact.  This is typically in 
   * JSON format for *most* of the supported types, but may be in another format for a few 
   * (for example, `PROTOBUF`).
   * 
   * The registry attempts to figure out what kind of artifact is being added from the following  supported list: 
   * 
   * * Avro (`AVRO`)  
   * * Protobuf (`PROTOBUF`)  
   * * Protobuf File Descriptor (`PROTOBUF_FD`)  
   * * JSON Schema (`JSON`)  
   * * Kafka Connect (`KCONNECT`) 
   * * OpenAPI (`OPENAPI`)  
   * * AsyncAPI (`ASYNCAPI`) 
   * * GraphQL (`GRAPHQL`) 
   * * Web Services Description Language (`WSDL`) 
   * * XML Schema (`XSD`)
   * 
   * Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType` 
   * HTTP request header, or by including a hint in the request's `Content-Type`.  For example:
   * 
   * ```
   * Content-Type: application/json; artifactType=AVRO
   * ```
   * 
   * The update could fail for a number of reasons including:
   * 
   * * Provided content (request body) was empty (HTTP error `400`)
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
   * * The provided artifact type is not recognized (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
   * When successful, this operation simply returns a *No Content* response.
  **/
  TestUpdateArtifact(
    req: operations.TestUpdateArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestUpdateArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestUpdateArtifactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/test", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TestUpdateArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateArtifact - Update artifact
  /** 
   * Updates an artifact by uploading new content.  The body of the request should
   * be the raw content of the artifact.  This is typically in JSON format for *most*
   * of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
   * 
   * The registry attempts to figure out what kind of artifact is being added from the
   * following supported list:
   * 
   * * Avro (`AVRO`)
   * * Protobuf (`PROTOBUF`)
   * * Protobuf File Descriptor (`PROTOBUF_FD`)
   * * JSON Schema (`JSON`)
   * * Kafka Connect (`KCONNECT`)
   * * OpenAPI (`OPENAPI`)
   * * AsyncAPI (`ASYNCAPI`)
   * * GraphQL (`GRAPHQL`)
   * * Web Services Description Language (`WSDL`)
   * * XML Schema (`XSD`)
   * 
   * Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
   * HTTP request header, or include a hint in the request's `Content-Type`.  For example:
   * 
   * ```
   * Content-Type: application/json; artifactType=AVRO
   * ```
   * 
   * The update could fail for a number of reasons including:
   * 
   * * Provided content (request body) was empty (HTTP error `400`)
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * The new content violates one of the rules configured for the artifact (HTTP error `409`)
   * * The provided artifact type is not recognized (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
   * When successful, this creates a new version of the artifact, making it the most recent
   * (and therefore official) version of the artifact.
  **/
  UpdateArtifact(
    req: operations.UpdateArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 409:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateArtifactMetaData - Update artifact metadata
  /** 
   * Updates the editable parts of the artifact's metadata.  Not all metadata fields can
   * be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  UpdateArtifactMetaData(
    req: operations.UpdateArtifactMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactMetaDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/meta", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateArtifactMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateArtifactRuleConfig - Update artifact rule configuration
  /** 
   * Updates the configuration of a single rule for the artifact.  The configuration data
   * is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
   * is in a different format from the configuration of the `VALIDITY` rule.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No rule with this name/type is configured for this artifact (HTTP error `404`)
   * * Invalid rule type (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  UpdateArtifactRuleConfig(
    req: operations.UpdateArtifactRuleConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactRuleConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactRuleConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules/{rule}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateArtifactRuleConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rule = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateArtifactState - Update artifact state
  /** 
   * Updates the state of the artifact.  For example, you can use this to mark the latest
   * version of an artifact as `DEPRECATED`.  The operation changes the state of the latest 
   * version of the artifact.  If multiple versions exist, only the most recent is changed.
   * 
   * The following state changes are supported:
   * 
   * * Enabled -> Disabled
   * * Enabled -> Deprecated
   * * Enabled -> Deleted
   * * Disabled -> Enabled
   * * Disabled -> Deleted
   * * Disabled -> Deprecated
   * * Deprecated -> Deleted
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * Artifact cannot transition to the given state (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  UpdateArtifactState(
    req: operations.UpdateArtifactStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/state", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateArtifactStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateArtifactVersionMetaData - Update artifact version metadata
  /** 
   * Updates the user-editable portion of the artifact version's metadata.  Only some of 
   * the metadata fields are editable by the user.  For example, `description` is editable, 
   * but `createdOn` is not.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No version with this `version` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  UpdateArtifactVersionMetaData(
    req: operations.UpdateArtifactVersionMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactVersionMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactVersionMetaDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/meta", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateArtifactVersionMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateArtifactVersionState - Update artifact version state
  /** 
   * Updates the state of a specific version of an artifact.  For example, you can use 
   * this operation to disable a specific version.
   * 
   * The following state changes are supported:
   * 
   * * Enabled -> Disabled
   * * Enabled -> Deprecated
   * * Enabled -> Deleted
   * * Disabled -> Enabled
   * * Disabled -> Deleted
   * * Disabled -> Deprecated
   * * Deprecated -> Deleted
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * No version with this `version` exists (HTTP error `404`)
   * * Artifact version cannot transition to the given state (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  UpdateArtifactVersionState(
    req: operations.UpdateArtifactVersionStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactVersionStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactVersionStateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/state", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateArtifactVersionStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGlobalRuleConfig - Update global rule configuration
  /** 
   * Updates the configuration for a globally configured rule.
   * 
   * This operation can fail for the following reasons:
   * 
   * * Invalid rule name/type (HTTP error `400`)
   * * No rule with name/type `rule` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  UpdateGlobalRuleConfig(
    req: operations.UpdateGlobalRuleConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGlobalRuleConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGlobalRuleConfigRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/rules/{rule}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGlobalRuleConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rule = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
