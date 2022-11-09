import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://apisetu.gov.in/tataaia/v3",
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
  
  // Licer - Insurance Policy - Life
  /** 
   * API to verify Insurance Policy - Life.
  **/
  Licer(
    req: operations.LicerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/licer/certificate";
    
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
        let res: operations.LicerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.licer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Prcpt - Premium Receipt
  /** 
   * API to verify Premium Receipt.
  **/
  Prcpt(
    req: operations.PrcptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PrcptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PrcptRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/prcpt/certificate";
    
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
        let res: operations.PrcptResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.prcpt504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
