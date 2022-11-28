import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Bidders {
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
   * adexchangebuyer2BiddersFilterSetsBidMetricsList - Lists all metrics that are measured in terms of number of bids.
  **/
  adexchangebuyer2BiddersFilterSetsBidMetricsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/bidMetrics", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listBidMetricsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsBidResponseErrorsList - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
  **/
  adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/bidResponseErrors", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listBidResponseErrorsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
  **/
  adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/bidResponsesWithoutBids", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listBidResponsesWithoutBidsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsCreate - Creates the specified filter set for the account with the given account ID.
  **/
  adexchangebuyer2BiddersFilterSetsCreate(
    req: operations.Adexchangebuyer2BiddersFilterSetsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{ownerName}/filterSets", req.pathParams);

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
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.Adexchangebuyer2BiddersFilterSetsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filterSet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsDelete - Deletes the requested filter set from the account with the given account ID.
  **/
  adexchangebuyer2BiddersFilterSetsDelete(
    req: operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{name}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
  **/
  adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/filteredBidRequests", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFilteredBidRequestsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
  **/
  adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(
    req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCreativeStatusBreakdownByCreativeResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
  **/
  adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listCreativeStatusBreakdownByDetailResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsFilteredBidsList - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
  **/
  adexchangebuyer2BiddersFilterSetsFilteredBidsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/filteredBids", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFilteredBidsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsGet - Retrieves the requested filter set for the account with the given account ID.
  **/
  adexchangebuyer2BiddersFilterSetsGet(
    req: operations.Adexchangebuyer2BiddersFilterSetsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{name}", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filterSet = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsImpressionMetricsList - Lists all metrics that are measured in terms of number of impressions.
  **/
  adexchangebuyer2BiddersFilterSetsImpressionMetricsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/impressionMetrics", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listImpressionMetricsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsList - Lists all filter sets for the account with the given account ID.
  **/
  adexchangebuyer2BiddersFilterSetsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{ownerName}/filterSets", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFilterSetsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsLosingBidsList - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
  **/
  adexchangebuyer2BiddersFilterSetsLosingBidsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/losingBids", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listLosingBidsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
  **/
  adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(
    req: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v2beta1/{filterSetName}/nonBillableWinningBids", req.pathParams);
    
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
        const res: operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listNonBillableWinningBidsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
