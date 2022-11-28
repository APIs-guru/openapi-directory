import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Uploads {
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
   * cancelFileUploadByToken - Cancel file upload
   *
   * ### Description:
   * Cancel file upload.
   * 
   * ### Precondition:
   * Valid upload token.
   * 
   * ### Postcondition:
   * Upload canceled, token invalidated and all already transfered chunks removed.
   * 
   * ### Further Information:
   * It is recommended to notify the API about cancelled uploads if possible.
  **/
  cancelFileUploadByToken(
    req: operations.CancelFileUploadByTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelFileUploadByTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelFileUploadByTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/uploads/{token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelFileUploadByTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * completeFileUploadByToken - Complete file upload
   *
   * ### Description:
   * Finish uploading a file.
   * 
   * ### Precondition:
   * Valid upload token.
   * 
   * ### Postcondition:
   * File created.
   * 
   * ### Further Information:
   * The provided file name might be changed in accordance with the resolution strategy:
   * 
   * * **autorename**: changes the file name and adds a number to avoid conflicts.
   * * **overwrite**: deletes any old file with the same file name.
   * * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
   * 
   * Please ensure that all chunks have been transferred correctly before finishing the upload.
   * 
   * Download share id (if exists) gets changed if:
   * - node with the same name exists in the target container
   * - `resolutionStrategy` is `overwrite`
   * - `keepShareLinks` is `true`
  **/
  completeFileUploadByToken(
    req: operations.CompleteFileUploadByTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteFileUploadByTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteFileUploadByTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/uploads/{token}", req.pathParams);

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
        const res: operations.CompleteFileUploadByTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.node = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uploadFileByTokenAsBinary1 - Upload file
   *
   * ### Description:  
   * Upload a (chunk of a) file.
   * 
   * ### Precondition:
   * Valid upload token.
   * 
   * ### Postcondition:
   * Chunk uploaded.
   * 
   * ### Further Information:
   * Range requests are supported.  
   * 
   * Following `Content-Types` are supported by this API:
   * * `multipart/form-data`
   * * provided `Content-Type`
   * 
   * For both file upload types set the correct `Content-Type` header and body.  
   * 
   * ### Examples:  
   * 
   * * `multipart/form-data`
   * ```
   * POST /api/v4/uploads/{token} HTTP/1.1
   * 
   * Header:
   * ...
   * Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
   * ...
   * 
   * Body:
   * ------WebKitFormBoundary7MA4YWxkTrZu0gW
   * Content-Disposition: form-data; name="file"; filename="file.txt"
   * Content-Type: text/plain
   * 
   * Content of file.txt
   * ------WebKitFormBoundary7MA4YWxkTrZu0gW--
   * ```
   * 
   * * any other `Content-Type` 
   * ```
   * POST /api/v4/uploads/{token} HTTP/1.1
   * 
   * Header:
   * ...
   * Content-Type: { ... }
   * ...
   * 
   * Body:
   * raw content
   * ```
   * 
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  uploadFileByTokenAsBinary1(
    req: operations.UploadFileByTokenAsBinary1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadFileByTokenAsBinary1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadFileByTokenAsBinary1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/uploads/{token}", req.pathParams);

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
        const res: operations.UploadFileByTokenAsBinary1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chunkUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileByTokenAsBinary1400ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileByTokenAsBinary1401ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileByTokenAsBinary1403ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileByTokenAsBinary1404ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileByTokenAsBinary1406ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 507:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadFileByTokenAsBinary1507ApplicationJsonOneOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
