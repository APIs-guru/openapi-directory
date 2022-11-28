import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Debts {
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
   * getSchedulesScheduleD - 
   * Schedule D, it shows debts and obligations owed to or by the committee that are
   * required to be disclosed.
   * 
   * 
   * 
  **/
  getSchedulesScheduleD(
    req: operations.GetSchedulesScheduleDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleDRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/schedules/schedule_d/";
    
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
        const res: operations.GetSchedulesScheduleDResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleDDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSchedulesScheduleDSubId - 
   * Schedule D, it shows debts and obligations owed to or by the committee that are
   * required to be disclosed.
   * 
   * 
   * 
  **/
  getSchedulesScheduleDSubId(
    req: operations.GetSchedulesScheduleDSubIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchedulesScheduleDSubIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchedulesScheduleDSubIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/schedules/schedule_d/{sub_id}/", req.pathParams);
    
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
        const res: operations.GetSchedulesScheduleDSubIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getSchedulesScheduleDSubIdDefaultApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
