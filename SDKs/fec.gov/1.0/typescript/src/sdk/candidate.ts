import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Candidate {
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
   * getCandidateCandidateId - 
   * This endpoint is useful for finding detailed information about a particular candidate. Use the
   * `candidate_id` to find the most recent information about that candidate.
   * 
  **/
  getCandidateCandidateId(
    req: operations.GetCandidateCandidateIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidateCandidateIdHistory - 
   * Find out a candidate's characteristics over time. This is particularly useful if the
   * candidate runs for the same office in different districts or you want to know more about a candidate's
   * previous races.
   * 
   * This information is organized by `candidate_id`, so it won't help you find a candidate
   * who ran for different offices over time; candidates get a new ID for each office.
   * 
  **/
  getCandidateCandidateIdHistory(
    req: operations.GetCandidateCandidateIdHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/history/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidateCandidateIdHistoryCycle - 
   * Find out a candidate's characteristics over time. This is particularly useful if the
   * candidate runs for the same office in different districts or you want to know more about a candidate's
   * previous races.
   * 
   * This information is organized by `candidate_id`, so it won't help you find a candidate
   * who ran for different offices over time; candidates get a new ID for each office.
   * 
  **/
  getCandidateCandidateIdHistoryCycle(
    req: operations.GetCandidateCandidateIdHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdHistoryCycleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/history/{cycle}/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidateCandidateIdTotals - 
   * This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
   * which are aggregated by two-year period. We refer to two-year periods as a `cycle`.
   * 
   * The cycle is named after the even-numbered year and includes the year before it. To obtain
   * totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
   * is the next year — for example, in 2015, the current cycle is 2016.
   * 
   * For presidential and Senate candidates, multiple two-year cycles exist between elections.
   * 
   * 
  **/
  getCandidateCandidateIdTotals(
    req: operations.GetCandidateCandidateIdTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdTotalsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/totals/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeTotalsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidates - 
   * Fetch basic information about candidates, and use parameters to filter results to the
   * candidates you're looking for.
   * 
   * Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
   * particular office sought. If a candidate runs for the same office multiple times, the ID
   * stays the same. If the same person runs for another office — for example, a House
   * candidate runs for a Senate office — that candidate will get a unique ID for each office.
   * 
  **/
  getCandidates(
    req: operations.GetCandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/";
    
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
        const res: operations.GetCandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidatesSearch - 
   * Fetch basic information about candidates and their principal committees.
   * 
   * Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
   * particular office sought. If a candidate runs for the same office over time, that ID
   * stays the same. If the same person runs for multiple offices — for example, a House
   * candidate runs for a Senate office — that candidate will get a unique ID for each office.
   * 
   * The candidate endpoints primarily use data from FEC registration
   * [Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf) for committee information and
   * [Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf) for candidate information.
   * 
  **/
  getCandidatesSearch(
    req: operations.GetCandidatesSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/search/";
    
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
        const res: operations.GetCandidatesSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidatePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidatesTotals - 
   * Aggregated candidate receipts and disbursements grouped by cycle.
   * 
  **/
  getCandidatesTotals(
    req: operations.GetCandidatesTotalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesTotalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesTotalsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/totals/";
    
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
        const res: operations.GetCandidatesTotalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryTotalPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidatesTotalsByOffice -  Aggregated candidate receipts and disbursements grouped by office by cycle.
   * 
  **/
  getCandidatesTotalsByOffice(
    req: operations.GetCandidatesTotalsByOfficeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesTotalsByOfficeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesTotalsByOfficeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/totals/by_office/";
    
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
        const res: operations.GetCandidatesTotalsByOfficeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.totalByOfficePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidatesTotalsByOfficeByParty -  Aggregated candidate receipts and disbursements grouped by office by party by cycle.
   * 
  **/
  getCandidatesTotalsByOfficeByParty(
    req: operations.GetCandidatesTotalsByOfficeByPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidatesTotalsByOfficeByPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidatesTotalsByOfficeByPartyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/candidates/totals/by_office/by_party/";
    
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
        const res: operations.GetCandidatesTotalsByOfficeByPartyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.totalByOfficeByPartyPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeIdCandidates - 
   * This endpoint is useful for finding detailed information about a particular candidate. Use the
   * `candidate_id` to find the most recent information about that candidate.
   * 
  **/
  getCommitteeCommitteeIdCandidates(
    req: operations.GetCommitteeCommitteeIdCandidatesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdCandidatesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdCandidatesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdCandidatesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeIdCandidatesHistory - 
   * Find out a candidate's characteristics over time. This is particularly useful if the
   * candidate runs for the same office in different districts or you want to know more about a candidate's
   * previous races.
   * 
   * This information is organized by `candidate_id`, so it won't help you find a candidate
   * who ran for different offices over time; candidates get a new ID for each office.
   * 
  **/
  getCommitteeCommitteeIdCandidatesHistory(
    req: operations.GetCommitteeCommitteeIdCandidatesHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdCandidatesHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdCandidatesHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/history/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdCandidatesHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeIdCandidatesHistoryCycle - 
   * Find out a candidate's characteristics over time. This is particularly useful if the
   * candidate runs for the same office in different districts or you want to know more about a candidate's
   * previous races.
   * 
   * This information is organized by `candidate_id`, so it won't help you find a candidate
   * who ran for different offices over time; candidates get a new ID for each office.
   * 
  **/
  getCommitteeCommitteeIdCandidatesHistoryCycle(
    req: operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdCandidatesHistoryCycleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/candidates/history/{cycle}/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdCandidatesHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.candidateHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
