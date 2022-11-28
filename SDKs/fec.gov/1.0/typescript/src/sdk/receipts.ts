import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Receipts {
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
   * getSchedulesScheduleA - 
   * This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.
   * 
   * This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).
   * 
   * ​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
   * For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:
   * 
   * case #1:
   * ```
   * pagination: {
   *     pages: 2152643,
   *     per_page: 20,
   *     count: 43052850,
   *     last_indexes: {
   *         last_index: "230880619",
   *         last_contribution_receipt_date: "2014-01-01"
   *     }
   * }
   * ```
   * <br/>
   * case #2 (results which include contribution_receipt_date = NULL):
   * 
   * ```
   * pagination: {
   *     pages: 2152644,
   *     per_page: 20,
   *     count: 43052850,
   *     last_indexes: {
   *         last_index: "230880639",
   *         sort_null_only: True
   *     }
   * }
   * ```
   * To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.
   * 
   * Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.
   * 
   * To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.
   * 
   * ​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.
   * 
   * 
  **/
  getSchedulesScheduleA(
    req: operations.GetSchedulesScheduleARequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleARequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/";
    
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
        const res: operations.GetSchedulesScheduleAResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByEmployer - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleAByEmployer(
    req: operations.GetSchedulesScheduleAByEmployerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByEmployerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByEmployerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_employer/";
    
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
        const res: operations.GetSchedulesScheduleAByEmployerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByEmployerPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByOccupation - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleAByOccupation(
    req: operations.GetSchedulesScheduleAByOccupationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByOccupationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByOccupationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_occupation/";
    
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
        const res: operations.GetSchedulesScheduleAByOccupationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByOccupationPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleABySize - 
   * This endpoint provides individual contributions received by a committee, aggregated by size:
   * 
   * ```
   *  - $200 and under
   *  - $200.01 - $499.99
   *  - $500 - $999.99
   *  - $1000 - $1999.99
   *  - $2000 +
   * ```
   * 
   * The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.
   * 
  **/
  getSchedulesScheduleABySize(
    req: operations.GetSchedulesScheduleABySizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleABySizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleABySizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_size/";
    
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
        const res: operations.GetSchedulesScheduleABySizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleABySizePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleABySizeByCandidate - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleABySizeByCandidate(
    req: operations.GetSchedulesScheduleABySizeByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleABySizeByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleABySizeByCandidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_size/by_candidate/";
    
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
        const res: operations.GetSchedulesScheduleABySizeByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleABySizeCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByState - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleAByState(
    req: operations.GetSchedulesScheduleAByStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/";
    
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
        const res: operations.GetSchedulesScheduleAByStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByStateByCandidate - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleAByStateByCandidate(
    req: operations.GetSchedulesScheduleAByStateByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateByCandidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/by_candidate/";
    
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
        const res: operations.GetSchedulesScheduleAByStateByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStateCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByStateByCandidateTotals - 
   * Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
   * 
  **/
  getSchedulesScheduleAByStateByCandidateTotals(
    req: operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateByCandidateTotalsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/by_candidate/totals/";
    
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
        const res: operations.GetSchedulesScheduleAByStateByCandidateTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStateCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByStateTotals - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleAByStateTotals(
    req: operations.GetSchedulesScheduleAByStateTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByStateTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByStateTotalsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_state/totals/";
    
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
        const res: operations.GetSchedulesScheduleAByStateTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByStateRecipientTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAByZip - 
   * This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.
   * 
  **/
  getSchedulesScheduleAByZip(
    req: operations.GetSchedulesScheduleAByZipRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAByZipResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAByZipRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/by_zip/";
    
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
        const res: operations.GetSchedulesScheduleAByZipResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAByZipPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleAEfile - 
   * Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.
   * 
  **/
  getSchedulesScheduleAEfile(
    req: operations.GetSchedulesScheduleAEfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleAEfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleAEfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_a/efile/";
    
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
        const res: operations.GetSchedulesScheduleAEfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAEfilePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleASubId - 
   * This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.
   * 
   * This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).
   * 
   * ​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
   * For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:
   * 
   * case #1:
   * ```
   * pagination: {
   *     pages: 2152643,
   *     per_page: 20,
   *     count: 43052850,
   *     last_indexes: {
   *         last_index: "230880619",
   *         last_contribution_receipt_date: "2014-01-01"
   *     }
   * }
   * ```
   * <br/>
   * case #2 (results which include contribution_receipt_date = NULL):
   * 
   * ```
   * pagination: {
   *     pages: 2152644,
   *     per_page: 20,
   *     count: 43052850,
   *     last_indexes: {
   *         last_index: "230880639",
   *         sort_null_only: True
   *     }
   * }
   * ```
   * To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.
   * 
   * Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.
   * 
   * To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.
   * 
   * ​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.
   * 
   * 
  **/
  getSchedulesScheduleASubId(
    req: operations.GetSchedulesScheduleASubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleASubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleASubIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_a/{sub_id}/", req.pathParams);
    
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
        const res: operations.GetSchedulesScheduleASubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scheduleAPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
