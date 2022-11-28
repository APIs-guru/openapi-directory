import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Committee {
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
   * getCandidateCandidateIdCommittees - 
   * This endpoint is useful for finding detailed information about a particular committee or
   * filer. Use the `committee_id` to find the most recent information about the committee.
   * 
  **/
  getCandidateCandidateIdCommittees(
    req: operations.GetCandidateCandidateIdCommitteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdCommitteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdCommitteesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/committees/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdCommitteesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidateCandidateIdCommitteesHistory - 
   * Explore a filer's characteristics over time. This can be particularly useful if the
   * committees change treasurers, designation, or `committee_type`.
   * 
  **/
  getCandidateCandidateIdCommitteesHistory(
    req: operations.GetCandidateCandidateIdCommitteesHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdCommitteesHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdCommitteesHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/committees/history/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdCommitteesHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCandidateCandidateIdCommitteesHistoryCycle - 
   * Explore a filer's characteristics over time. This can be particularly useful if the
   * committees change treasurers, designation, or `committee_type`.
   * 
  **/
  getCandidateCandidateIdCommitteesHistoryCycle(
    req: operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdCommitteesHistoryCycleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/committees/history/{cycle}/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdCommitteesHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeId - 
   * This endpoint is useful for finding detailed information about a particular committee or
   * filer. Use the `committee_id` to find the most recent information about the committee.
   * 
  **/
  getCommitteeCommitteeId(
    req: operations.GetCommitteeCommitteeIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeDetailPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeIdHistory - 
   * Explore a filer's characteristics over time. This can be particularly useful if the
   * committees change treasurers, designation, or `committee_type`.
   * 
  **/
  getCommitteeCommitteeIdHistory(
    req: operations.GetCommitteeCommitteeIdHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdHistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/history/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeIdHistoryCycle - 
   * Explore a filer's characteristics over time. This can be particularly useful if the
   * committees change treasurers, designation, or `committee_type`.
   * 
  **/
  getCommitteeCommitteeIdHistoryCycle(
    req: operations.GetCommitteeCommitteeIdHistoryCycleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdHistoryCycleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdHistoryCycleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/history/{cycle}/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdHistoryCycleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeeHistoryPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommittees - 
   * Fetch basic information about committees and filers. Use parameters to filter for
   * particular characteristics.
   * 
   * 
  **/
  getCommittees(
    req: operations.GetCommitteesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/committees/";
    
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
        const res: operations.GetCommitteesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.committeePage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
