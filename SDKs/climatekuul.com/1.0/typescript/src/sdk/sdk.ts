import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://api.climatekuul.com:8000/footprint",
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
  
  // AirtravelCoordinates - airtravelCoordinates
  AirtravelCoordinates(
    req: operations.AirtravelCoordinatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AirtravelCoordinatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AirtravelCoordinatesRequest(req);
    }
    
    let baseURL: string = operations.AIRTRAVELCOORDINATES_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelCoordinates";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AirtravelCoordinatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AirtravelMultileg - airtravelMultileg
  AirtravelMultileg(
    req: operations.AirtravelMultilegRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AirtravelMultilegResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AirtravelMultilegRequest(req);
    }
    
    let baseURL: string = operations.AIRTRAVELMULTILEG_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelMultileg";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AirtravelMultilegResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmCarbonOffset - confirmCarbonOffset
  ConfirmCarbonOffset(
    req: operations.ConfirmCarbonOffsetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmCarbonOffsetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmCarbonOffsetRequest(req);
    }
    
    let baseURL: string = operations.CONFIRMCARBONOFFSET_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/urbanDelivery/confirmCarbonOffset";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmCarbonOffsetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmCarbonOffset1 - confirmCarbonOffset
  ConfirmCarbonOffset1(
    req: operations.ConfirmCarbonOffset1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmCarbonOffset1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmCarbonOffset1Request(req);
    }
    
    let baseURL: string = operations.CONFIRMCARBONOFFSET1_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/ecommerceDelivery/confirmCarbonOffset";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmCarbonOffset1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmCarbonOffset3 - confirmCarbonOffset
  ConfirmCarbonOffset3(
    req: operations.ConfirmCarbonOffset3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmCarbonOffset3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmCarbonOffset3Request(req);
    }
    
    let baseURL: string = operations.CONFIRMCARBONOFFSET3_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelMultileg/confirmCarbonOffset";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmCarbonOffset3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmCarbonOffset4 - confirmCarbonOffset
  ConfirmCarbonOffset4(
    req: operations.ConfirmCarbonOffset4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmCarbonOffset4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmCarbonOffset4Request(req);
    }
    
    let baseURL: string = operations.CONFIRMCARBONOFFSET4_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelCoordinates/confirmCarbonOffset";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmCarbonOffset4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmCarbonOffset5 - confirmCarbonOffset
  ConfirmCarbonOffset5(
    req: operations.ConfirmCarbonOffset5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmCarbonOffset5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmCarbonOffset5Request(req);
    }
    
    let baseURL: string = operations.CONFIRMCARBONOFFSET5_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/roadDistance/confirmCarbonOffset";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmCarbonOffset5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPayment - confirmPayment
  ConfirmPayment(
    req: operations.ConfirmPaymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPaymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPaymentRequest(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENT_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/urbanDelivery/confirmPayment";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPaymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPayment1 - confirmPayment
  ConfirmPayment1(
    req: operations.ConfirmPayment1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPayment1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPayment1Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENT1_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/ecommerceDelivery/confirmPayment";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPayment1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPayment3 - confirmPayment
  ConfirmPayment3(
    req: operations.ConfirmPayment3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPayment3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPayment3Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENT3_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelMultileg/confirmPayment";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPayment3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPayment4 - confirmPayment
  ConfirmPayment4(
    req: operations.ConfirmPayment4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPayment4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPayment4Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENT4_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelCoordinates/confirmPayment";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPayment4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPayment5 - confirmPayment
  ConfirmPayment5(
    req: operations.ConfirmPayment5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPayment5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPayment5Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENT5_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/roadDistance/confirmPayment";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPayment5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPaymentOfTransaction - confirmTransaction
  ConfirmPaymentOfTransaction(
    req: operations.ConfirmPaymentOfTransactionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPaymentOfTransactionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPaymentOfTransactionRequest(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENTOFTRANSACTION_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/urbanDelivery/confirmTransaction";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPaymentOfTransactionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPaymentOfTransaction1 - confirmTransaction
  ConfirmPaymentOfTransaction1(
    req: operations.ConfirmPaymentOfTransaction1Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPaymentOfTransaction1Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPaymentOfTransaction1Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENTOFTRANSACTION1_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/ecommerceDelivery/confirmTransaction";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPaymentOfTransaction1Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPaymentOfTransaction3 - confirmTransaction
  ConfirmPaymentOfTransaction3(
    req: operations.ConfirmPaymentOfTransaction3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPaymentOfTransaction3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPaymentOfTransaction3Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENTOFTRANSACTION3_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelMultileg/confirmTransaction";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPaymentOfTransaction3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPaymentOfTransaction4 - confirmTransaction
  ConfirmPaymentOfTransaction4(
    req: operations.ConfirmPaymentOfTransaction4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPaymentOfTransaction4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPaymentOfTransaction4Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENTOFTRANSACTION4_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelCoordinates/confirmTransaction";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPaymentOfTransaction4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmPaymentOfTransaction5 - confirmTransaction
  ConfirmPaymentOfTransaction5(
    req: operations.ConfirmPaymentOfTransaction5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmPaymentOfTransaction5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmPaymentOfTransaction5Request(req);
    }
    
    let baseURL: string = operations.CONFIRMPAYMENTOFTRANSACTION5_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/roadDistance/confirmTransaction";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmPaymentOfTransaction5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmsPlanting - confirmPlanting
  ConfirmsPlanting(
    req: operations.ConfirmsPlantingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmsPlantingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmsPlantingRequest(req);
    }
    
    let baseURL: string = operations.CONFIRMSPLANTING_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/urbanDelivery/confirmPlanting";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmsPlantingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmsPlanting2 - confirmPlanting
  ConfirmsPlanting2(
    req: operations.ConfirmsPlanting2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmsPlanting2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmsPlanting2Request(req);
    }
    
    let baseURL: string = operations.CONFIRMSPLANTING2_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/ecommerceDelivery/confirmPlanting";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmsPlanting2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmsPlanting3 - confirmPlanting
  ConfirmsPlanting3(
    req: operations.ConfirmsPlanting3Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmsPlanting3Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmsPlanting3Request(req);
    }
    
    let baseURL: string = operations.CONFIRMSPLANTING3_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelMultileg/confirmPlanting";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmsPlanting3Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmsPlanting4 - confirmPlanting
  ConfirmsPlanting4(
    req: operations.ConfirmsPlanting4Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmsPlanting4Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmsPlanting4Request(req);
    }
    
    let baseURL: string = operations.CONFIRMSPLANTING4_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/airtravelCoordinates/confirmPlanting";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmsPlanting4Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ConfirmsPlanting5 - confirmPlanting
  ConfirmsPlanting5(
    req: operations.ConfirmsPlanting5Request,
    config?: AxiosRequestConfig
  ): Promise<operations.ConfirmsPlanting5Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConfirmsPlanting5Request(req);
    }
    
    let baseURL: string = operations.CONFIRMSPLANTING5_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/roadDistance/confirmPlanting";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ConfirmsPlanting5Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // EcommerceDelivery - ecommerceDelivery
  EcommerceDelivery(
    req: operations.EcommerceDeliveryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EcommerceDeliveryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EcommerceDeliveryRequest(req);
    }
    
    let baseURL: string = operations.ECOMMERCEDELIVERY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/ecommerceDelivery";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.EcommerceDeliveryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RequestApiKey - requestApiKey
  RequestApiKey(
    req: operations.RequestApiKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestApiKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestApiKeyRequest(req);
    }
    
    let baseURL: string = operations.REQUESTAPIKEY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/requestApiKey";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.RequestApiKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RoadDistance - RoadDistance
  RoadDistance(
    req: operations.RoadDistanceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RoadDistanceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RoadDistanceRequest(req);
    }
    
    let baseURL: string = operations.ROADDISTANCE_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/roadDistance";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.RoadDistanceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UrbanDelivery - urbanDelivery
  UrbanDelivery(
    req: operations.UrbanDeliveryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UrbanDeliveryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UrbanDeliveryRequest(req);
    }
    
    let baseURL: string = operations.URBANDELIVERY_SERVERS[0];
    const url: string = baseURL.replace(/\/$/, "") + "/urbanDelivery";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UrbanDeliveryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
