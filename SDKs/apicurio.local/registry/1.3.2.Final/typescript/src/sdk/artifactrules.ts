import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ArtifactRules {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * createArtifactRule - Create artifact rule
   *
   * Adds a rule to the list of rules that get applied to the artifact when adding new
   * versions.  All configured rules must pass to successfully add a new artifact version.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * Rule (named in the request body) is unknown (HTTP error `400`)
   * * A server error occurred (HTTP error `500`)
  **/
  createArtifactRule(
    req: operations.CreateArtifactRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArtifactRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArtifactRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateArtifactRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteArtifactRule - Delete artifact rule
   *
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
  deleteArtifactRule(
    req: operations.DeleteArtifactRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules/{rule}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteArtifactRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteArtifactRules - Delete artifact rules
   *
   * Deletes all of the rules configured for the artifact.  After this is done, the global
   * rules apply to the artifact again.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  deleteArtifactRules(
    req: operations.DeleteArtifactRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteArtifactRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getArtifactRuleConfig - Get artifact rule configuration
   *
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
  getArtifactRuleConfig(
    req: operations.GetArtifactRuleConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactRuleConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactRuleConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules/{rule}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArtifactRuleConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rule = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listArtifactRules - List artifact rules
   *
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
  listArtifactRules(
    req: operations.ListArtifactRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListArtifactRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListArtifactRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListArtifactRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ruleTypes = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * testUpdateArtifact - Test update artifact
   *
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
  testUpdateArtifact(
    req: operations.TestUpdateArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestUpdateArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestUpdateArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/test", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestUpdateArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateArtifactRuleConfig - Update artifact rule configuration
   *
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
  updateArtifactRuleConfig(
    req: operations.UpdateArtifactRuleConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactRuleConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactRuleConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/rules/{rule}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateArtifactRuleConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rule = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
