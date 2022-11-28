import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Sms {
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
   * listUserSSubscriptionGroupSms - List User's Subscription Group - SMS
   *
   * Use the endpoint below to list and get the subscription groups of a certain user.
   * 
   * > If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).
  **/
  listUserSSubscriptionGroupSms(
    req: operations.ListUserSSubscriptionGroupSmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserSSubscriptionGroupSmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserSSubscriptionGroupSmsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscription/user/status";
    
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
        const res: operations.ListUserSSubscriptionGroupSmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listUserSSubscriptionGroupStatusSms - List User's  Subscription Group Status - SMS
   *
   * Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.
   * 
   * > *Either `external_id` or `email` are required.
   * 
   * ## Response
   * 
   * All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "status": {
   *     "1": "Unsubscribed",
   *     "2": "Subscribed"
   *   },
   *   "message": "success"
   * }
   * ```
  **/
  listUserSSubscriptionGroupStatusSms(
    req: operations.ListUserSSubscriptionGroupStatusSmsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUserSSubscriptionGroupStatusSmsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUserSSubscriptionGroupStatusSmsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscription/status/get";
    
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
        const res: operations.ListUserSSubscriptionGroupStatusSmsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
