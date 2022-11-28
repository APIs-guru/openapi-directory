import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Filings {
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
   * getCandidateCandidateIdFilings - 
   * All official records and reports filed by or delivered to the FEC.
   * 
   * Note: because the filings data includes many records, counts for large
   * result sets are approximate; you will want to page through the records until no records are returned.
   * 
  **/
  getCandidateCandidateIdFilings(
    req: operations.GetCandidateCandidateIdFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCandidateCandidateIdFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCandidateCandidateIdFilingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/candidate/{candidate_id}/filings/", req.pathParams);
    
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
        const res: operations.GetCandidateCandidateIdFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCommitteeCommitteeIdFilings - 
   * All official records and reports filed by or delivered to the FEC.
   * 
   * Note: because the filings data includes many records, counts for large
   * result sets are approximate; you will want to page through the records until no records are returned.
   * 
  **/
  getCommitteeCommitteeIdFilings(
    req: operations.GetCommitteeCommitteeIdFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCommitteeCommitteeIdFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCommitteeCommitteeIdFilingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/committee/{committee_id}/filings/", req.pathParams);
    
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
        const res: operations.GetCommitteeCommitteeIdFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFilings - 
   * All official records and reports filed by or delivered to the FEC.
   * 
   * Note: because the filings data includes many records, counts for large
   * result sets are approximate; you will want to page through the records until no records are returned.
   * 
  **/
  getFilings(
    req: operations.GetFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFilingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/filings/";
    
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
        const res: operations.GetFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.filingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOperationsLog - 
   * The Operations log contains details of each report loaded into the database. It is primarily
   * used as status check to determine when all of the data processes, from initial entry through
   * review are complete.
   * 
  **/
  getOperationsLog(
    req: operations.GetOperationsLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOperationsLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOperationsLogRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/operations-log/";
    
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
        const res: operations.GetOperationsLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.operationsLogPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
