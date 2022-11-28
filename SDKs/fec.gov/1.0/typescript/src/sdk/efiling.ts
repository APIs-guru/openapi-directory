import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Efiling {
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
   * getEfileFilings - Basic information about electronic files coming into the FEC, posted as they are received.
  **/
  getEfileFilings(
    req: operations.GetEfileFilingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileFilingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileFilingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/filings/";
    
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
        const res: operations.GetEfileFilingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eFilingsPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEfileReportsHouseSenate - 
   * Key financial data reported periodically by committees as they are reported. This feed includes summary
   * information from the the House F3 reports, the presidential F3p reports and the PAC and party
   * F3x reports.
   * 
   * Generally, committees file reports on a quarterly or monthly basis, but
   * some must also submit a report 12 days before primary elections. Therefore, during the primary
   * season, the period covered by this file may be different for different committees. These totals
   * also incorporate any changes made by committees, if any report covering the period is amended.
   * 
   * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
   * label these fields while conveying clear meaning to ensure accessibility for all users.
   * 
  **/
  getEfileReportsHouseSenate(
    req: operations.GetEfileReportsHouseSenateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileReportsHouseSenateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileReportsHouseSenateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/reports/house-senate/";
    
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
        const res: operations.GetEfileReportsHouseSenateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseF3FilingPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEfileReportsPacParty - 
   * Key financial data reported periodically by committees as they are reported. This feed includes summary
   * information from the the House F3 reports, the presidential F3p reports and the PAC and party
   * F3x reports.
   * 
   * Generally, committees file reports on a quarterly or monthly basis, but
   * some must also submit a report 12 days before primary elections. Therefore, during the primary
   * season, the period covered by this file may be different for different committees. These totals
   * also incorporate any changes made by committees, if any report covering the period is amended.
   * 
   * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
   * label these fields while conveying clear meaning to ensure accessibility for all users.
   * 
  **/
  getEfileReportsPacParty(
    req: operations.GetEfileReportsPacPartyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileReportsPacPartyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileReportsPacPartyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/reports/pac-party/";
    
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
        const res: operations.GetEfileReportsPacPartyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseF3XFilingPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getEfileReportsPresidential - 
   * Key financial data reported periodically by committees as they are reported. This feed includes summary
   * information from the the House F3 reports, the presidential F3p reports and the PAC and party
   * F3x reports.
   * 
   * Generally, committees file reports on a quarterly or monthly basis, but
   * some must also submit a report 12 days before primary elections. Therefore, during the primary
   * season, the period covered by this file may be different for different committees. These totals
   * also incorporate any changes made by committees, if any report covering the period is amended.
   * 
   * DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
   * label these fields while conveying clear meaning to ensure accessibility for all users.
   * 
  **/
  getEfileReportsPresidential(
    req: operations.GetEfileReportsPresidentialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEfileReportsPresidentialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEfileReportsPresidentialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/efile/reports/presidential/";
    
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
        const res: operations.GetEfileReportsPresidentialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.baseF3PFilingPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
