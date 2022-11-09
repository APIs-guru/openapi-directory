import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://unify.apideck.com",
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

// SDK Documentation: https://developers.apideck.com - Apideck Developer Docs
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
  
  // ItemsAdd - Create Item
  /** 
   * Create Item
  **/
  ItemsAdd(
    req: operations.ItemsAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemsAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemsAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/items";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ItemsAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createItemResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ItemsAll - List Items
  /** 
   * List Items
  **/
  ItemsAll(
    req: operations.ItemsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/items";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ItemsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getItemsResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ItemsDelete - Delete Item
  /** 
   * Delete Item
  **/
  ItemsDelete(
    req: operations.ItemsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/items/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ItemsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteItemResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ItemsOne - Get Item
  /** 
   * Get Item
  **/
  ItemsOne(
    req: operations.ItemsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/items/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ItemsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getItemResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ItemsUpdate - Update Item
  /** 
   * Update Item
  **/
  ItemsUpdate(
    req: operations.ItemsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemsUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/items/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ItemsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateItemResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LocationsAdd - Create Location
  /** 
   * Create Location
  **/
  LocationsAdd(
    req: operations.LocationsAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocationsAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocationsAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/locations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LocationsAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createLocationResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LocationsAll - List Locations
  /** 
   * List Locations
  **/
  LocationsAll(
    req: operations.LocationsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocationsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocationsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/locations";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LocationsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLocationsResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LocationsDelete - Delete Location
  /** 
   * Delete Location
  **/
  LocationsDelete(
    req: operations.LocationsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocationsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocationsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/locations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LocationsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteLocationResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LocationsOne - Get Location
  /** 
   * Get Location
  **/
  LocationsOne(
    req: operations.LocationsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocationsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocationsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/locations/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LocationsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLocationResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LocationsUpdate - Update Location
  /** 
   * Update Location
  **/
  LocationsUpdate(
    req: operations.LocationsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LocationsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LocationsUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/locations/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LocationsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateLocationResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MerchantsAdd - Create Merchant
  /** 
   * Create Merchant
  **/
  MerchantsAdd(
    req: operations.MerchantsAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MerchantsAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MerchantsAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/merchants";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MerchantsAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createMerchantResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MerchantsAll - List Merchants
  /** 
   * List Merchants
  **/
  MerchantsAll(
    req: operations.MerchantsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MerchantsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MerchantsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/merchants";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MerchantsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMerchantsResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MerchantsDelete - Delete Merchant
  /** 
   * Delete Merchant
  **/
  MerchantsDelete(
    req: operations.MerchantsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MerchantsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MerchantsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/merchants/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MerchantsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteMerchantResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MerchantsOne - Get Merchant
  /** 
   * Get Merchant
  **/
  MerchantsOne(
    req: operations.MerchantsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MerchantsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MerchantsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/merchants/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MerchantsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMerchantResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // MerchantsUpdate - Update Merchant
  /** 
   * Update Merchant
  **/
  MerchantsUpdate(
    req: operations.MerchantsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MerchantsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MerchantsUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/merchants/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.MerchantsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateMerchantResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifierGroupsAdd - Create Modifier Group
  /** 
   * Create Modifier Group
  **/
  ModifierGroupsAdd(
    req: operations.ModifierGroupsAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifierGroupsAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifierGroupsAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/modifier-groups";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifierGroupsAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createModifierGroupResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifierGroupsAll - List Modifier Groups
  /** 
   * List Modifier Groups
  **/
  ModifierGroupsAll(
    req: operations.ModifierGroupsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifierGroupsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifierGroupsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/modifier-groups";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifierGroupsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getModifierGroupsResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifierGroupsDelete - Delete Modifier Group
  /** 
   * Delete Modifier Group
  **/
  ModifierGroupsDelete(
    req: operations.ModifierGroupsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifierGroupsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifierGroupsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/modifier-groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifierGroupsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteModifierGroupResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifierGroupsOne - Get Modifier Group
  /** 
   * Get Modifier Group
  **/
  ModifierGroupsOne(
    req: operations.ModifierGroupsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifierGroupsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifierGroupsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/modifier-groups/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifierGroupsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getModifierGroupResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifierGroupsUpdate - Update Modifier Group
  /** 
   * Update Modifier Group
  **/
  ModifierGroupsUpdate(
    req: operations.ModifierGroupsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifierGroupsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifierGroupsUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/modifier-groups/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifierGroupsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateModifierGroupResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifiersAdd - Create Modifier
  /** 
   * Create Modifier
  **/
  ModifiersAdd(
    req: operations.ModifiersAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifiersAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifiersAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/modifiers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifiersAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createModifierResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifiersAll - List Modifiers
  /** 
   * List Modifiers
  **/
  ModifiersAll(
    req: operations.ModifiersAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifiersAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifiersAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/modifiers";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifiersAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getModifiersResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifiersDelete - Delete Modifier
  /** 
   * Delete Modifier
  **/
  ModifiersDelete(
    req: operations.ModifiersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifiersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifiersDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/modifiers/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifiersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteModifierResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifiersOne - Get Modifier
  /** 
   * Get Modifier
  **/
  ModifiersOne(
    req: operations.ModifiersOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifiersOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifiersOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/modifiers/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifiersOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getModifierResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ModifiersUpdate - Update Modifier
  /** 
   * Update Modifier
  **/
  ModifiersUpdate(
    req: operations.ModifiersUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifiersUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifiersUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/modifiers/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ModifiersUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateModifierResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrderTypesAdd - Create Order Type
  /** 
   * Create Order Type
  **/
  OrderTypesAdd(
    req: operations.OrderTypesAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrderTypesAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrderTypesAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/order-types";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrderTypesAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createOrderTypeResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrderTypesAll - List Order Types
  /** 
   * List Order Types
  **/
  OrderTypesAll(
    req: operations.OrderTypesAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrderTypesAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrderTypesAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/order-types";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrderTypesAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOrderTypesResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrderTypesDelete - Delete Order Type
  /** 
   * Delete Order Type
  **/
  OrderTypesDelete(
    req: operations.OrderTypesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrderTypesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrderTypesDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/order-types/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrderTypesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteOrderTypeResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrderTypesOne - Get Order Type
  /** 
   * Get Order Type
  **/
  OrderTypesOne(
    req: operations.OrderTypesOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrderTypesOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrderTypesOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/order-types/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrderTypesOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOrderTypeResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrderTypesUpdate - Update Order Type
  /** 
   * Update Order Type
  **/
  OrderTypesUpdate(
    req: operations.OrderTypesUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrderTypesUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrderTypesUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/order-types/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrderTypesUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateOrderTypeResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrdersAdd - Create Order
  /** 
   * Create Order
  **/
  OrdersAdd(
    req: operations.OrdersAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/orders";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrdersAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createOrderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrdersAll - List Orders
  /** 
   * List Orders
  **/
  OrdersAll(
    req: operations.OrdersAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/orders";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrdersAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOrdersResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrdersDelete - Delete Order
  /** 
   * Delete Order
  **/
  OrdersDelete(
    req: operations.OrdersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/orders/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrdersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteOrderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrdersOne - Get Order
  /** 
   * Get Order
  **/
  OrdersOne(
    req: operations.OrdersOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/orders/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrdersOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getOrderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrdersPay - Pay Order
  /** 
   * Pay Order
  **/
  OrdersPay(
    req: operations.OrdersPayRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersPayResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersPayRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/orders/{id}/pay", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrdersPayResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createOrderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // OrdersUpdate - Update Order
  /** 
   * Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).
   * 
  **/
  OrdersUpdate(
    req: operations.OrdersUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OrdersUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OrdersUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/orders/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.OrdersUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateOrderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PaymentsAdd - Create Payment
  /** 
   * Create Payment
  **/
  PaymentsAdd(
    req: operations.PaymentsAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/payments";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PaymentsAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createPosPaymentResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PaymentsAll - List Payments
  /** 
   * List Payments
  **/
  PaymentsAll(
    req: operations.PaymentsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/payments";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PaymentsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPosPaymentsResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PaymentsDelete - Delete Payment
  /** 
   * Delete Payment
  **/
  PaymentsDelete(
    req: operations.PaymentsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/payments/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PaymentsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deletePosPaymentResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PaymentsOne - Get Payment
  /** 
   * Get Payment
  **/
  PaymentsOne(
    req: operations.PaymentsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/payments/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PaymentsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPosPaymentResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PaymentsUpdate - Update Payment
  /** 
   * Update Payment
  **/
  PaymentsUpdate(
    req: operations.PaymentsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PaymentsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PaymentsUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/payments/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PaymentsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updatePosPaymentResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TendersAdd - Create Tender
  /** 
   * Create Tender
  **/
  TendersAdd(
    req: operations.TendersAddRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TendersAddResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TendersAddRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/tenders";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TendersAddResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 201:
            if (MatchContentType(contentType, `application/json`)) {
                res.createTenderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TendersAll - List Tenders
  /** 
   * List Tenders
  **/
  TendersAll(
    req: operations.TendersAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TendersAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TendersAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/pos/tenders";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TendersAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTendersResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TendersDelete - Delete Tender
  /** 
   * Delete Tender
  **/
  TendersDelete(
    req: operations.TendersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TendersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TendersDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/tenders/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TendersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteTenderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TendersOne - Get Tender
  /** 
   * Get Tender
  **/
  TendersOne(
    req: operations.TendersOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TendersOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TendersOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/tenders/{id}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TendersOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTenderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TendersUpdate - Update Tender
  /** 
   * Update Tender
  **/
  TendersUpdate(
    req: operations.TendersUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TendersUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TendersUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/pos/tenders/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TendersUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateTenderResponse = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.badRequestResponse = httpRes?.data;
            }
            break;
          case 401:
            if (MatchContentType(contentType, `application/json`)) {
                res.unauthorizedResponse = httpRes?.data;
            }
            break;
          case 402:
            if (MatchContentType(contentType, `application/json`)) {
                res.paymentRequiredResponse = httpRes?.data;
            }
            break;
          case 404:
            if (MatchContentType(contentType, `application/json`)) {
                res.notFoundResponse = httpRes?.data;
            }
            break;
          case 422:
            if (MatchContentType(contentType, `application/json`)) {
                res.unprocessableResponse = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.unexpectedErrorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
