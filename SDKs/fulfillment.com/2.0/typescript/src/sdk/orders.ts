import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Orders {
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
   * deleteOrdersId - Cancel an Order
   *
   * Request an order is canceled to prevent shipment.
  **/
  deleteOrdersId(
    req: operations.DeleteOrdersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOrdersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOrdersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOrdersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneordersPostResponses201ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneordersGetResponses404ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrders - List of Orders
   *
   * Retrieve many orders at once
  **/
  getOrders(
    req: operations.GetOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/orders";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orderResponseOneOfV2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorStandardV2 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOrder - Order Details
   *
   * For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.
  **/
  getOrder(
    req: operations.GetOrderRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrderResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrderRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orders/{id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetOrderResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneordersGetResponses200ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOrders - New Order
   *
   * Error Notes&#58;
   * * When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.
   * 
  **/
  postOrders(
    req: operations.PostOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/orders";

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
        const res: operations.PostOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orderResponseV2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneordersGetResponses404ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oneordersGetResponses404ContentApplication1jsonSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorStandardWithContextV2 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
