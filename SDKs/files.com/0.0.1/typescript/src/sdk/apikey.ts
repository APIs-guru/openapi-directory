import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ApiKey {
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
   * apiKeyDeleteCurrent - Delete current API key.  (Requires current API connection to be using an API key.)
   *
   * Delete current API key.  (Requires current API connection to be using an API key.)
  **/
  apiKeyDeleteCurrent(
    config?: AxiosRequestConfig
  ): Promise<operations.ApiKeyDeleteCurrentResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_key";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApiKeyDeleteCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 412:
            break;
          case httpRes?.status == 422:
            break;
          case httpRes?.status == 423:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * apiKeyFindCurrent - Show information about current API key.  (Requires current API connection to be using an API key.)
   *
   * Show information about current API key.  (Requires current API connection to be using an API key.)
  **/
  apiKeyFindCurrent(
    config?: AxiosRequestConfig
  ): Promise<operations.ApiKeyFindCurrentResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_key";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApiKeyFindCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 412:
            break;
          case httpRes?.status == 422:
            break;
          case httpRes?.status == 423:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * apiKeyUpdateCurrent - Update current API key.  (Requires current API connection to be using an API key.)
   *
   * Update current API key.  (Requires current API connection to be using an API key.)
  **/
  apiKeyUpdateCurrent(
    req: operations.ApiKeyUpdateCurrentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApiKeyUpdateCurrentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApiKeyUpdateCurrentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api_key";

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApiKeyUpdateCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiKeyEntity = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 412:
            break;
          case httpRes?.status == 422:
            break;
          case httpRes?.status == 423:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
