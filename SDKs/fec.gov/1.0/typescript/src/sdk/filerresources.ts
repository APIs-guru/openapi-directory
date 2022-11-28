import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FilerResources {
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
   * getRadAnalyst - 
   * Use this endpoint to look up the RAD Analyst for a committee.
   * 
   * The mission of the Reports Analysis Division (RAD) is to ensure that
   * campaigns and political committees file timely and accurate reports that fully disclose
   * their financial activities.  RAD is responsible for reviewing statements and financial
   * reports filed by political committees participating in federal elections, providing
   * assistance and guidance to the committees to properly file their reports, and for taking
   * appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).
   * 
  **/
  getRadAnalyst(
    req: operations.GetRadAnalystRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRadAnalystResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRadAnalystRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rad-analyst/";
    
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
        const res: operations.GetRadAnalystResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.radAnalystPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getStateElectionOffice - 
   * State laws and procedures govern elections for state or local offices as well as
   * how candidates appear on election ballots.
   * Contact the appropriate state election office for more information.
   * 
  **/
  getStateElectionOffice(
    req: operations.GetStateElectionOfficeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetStateElectionOfficeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetStateElectionOfficeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/state-election-office/";
    
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
        const res: operations.GetStateElectionOfficeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.stateElectionOfficeInfoPage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
