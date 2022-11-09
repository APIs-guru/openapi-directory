import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://apisetu.gov.in/edistrictkerala/v3",
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
  
  // Cmcer - Community Certificate
  /** 
   * API to verify Community Certificate.
  **/
  Cmcer(
    req: operations.CmcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CmcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CmcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/cmcer/certificate";
    
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
        let res: operations.CmcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.cmcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Cncer - Conversion Certificate
  /** 
   * API to verify Conversion Certificate.
  **/
  Cncer(
    req: operations.CncerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CncerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CncerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/cncer/certificate";
    
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
        let res: operations.CncerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.cncer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Ctcer - Caste Certificate
  /** 
   * API to verify Caste Certificate.
  **/
  Ctcer(
    req: operations.CtcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CtcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CtcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ctcer/certificate";
    
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
        let res: operations.CtcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.ctcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Dmcer - Domicile Certificate
  /** 
   * API to verify Domicile Certificate.
  **/
  Dmcer(
    req: operations.DmcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DmcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DmcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/dmcer/certificate";
    
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
        let res: operations.DmcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.dmcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Dpcer - Dependency Certificate
  /** 
   * API to verify Dependency Certificate.
  **/
  Dpcer(
    req: operations.DpcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DpcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DpcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/dpcer/certificate";
    
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
        let res: operations.DpcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.dpcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Dscer - Destitute Certificate
  /** 
   * API to verify Destitute Certificate.
  **/
  Dscer(
    req: operations.DscerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DscerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DscerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/dscer/certificate";
    
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
        let res: operations.DscerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.dscer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Fmcer - Family Membership Certificate
  /** 
   * API to verify Family Membership Certificate.
  **/
  Fmcer(
    req: operations.FmcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FmcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FmcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/fmcer/certificate";
    
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
        let res: operations.FmcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.fmcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Idcer - Identification Certificate
  /** 
   * API to verify Identification Certificate.
  **/
  Idcer(
    req: operations.IdcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IdcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IdcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/idcer/certificate";
    
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
        let res: operations.IdcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.idcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Imcer - Inter-Caste Marriage Certificate
  /** 
   * API to verify Inter-Caste Marriage Certificate.
  **/
  Imcer(
    req: operations.ImcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/imcer/certificate";
    
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
        let res: operations.ImcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.imcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Incer - Income Certificate
  /** 
   * API to verify Income Certificate.
  **/
  Incer(
    req: operations.IncerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IncerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IncerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/incer/certificate";
    
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
        let res: operations.IncerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.incer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Lfcer - Life Certificate
  /** 
   * API to verify Life Certificate.
  **/
  Lfcer(
    req: operations.LfcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LfcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LfcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lfcer/certificate";
    
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
        let res: operations.LfcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.lfcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Lhcer - Legal Heir Certificate
  /** 
   * API to verify Legal Heir Certificate.
  **/
  Lhcer(
    req: operations.LhcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LhcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LhcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lhcer/certificate";
    
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
        let res: operations.LhcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.lhcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Locer - Location Certificate
  /** 
   * API to verify Location Certificate.
  **/
  Locer(
    req: operations.LocerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/locer/certificate";
    
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
        let res: operations.LocerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.locer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Mncer - Minority Certificate
  /** 
   * API to verify Minority Certificate.
  **/
  Mncer(
    req: operations.MncerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MncerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MncerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mncer/certificate";
    
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
        let res: operations.MncerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.mncer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Nrcer - Non-Remarriage Certificate
  /** 
   * API to verify Non-Remarriage Certificate.
  **/
  Nrcer(
    req: operations.NrcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NrcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NrcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/nrcer/certificate";
    
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
        let res: operations.NrcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.nrcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Ntcer - Nativity Certificate
  /** 
   * API to verify Nativity Certificate.
  **/
  Ntcer(
    req: operations.NtcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NtcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NtcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ntcer/certificate";
    
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
        let res: operations.NtcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.ntcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Oscer - One and the Same Certificate
  /** 
   * API to verify One and the Same Certificate.
  **/
  Oscer(
    req: operations.OscerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OscerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OscerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oscer/certificate";
    
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
        let res: operations.OscerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.oscer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Pncer - Possession and Non-Attachment Certificate
  /** 
   * API to verify Possession and Non-Attachment Certificate.
  **/
  Pncer(
    req: operations.PncerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PncerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PncerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pncer/certificate";
    
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
        let res: operations.PncerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.pncer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Pscer - Possession Certificate
  /** 
   * API to verify Possession Certificate.
  **/
  Pscer(
    req: operations.PscerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PscerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PscerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pscer/certificate";
    
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
        let res: operations.PscerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.pscer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Rlcer - Relationship Certificate
  /** 
   * API to verify Relationship Certificate.
  **/
  Rlcer(
    req: operations.RlcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RlcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RlcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rlcer/certificate";
    
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
        let res: operations.RlcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.rlcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Rscer - Residence Certificate
  /** 
   * API to verify Residence Certificate.
  **/
  Rscer(
    req: operations.RscerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RscerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RscerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rscer/certificate";
    
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
        let res: operations.RscerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.rscer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Slcer - Solvency Certificate
  /** 
   * API to verify Solvency Certificate.
  **/
  Slcer(
    req: operations.SlcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SlcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SlcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/slcer/certificate";
    
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
        let res: operations.SlcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.slcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Vlcer - Valuation Certificate
  /** 
   * API to verify Valuation Certificate.
  **/
  Vlcer(
    req: operations.VlcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VlcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VlcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vlcer/certificate";
    
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
        let res: operations.VlcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.vlcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // Wwcer - Widow-Widower Certificate
  /** 
   * API to verify Widow-Widower Certificate.
  **/
  Wwcer(
    req: operations.WwcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WwcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WwcerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wwcer/certificate";
    
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
        let res: operations.WwcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer401ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer404ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 500:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer500ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 502:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer502ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 503:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer503ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 504:
            if (MatchContentType(contentType, `application/json`)) {
                res.wwcer504ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
