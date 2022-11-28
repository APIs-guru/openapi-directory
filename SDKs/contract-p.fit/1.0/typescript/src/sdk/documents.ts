import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Documents {
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
   * deleteDocumentResource - Delete the document
   *
   * Completely delete the document.
   * 
   * **WARNING** This removes the document from our system: it will not be recoverable
   * 
   * 
   * **Permission required:** review
  **/
  deleteDocumentResource(
    req: operations.DeleteDocumentResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDocumentResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDocumentResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteDocumentResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDocumentOriginalFileResource - Get document original file
   *
   * Return the document original file, as attachment.
   * 
   * **Permission required:** review
  **/
  getDocumentOriginalFileResource(
    req: operations.GetDocumentOriginalFileResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentOriginalFileResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentOriginalFileResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}/original_file", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentOriginalFileResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getDocumentPageImageResource(
    req: operations.GetDocumentPageImageResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentPageImageResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentPageImageResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}/page/{page_range}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentPageImageResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDocumentResource - Get the document
   *
   * Simple endpoint that will fetch the given document
   * 
   * **Permission required:** review
  **/
  getDocumentResource(
    req: operations.GetDocumentResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.documentModelGet = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDocumentTextResource - Get the document text
   *
   * Return the optimal text for the document; will either be the OCR text, the native text,
   * the raw text or a translated version.
   * 
   * **Permission required:** review
  **/
  getDocumentTextResource(
    req: operations.GetDocumentTextResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentTextResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentTextResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}/text", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDocumentTextResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postDocumentsSimpleApiResource - Upload a new doc to the inbox
   *
   * This endpoint uploads a new file to the given inbox and will process the file.
   * 
   * ## Upload mode: sync
   * 
   * When sync=true (default), the call will block and wait for the processing to complete.
   * 
   * If you have a custom output configured (this is set by Contract Fit team),
   * passing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result
   * 
   * Since it might yield inconsistent results if a timeout is raised while waiting,
   * it is recommended to use the **async** mode.
   * 
   * ## Upload mode: async
   * 
   * When sync=false, the call will schedule the processing and return without waiting for completion.
   * It will return the document ID, so that the processed document can be retrieved at a later date.
   * 
   * **Permission required:** upload
  **/
  postDocumentsSimpleApiResource(
    req: operations.PostDocumentsSimpleApiResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDocumentsSimpleApiResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDocumentsSimpleApiResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{inbox_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostDocumentsSimpleApiResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 415:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postSimpleDocumentsResource - Upload a new document
   *
   * This endpoint is a simplified version of the upload document to inbox one - synchronous mode.
   * 
   * The upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.
   * The file will be processed synchronously, ie the request will blocks until the document was processed
   * *or* until it timeout; in this case the document might **not** be correctly processed.
   * 
   * 
   * For a more reliable processing use the /documents/{inbox_id} endpoint in async mode
   * 
   * 
   * **Permission required:** upload
  **/
  postSimpleDocumentsResource(
    req: operations.PostSimpleDocumentsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSimpleDocumentsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSimpleDocumentsResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/documents/";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostSimpleDocumentsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
