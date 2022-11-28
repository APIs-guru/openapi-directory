import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Tse {
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
   * quittungTse - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
   *
   * Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.
   * 
  **/
  quittungTse(
    req: operations.QuittungTseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QuittungTseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QuittungTseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/quittung/tse";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.QuittungTseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.quittungTse200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * quittungTseData - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
   *
   * Allows to retrieve input string for a signing process.
   * 
  **/
  quittungTseData(
    req: operations.QuittungTseDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QuittungTseDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QuittungTseDataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/quittung/tsedata";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.QuittungTseDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * quittungTsEsignature - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
   *
   * Allows to retrieve digital signature for a given receipt.
   * 
  **/
  quittungTsEsignature(
    req: operations.QuittungTsEsignatureRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QuittungTsEsignatureResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QuittungTsEsignatureRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/quittung/tsesignature";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.QuittungTsEsignatureResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * quittungZugferd - Retrieve Zugferd XML for a given receipt (Strom-Quittung).
   *
   * Allows to retrieve XML of the zugferd invoice.
   * 
  **/
  quittungZugferd(
    req: operations.QuittungZugferdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QuittungZugferdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QuittungZugferdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/quittung/zugferd";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.QuittungZugferdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
