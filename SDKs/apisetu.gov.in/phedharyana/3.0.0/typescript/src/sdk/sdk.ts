import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://apisetu.gov.in/phedharyana/v3",
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
  
  // Etcer - Enlistment Certificate
  /** 
   * API to verify Enlistment Certificate.
  **/
  Etcer(
    req: operations.EtcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EtcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EtcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etcer/certificate";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.EtcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.etcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Govid - ID Card
  /** 
   * API to verify ID Card.
  **/
  Govid(
    req: operations.GovidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GovidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GovidRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/govid/certificate";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GovidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.govid504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Sicer - Sanction Letter/ Certificate
  /** 
   * API to verify Sanction Letter/ Certificate.
  **/
  Sicer(
    req: operations.SicerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SicerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SicerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sicer/certificate";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SicerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.sicer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
