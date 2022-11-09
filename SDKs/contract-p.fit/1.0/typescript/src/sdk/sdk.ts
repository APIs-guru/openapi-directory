import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://contract-p.fit//cfportal.contract-p.fit/api",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
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
  
  // DeleteDocumentResource - Delete the document
  /** 
   * Completely delete the document.
   * 
   * **WARNING** This removes the document from our system: it will not be recoverable
   * 
   * 
   * **Permission required:** review
  **/
  DeleteDocumentResource(
    req: operations.DeleteDocumentResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDocumentResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDocumentResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDocumentResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDocumentOriginalFileResource - Get document original file
  /** 
   * Return the document original file, as attachment.
   * 
   * **Permission required:** review
  **/
  GetDocumentOriginalFileResource(
    req: operations.GetDocumentOriginalFileResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentOriginalFileResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentOriginalFileResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}/original_file", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDocumentOriginalFileResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetDocumentPageImageResource(
    req: operations.GetDocumentPageImageResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentPageImageResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentPageImageResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}/page/{page_range}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDocumentPageImageResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDocumentResource - Get the document
  /** 
   * Simple endpoint that will fetch the given document
   * 
   * **Permission required:** review
  **/
  GetDocumentResource(
    req: operations.GetDocumentResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDocumentResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.documentModelGet = httpRes?.data;
            }
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDocumentTextResource - Get the document text
  /** 
   * Return the optimal text for the document; will either be the OCR text, the native text,
   * the raw text or a translated version.
   * 
   * **Permission required:** review
  **/
  GetDocumentTextResource(
    req: operations.GetDocumentTextResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDocumentTextResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDocumentTextResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{document_id}/text", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDocumentTextResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostDocumentsSimpleApiResource - Upload a new doc to the inbox
  /** 
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
  PostDocumentsSimpleApiResource(
    req: operations.PostDocumentsSimpleApiResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostDocumentsSimpleApiResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostDocumentsSimpleApiResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/documents/{inbox_id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostDocumentsSimpleApiResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            break;
          case 415:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostSimpleDocumentsResource - Upload a new document
  /** 
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
  PostSimpleDocumentsResource(
    req: operations.PostSimpleDocumentsResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSimpleDocumentsResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSimpleDocumentsResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/documents/";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PostSimpleDocumentsResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
