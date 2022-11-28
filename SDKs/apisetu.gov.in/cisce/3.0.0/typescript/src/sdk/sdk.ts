import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://apisetu.gov.in/cisce/v3",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * hpcer - Class XII Passing Certificate
   *
   * API to verify Class XII Passing Certificate.
  **/
  hpcer(
    req: operations.HpcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HpcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HpcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hpcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.HpcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hpcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * hscer - Class XII Marksheet
   *
   * API to verify Class XII Marksheet.
  **/
  hscer(
    req: operations.HscerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HscerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HscerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hscer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.HscerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hscer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * hsmgr - Class XII Migration Certificate
   *
   * API to verify Class XII Migration Certificate.
  **/
  hsmgr(
    req: operations.HsmgrRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.HsmgrResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.HsmgrRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hsmgr/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.HsmgrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hsmgr504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * spcer - Class X Passing Certificate
   *
   * API to verify Class X Passing Certificate.
  **/
  spcer(
    req: operations.SpcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SpcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SpcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/spcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SpcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.spcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sscer - Class X Marksheet
   *
   * API to verify Class X Marksheet.
  **/
  sscer(
    req: operations.SscerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SscerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SscerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sscer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SscerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sscer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
