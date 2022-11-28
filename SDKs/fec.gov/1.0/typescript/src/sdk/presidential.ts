import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Presidential {
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
   * getPresidentialContributionsByCandidate - 
   * Net receipts per candidate.
   * 
   * Filter with `contributor_state='US'` for national totals
   * 
  **/
  getPresidentialContributionsByCandidate(
    req: operations.GetPresidentialContributionsByCandidateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialContributionsByCandidateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialContributionsByCandidateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/contributions/by_candidate/";
    
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
        const res: operations.GetPresidentialContributionsByCandidateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presidentialByCandidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPresidentialContributionsBySize - 
   * Contribution receipts by size per candidate.
   * 
   * Filter by candidate_id, election_year and/or size
   * 
  **/
  getPresidentialContributionsBySize(
    req: operations.GetPresidentialContributionsBySizeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialContributionsBySizeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialContributionsBySizeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/contributions/by_size/";
    
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
        const res: operations.GetPresidentialContributionsBySizeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presidentialBySizePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPresidentialContributionsByState - 
   * Contribution receipts by state per candidate.
   * 
   * Filter by candidate_id and/or election_year
   * 
  **/
  getPresidentialContributionsByState(
    req: operations.GetPresidentialContributionsByStateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialContributionsByStateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialContributionsByStateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/contributions/by_state/";
    
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
        const res: operations.GetPresidentialContributionsByStateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presidentialByStatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPresidentialCoverageEndDate - 
   * Coverage end date per candidate.
   * 
   * Filter by candidate_id and/or election_year
   * 
  **/
  getPresidentialCoverageEndDate(
    req: operations.GetPresidentialCoverageEndDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialCoverageEndDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialCoverageEndDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/coverage_end_date/";
    
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
        const res: operations.GetPresidentialCoverageEndDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presidentialCoveragePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPresidentialFinancialSummary - 
   * Financial summary per candidate.
   * 
   * Filter by candidate_id and/or election_year
   * 
  **/
  getPresidentialFinancialSummary(
    req: operations.GetPresidentialFinancialSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresidentialFinancialSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresidentialFinancialSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/presidential/financial_summary/";
    
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
        const res: operations.GetPresidentialFinancialSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.presidentialSummaryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
