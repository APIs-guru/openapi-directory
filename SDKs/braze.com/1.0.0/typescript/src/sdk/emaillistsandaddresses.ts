import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class EmailListsAndAddresses {
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
   * queryHardBouncedEmails - Query Hard Bounced Emails
   *
   * This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
   * 
   * > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
   * 
   * ## Response
   * 
   * Entries are listed in descending order.
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *   "emails": [
   *     {
   *       "email": "example1@braze.com",
   *       "hard_bounced_at": "2016-08-25 15:24:32 +0000"
   *     },
   *     {
   *       "email": "example2@braze.com",
   *       "hard_bounced_at": "2016-08-24 17:41:58 +0000"
   *     },
   *     {
   *       "email": "example3@braze.com",
   *       "hard_bounced_at": "2016-08-24 12:01:13 +0000"
   *     }
   *   ],
   *   "message": "success"
   * }
   * ```
  **/
  queryHardBouncedEmails(
    req: operations.QueryHardBouncedEmailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryHardBouncedEmailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryHardBouncedEmailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/email/hard_bounces";
    
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
        const res: operations.QueryHardBouncedEmailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * queryListOfUnsubscribedEmailAddresses - Query List of Unsubscribed Email Addresses
   *
   * Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
   * 
   * > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
  **/
  queryListOfUnsubscribedEmailAddresses(
    req: operations.QueryListOfUnsubscribedEmailAddressesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryListOfUnsubscribedEmailAddressesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryListOfUnsubscribedEmailAddressesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/email/unsubscribes";
    
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
        const res: operations.QueryListOfUnsubscribedEmailAddressesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
