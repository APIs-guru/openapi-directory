import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Public {
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
   * cancelFileUploadViaShare - Cancel file upload
   *
   * ### Description:
   * Abort (chunked) upload via Upload Share.
   * 
   * ### Precondition:
   * Valid Upload ID.
   * 
   * ### Postcondition:
   * Aborts upload and invalidates upload ID / token.
   * 
   * ### Further Information:
   * None.
  **/
  cancelFileUploadViaShare(
    req: operations.CancelFileUploadViaShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelFileUploadViaShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelFileUploadViaShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}/{upload_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelFileUploadViaShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 504:
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
   * completeFileUploadViaShare - Complete file upload
   *
   * ### Description:
   * Finalize (chunked) upload via Upload Share.
   * 
   * ### Precondition:
   * Valid upload ID.  
   * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
   * 
   * ### Postcondition:
   * Finalizes upload.
   * 
   * ### Further Information:
   * Chunked uploads (range requests) are supported.  
   * 
   * Please ensure that all chunks have been transferred correctly before finishing the upload.  
   * If file hash has been created in time a `201 Created` will be responded and hash will be part of response, otherwise it will be a `202 Accepted` without it.
   * 
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  completeFileUploadViaShare(
    req: operations.CompleteFileUploadViaShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteFileUploadViaShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteFileUploadViaShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}/{upload_id}", req.pathParams);

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
        const res: operations.CompleteFileUploadViaShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicUploadedFileData = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicUploadedFileData = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
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
   * completeS3FileUploadViaShare - Complete S3 file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
   * 
   * ### Description:
   * Finishes a S3 file upload and closes the corresponding upload channel.
   * 
   * ### Precondition:
   * Valid upload ID.  
   * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
   * 
   * ### Postcondition:
   * Upload channel is closed. S3 multipart upload request is completed.
   * 
   * ### Further Information:
   * None.
   * 
  **/
  completeS3FileUploadViaShare(
    req: operations.CompleteS3FileUploadViaShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompleteS3FileUploadViaShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompleteS3FileUploadViaShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}/{upload_id}/s3", req.pathParams);

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
        const res: operations.CompleteS3FileUploadViaShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 412:
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
   * createShareUploadChannel - Create new file upload channel
   *
   * ### Description:  
   * Create a new upload channel.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Upload channel is created and corresponding upload URL, token & upload ID are returned.
   * 
   * ### Further Information:
   * Use `uploadUrl` the upload `token` is deprecated.  
   * 
   * Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.
   * 
   * ### Node naming convention:
   * * Node (room, folder, file) names are limited to **150** characters.
   * * Illegal names:  
   * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
   * * Illegal characters in names:  
   * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
   * 
  **/
  createShareUploadChannel(
    req: operations.CreateShareUploadChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateShareUploadChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateShareUploadChannelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}", req.pathParams);

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
        const res: operations.CreateShareUploadChannelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createShareUploadChannelResponse = httpRes?.data;
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
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
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
   * downloadFileViaTokenPublic - Download file with token
   *
   * ### Description:  
   * Download a file (or zip archive if target is a folder or room).
   * 
   * ### Precondition:
   * Valid download token.
   * 
   * ### Postcondition:
   * Stream is returned.
   * 
   * ### Further Information:
   * Range requests are supported.  
   * Range requests are illegal for zip archive download.
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  downloadFileViaTokenPublic(
    req: operations.DownloadFileViaTokenPublicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadFileViaTokenPublicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadFileViaTokenPublicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/downloads/{access_key}/{token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadFileViaTokenPublicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 206:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 416:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * downloadFileViaTokenPublic1 - Download file with token
   *
   * ### Description:  
   * Download a file (or zip archive if target is a folder or room).
   * 
   * ### Precondition:
   * Valid download token.
   * 
   * ### Postcondition:
   * Stream is returned.
   * 
   * ### Further Information:
   * Range requests are supported.  
   * Range requests are illegal for zip archive download.
   *
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  downloadFileViaTokenPublic1(
    req: operations.DownloadFileViaTokenPublic1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadFileViaTokenPublic1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadFileViaTokenPublic1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/downloads/{access_key}/{token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "head",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadFileViaTokenPublic1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 206:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 416:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generateDownloadUrlPublic - Generate download URL
   *
   * ### Description:
   * Generate a download URL to retrieve a shared file.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Download URL and token are generated and returned.
   * 
   * ### Further Information:
   * Use `downloadUrl` the download `token` is deprecated.
  **/
  generateDownloadUrlPublic(
    req: operations.GenerateDownloadUrlPublicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateDownloadUrlPublicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateDownloadUrlPublicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/downloads/{access_key}", req.pathParams);

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
        const res: operations.GenerateDownloadUrlPublicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicDownloadTokenGenerateResponse = httpRes?.data;
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * generatePresignedUrlsPublic - Generate presigned URLs for S3 file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
   * 
   * ### Description:
   * Generate presigned URLs for S3 file upload.
   * 
   * ### Precondition:
   * Valid upload ID
   * 
   * ### Postcondition:
   * List of presigned URLs is returned.
   * 
   * ### Further Information:
   * The size for each part must be >= 5 MB, except for the last part.  
   * The part number of the first part in S3 is 1 (not 0).  
   * Use HTTP method `PUT` for uploading bytes via presigned URL.
  **/
  generatePresignedUrlsPublic(
    req: operations.GeneratePresignedUrlsPublicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GeneratePresignedUrlsPublicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GeneratePresignedUrlsPublicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}/{upload_id}/s3_urls", req.pathParams);

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
        const res: operations.GeneratePresignedUrlsPublicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presignedUrlList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
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
   * requestActiveDirectoryAuthInfo - Request Active Directory authentication information
   *
   * ### Description:  
   * Provides information about Active Directory authentication options.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Active Directory authentication options information is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestActiveDirectoryAuthInfo(
    req: operations.RequestActiveDirectoryAuthInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestActiveDirectoryAuthInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestActiveDirectoryAuthInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/public/system/info/auth/ad";
    
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
        const res: operations.RequestActiveDirectoryAuthInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.activeDirectoryAuthInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
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
   * requestOpenIdAuthInfo - Request OpenID Connect provider authentication information
   *
   * ### Description:  
   * Provides information about OpenID Connect authentication options.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * OpenID Connect authentication options information is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestOpenIdAuthInfo(
    req: operations.RequestOpenIdAuthInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestOpenIdAuthInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestOpenIdAuthInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/public/system/info/auth/openid";
    
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
        const res: operations.RequestOpenIdAuthInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.openIdAuthInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
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
   * requestPublicDownloadShareInfo - Request public Download Share information
   *
   * ### Description:  
   * Retrieve the public information of a Download Share.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Download Share information is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestPublicDownloadShareInfo(
    req: operations.RequestPublicDownloadShareInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestPublicDownloadShareInfoResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestPublicDownloadShareInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/downloads/{access_key}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestPublicDownloadShareInfoResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicDownloadShare = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestPublicUploadShareInfo - Request public Upload Share information
   *
   * ### Description:  
   * Provides information about the desired Upload Share.
   * 
   * ### Precondition:
   * Only `userUserPublicKeyList` is returned to the users who owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
   * 
   * ### Postcondition:
   * None.
   * 
   * ### Further Information:
   * If no password is set, the returned information is reduced to the following attributes (if available):
   * 
   * * `name`
   * * `maxSlots`
   * * `createdAt`
   * * `isProtected`
   * * `isEncrypted`
   * * `showUploadedFiles`
   * * `userUserPublicKeyList` (if parent is end-to-end encrypted)
   * 
   * Only if the password is transmitted as `X-Sds-Share-Password` header, all values are returned.
   * 
  **/
  requestPublicUploadShareInfo(
    req: operations.RequestPublicUploadShareInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestPublicUploadShareInfoResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestPublicUploadShareInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestPublicUploadShareInfoResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publicUploadShare = httpRes?.data;
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestSoftwareVersion - Request software version information
   *
   * ### Description:  
   * Public software version information.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Sofware version information is returned.
   * 
   * ### Further Information:
   * The version of DRACOON Server consists of two components:
   * * **API**
   * * **Core** (referred to as _"Server"_)
   * 
   * which are versioned individually.
  **/
  requestSoftwareVersion(
    req: operations.RequestSoftwareVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSoftwareVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSoftwareVersionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/public/software/version";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestSoftwareVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.softwareVersionData = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
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
   * requestSystemInfo - Request system information
   *
   * ### Description:  
   * Provides information about system.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * System information is returned.
   * 
   * ### Further Information:
   * Authentication methods are sorted by **priority** attribute.  
   * Smaller values have higher priority.  
   * Authentication method with highest priority is considered as default.
   * 
   * ### System information:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Setting | Description | Value |
   * | :--- | :--- | :--- |
   * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
   * | `hideLoginInputFields` | Defines if login fields should be hidden. | `true or false` |
   * | `s3Hosts` | List of available S3 hosts. | `String array` |
   * | `s3EnforceDirectUpload` | Determines whether S3 direct upload is enforced or not. | `true or false` |
   * | `useS3Storage` | Determines whether S3 Storage enabled and used. | `true or false` |
   * 
   * </details>
   * 
   * ### Authentication methods:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Authentication Method | Description |
   * | :--- | :--- |
   * | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
   * | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
   * | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
   * | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
   * | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
   * 
   * </details>
   *
   * https://tools.ietf.org/html/rfc5646 - Tags for Identifying Languages
  **/
  requestSystemInfo(
    req: operations.RequestSystemInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSystemInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSystemInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/public/system/info";
    
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
        const res: operations.RequestSystemInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.systemInfo = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
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
   * requestSystemTime - Request system time
   *
   * ### Description:  
   * Retrieve the actual server time.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Server time is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestSystemTime(
    req: operations.RequestSystemTimeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestSystemTimeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestSystemTimeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/public/time";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestSystemTimeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sdsServerTime = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
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
   * requestThirdPartyDependencies - Request third-party software dependencies
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
   * 
   * ### Description:  
   * Provides information about used third-party software dependencies.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * List of the third-party software dependencies used by **DRACOON Core** (referred to as _"Server"_) is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * 
  **/
  requestThirdPartyDependencies(
    config?: AxiosRequestConfig
  ): Promise<operations.RequestThirdPartyDependenciesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/public/software/third_party_dependencies";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestThirdPartyDependenciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.thirdPartyDependenciesData = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
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
   * requestUploadStatusPublic - Request status of S3 file upload
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
   * 
   * ### Description:
   * Request status of a S3 file upload.
   * 
   * ### Precondition:
   * An upload channel has been created and the user has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).
   * 
   * ### Postcondition:
   * Status of S3 multipart upload request is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Possible errors:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Http Status | Error Code | Description |
   * | :--- | :--- | :--- |
   * | `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
   * | `400 Bad Request` | `-80001` | Invalid positive number |
   * | `400 Bad Request` | `-80002` | Invalid number |
   * | `400 Bad Request` | `-40001` | (Target) room is not encrypted |
   * | `400 Bad Request` | `-40755` | Bad file name |
   * | `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
   * | `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
   * | `403 Forbidden` |  | Access denied |
   * | `404 Not Found` | `-20501` | Upload not found |
   * | `404 Not Found` | `-40000` | Container not found |
   * | `404 Not Found` | `-41000` | Node not found |
   * | `404 Not Found` | `-70501` | User not found |
   * | `409 Conflict` | `-40010` | Container cannot be overwritten |
   * | `409 Conflict` |  | File cannot be overwritten |
   * | `500 Internal Server Error` |  | System Error |
   * | `502 Bad Gateway` |  | S3 Error |
   * | `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
   * | `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
   * | `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
   * | `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |
   * 
   * </details>
  **/
  requestUploadStatusPublic(
    req: operations.RequestUploadStatusPublicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUploadStatusPublicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUploadStatusPublicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}/{upload_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestUploadStatusPublicResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.s3ShareUploadStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 412:
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
   * uploadFileAsMultipartPublic1 - Upload file
   *
   * ### Description:  
   * Chunked upload of files via Upload Share.
   * 
   * ### Precondition:
   * Valid upload ID.
   * 
   * ### Postcondition:
   * Chunk of file is uploaded.
   * 
   * ### Further Information:
   * Chunked uploads (range requests) are supported.
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
   * POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1
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
   * POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1
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
   * https://tools.ietf.org/html/rfc7233 - Range Requests
  **/
  uploadFileAsMultipartPublic1(
    req: operations.UploadFileAsMultipartPublic1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadFileAsMultipartPublic1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadFileAsMultipartPublic1Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/public/shares/uploads/{access_key}/{upload_id}", req.pathParams);

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
        const res: operations.UploadFileAsMultipartPublic1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chunkUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chunkUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 412:
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

}
