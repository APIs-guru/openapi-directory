import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Disbursements {
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
   * getSchedulesScheduleB - 
   * Schedule B filings describe itemized disbursements. This data
   * explains how committees and other filers spend their money. These figures are
   * reported as part of forms F3, F3X and F3P.
   * 
   * The data is divided in two-year periods, called `two_year_transaction_period`, which
   * is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
   * default to the most recent two-year period that is named after the ending,
   * even-numbered year.
   * 
   * Due to the large quantity of Schedule B filings, this endpoint is not paginated by
   * page number. Instead, you can request the next page of results by adding the values in
   * the `last_indexes` object from `pagination` to the URL of your last request. For
   * example, when sorting by `disbursement_date`, you might receive a page of
   * results with the following pagination information:
   * 
   * ```
   * pagination: {
   *     pages: 965191,
   *     per_page: 20,
   *     count: 19303814,
   *     last_indexes: {
   *         last_index: "230906248",
   *         last_disbursement_date: "2014-07-04"
   *     }
   * }
   * ```
   * 
   * To fetch the next page of sorted results, append `last_index=230906248` and
   * `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
   * these results by using the sort indices (defaults to sort by disbursement date, e.g.
   * `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
   * This resource uses keyset pagination to improve query performance
   * and these indices are required to properly page through this large dataset.
   * 
   * Note: because the Schedule B data includes many records, counts for
   * large result sets are approximate; you will want to page through the records until no records are returned.
   * 
  **/
  getSchedulesScheduleB(
    req: operations.GetSchedulesScheduleBRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSchedulesScheduleBResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleBPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleBByPurpose - 
   * Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
   * memoed items are not included.
   * Purpose is a combination of transaction codes, category codes and disbursement description.
   * Inspect the `disbursement_purpose` sql function within the migrations for more details.
   * 
  **/
  getSchedulesScheduleBByPurpose(
    req: operations.GetSchedulesScheduleBByPurposeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBByPurposeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBByPurposeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_purpose/";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSchedulesScheduleBByPurposeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleBByPurposePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleBByRecipient - 
   * Schedule B disbursements aggregated by recipient name. To avoid double counting,
   * memoed items are not included.
   * 
  **/
  getSchedulesScheduleBByRecipient(
    req: operations.GetSchedulesScheduleBByRecipientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBByRecipientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBByRecipientRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_recipient/";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSchedulesScheduleBByRecipientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleBByRecipientPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleBByRecipientId - 
   * Schedule B disbursements aggregated by recipient committee ID, if applicable.
   * To avoid double counting, memoed items are not included.
   * 
  **/
  getSchedulesScheduleBByRecipientId(
    req: operations.GetSchedulesScheduleBByRecipientIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBByRecipientIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBByRecipientIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/by_recipient_id/";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSchedulesScheduleBByRecipientIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleBByRecipientIdPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleBEfile - 
   * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
   * 
  **/
  getSchedulesScheduleBEfile(
    req: operations.GetSchedulesScheduleBEfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBEfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBEfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_b/efile/";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSchedulesScheduleBEfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleBEfilePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleBSubId - 
   * Schedule B filings describe itemized disbursements. This data
   * explains how committees and other filers spend their money. These figures are
   * reported as part of forms F3, F3X and F3P.
   * 
   * The data is divided in two-year periods, called `two_year_transaction_period`, which
   * is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
   * default to the most recent two-year period that is named after the ending,
   * even-numbered year.
   * 
   * Due to the large quantity of Schedule B filings, this endpoint is not paginated by
   * page number. Instead, you can request the next page of results by adding the values in
   * the `last_indexes` object from `pagination` to the URL of your last request. For
   * example, when sorting by `disbursement_date`, you might receive a page of
   * results with the following pagination information:
   * 
   * ```
   * pagination: {
   *     pages: 965191,
   *     per_page: 20,
   *     count: 19303814,
   *     last_indexes: {
   *         last_index: "230906248",
   *         last_disbursement_date: "2014-07-04"
   *     }
   * }
   * ```
   * 
   * To fetch the next page of sorted results, append `last_index=230906248` and
   * `last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
   * these results by using the sort indices (defaults to sort by disbursement date, e.g.
   * `last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
   * This resource uses keyset pagination to improve query performance
   * and these indices are required to properly page through this large dataset.
   * 
   * Note: because the Schedule B data includes many records, counts for
   * large result sets are approximate; you will want to page through the records until no records are returned.
   * 
  **/
  getSchedulesScheduleBSubId(
    req: operations.GetSchedulesScheduleBSubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleBSubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleBSubIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_b/{sub_id}/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetSchedulesScheduleBSubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleBPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
