import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Metadata {
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
   * deleteArtifactVersionMetaData - Delete artifact version metadata
   *
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
  deleteArtifactVersionMetaData(
    req: operations.DeleteArtifactVersionMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArtifactVersionMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArtifactVersionMetaDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/meta", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteArtifactVersionMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getArtifactMetaData - Get artifact metadata
   *
   * Gets the metadata for an artifact in the registry.  The returned metadata includes
   * both generated (read-only) and editable metadata (such as name and description).
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with this `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  getArtifactMetaData(
    req: operations.GetArtifactMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactMetaDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/meta", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArtifactMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
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
   * getArtifactMetaDataByContent - Get artifact metadata by content
   *
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
  getArtifactMetaDataByContent(
    req: operations.GetArtifactMetaDataByContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactMetaDataByContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactMetaDataByContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/meta", req.pathParams);

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
        const res: operations.GetArtifactMetaDataByContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
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
   * getArtifactMetaDataByGlobalId - Get global artifact metadata
   *
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
  getArtifactMetaDataByGlobalId(
    req: operations.GetArtifactMetaDataByGlobalIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactMetaDataByGlobalIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactMetaDataByGlobalIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ids/{globalId}/meta", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArtifactMetaDataByGlobalIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artifactMetaData = httpRes?.data;
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
   * getArtifactVersionMetaData - Get artifact version metadata
   *
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
  getArtifactVersionMetaData(
    req: operations.GetArtifactVersionMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArtifactVersionMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArtifactVersionMetaDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/meta", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArtifactVersionMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * updateArtifactMetaData - Update artifact metadata
   *
   * Updates the editable parts of the artifact's metadata.  Not all metadata fields can
   * be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
   * 
   * This operation can fail for the following reasons:
   * 
   * * No artifact with the `artifactId` exists (HTTP error `404`)
   * * A server error occurred (HTTP error `500`)
  **/
  updateArtifactMetaData(
    req: operations.UpdateArtifactMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactMetaDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/meta", req.pathParams);

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
        const res: operations.UpdateArtifactMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * updateArtifactVersionMetaData - Update artifact version metadata
   *
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
  updateArtifactVersionMetaData(
    req: operations.UpdateArtifactVersionMetaDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArtifactVersionMetaDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArtifactVersionMetaDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/artifacts/{artifactId}/versions/{version}/meta", req.pathParams);

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
        const res: operations.UpdateArtifactVersionMetaDataResponse = {statusCode: httpRes.status, contentType: contentType};
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

}
