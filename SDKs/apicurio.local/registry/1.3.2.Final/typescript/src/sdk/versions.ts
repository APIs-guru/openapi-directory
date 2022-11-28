import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Versions {
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
   * createArtifactVersion - Create artifact version
   *
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
  createArtifactVersion(
    req: operations.CreateArtifactVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArtifactVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArtifactVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions", req.pathParams);

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
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateArtifactVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.versionMetaData = httpRes?.data;
            }
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
   * getArtifactVersion - Get artifact version
   *
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
  getArtifactVersion(
    req: operations.GetArtifactVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArtifactVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * listArtifactVersions - List artifact versions
   *
   * Returns a list of all version numbers for the artifact.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
   * 
  **/
  listArtifactVersions(
    req: operations.ListArtifactVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListArtifactVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListArtifactVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListArtifactVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listArtifactVersions200ApplicationJsonInt64Integers = httpRes?.data;
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
   * searchVersions - Search artifact versions
   *
   * Searches for versions of a specific artifact.  This is typically used to get a listing
   * of all versions of an artifact (for example, in a user interface).
  **/
  searchVersions(
    req: operations.SearchVersionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchVersionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchVersionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/search/artifacts/{artifactId}/versions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchVersionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.versionSearchResults = httpRes?.data;
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
   * updateArtifactVersionState - Update artifact version state
   *
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
  updateArtifactVersionState(
    req: operations.UpdateArtifactVersionStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactVersionStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactVersionStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/state", req.pathParams);

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
        const res: operations.UpdateArtifactVersionStateResponse = {statusCode: httpRes.status, contentType: contentType};
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

}
