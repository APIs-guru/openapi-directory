import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Import {
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
   * importExportedData - Import exported data
   *
   * This endpoint allows you to import your exported Postman data.
   * For more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>
   * 
   * On successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.
   * 
   * **Note**: Refer to examples for different scenarios.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
  **/
  importExportedData(
    req: operations.ImportExportedDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImportExportedDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImportExportedDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/import/exported";

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
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ImportExportedDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importExportedData200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importExportedData400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * importExternalApiSpecification - Import external API specification
   *
   * This endpoint allows you to import external API specifications into Postman.
   * 
   * Currently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.
   * 
   * On a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.
   * 
   * Supported `type`s:
   * 
   * - string
   * - json
   * - file
   * 
   * The `input` parameter should be defined based on the `type`.
   * 
   * > To import a file, request body must be form-data with `type` param set to `file`.
   * 
   * **Note**: Refer to examples for different scenarios.
   * 
   * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.
  **/
  importExternalApiSpecification(
    req: operations.ImportExternalApiSpecificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImportExternalApiSpecificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImportExternalApiSpecificationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/import/openapi";

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
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ImportExternalApiSpecificationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importExternalApiSpecification200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.importExternalApiSpecification400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
