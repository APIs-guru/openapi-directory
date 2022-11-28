import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SslCertificateRequests {
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
   * addSslCertificateRequest - Add a SSL certificate request
   *
   * Executing this method causes the purchase of a paying product.<br />
   * Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
   * Please note that promotional pricing does not apply for purchases made through our API.
  **/
  addSslCertificateRequest(
    req: operations.AddSslCertificateRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddSslCertificateRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddSslCertificateRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sslcertificaterequests";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AddSslCertificateRequestResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSslCertificateRequest - Detail of a SSL certificate request
  **/
  getSslCertificateRequest(
    req: operations.GetSslCertificateRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSslCertificateRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSslCertificateRequestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sslcertificaterequests/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSslCertificateRequestResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sslCertificateRequestDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 303:
            break;
          case httpRes?.status == 410:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSslCertificateRequests - Overview of SSL certificate requests
  **/
  getSslCertificateRequests(
    req: operations.GetSslCertificateRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSslCertificateRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSslCertificateRequestsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sslcertificaterequests";
    
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
        const res: operations.GetSslCertificateRequestsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sslCertificateRequests = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * verifySslCertificateRequestDomainValidations - Verify the SSL certificate request domain validations
  **/
  verifySslCertificateRequestDomainValidations(
    req: operations.VerifySslCertificateRequestDomainValidationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VerifySslCertificateRequestDomainValidationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VerifySslCertificateRequestDomainValidationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sslcertificaterequests/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.VerifySslCertificateRequestDomainValidationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 303:
            break;
          case httpRes?.status == 410:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
