import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Proposals {
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
   * adexchangebuyerProposalsGet - Get a proposal given its id
  **/
  adexchangebuyerProposalsGet(
    req: operations.AdexchangebuyerProposalsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AdexchangebuyerProposalsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdexchangebuyerProposalsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/proposals/{proposalId}", req.pathParams);
    
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
        const res: operations.AdexchangebuyerProposalsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.proposal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyerProposalsInsert - Create the given list of proposals
  **/
  adexchangebuyerProposalsInsert(
    req: operations.AdexchangebuyerProposalsInsertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AdexchangebuyerProposalsInsertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdexchangebuyerProposalsInsertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/proposals/insert";

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
        const res: operations.AdexchangebuyerProposalsInsertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createOrdersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyerProposalsPatch - Update the given proposal. This method supports patch semantics.
  **/
  adexchangebuyerProposalsPatch(
    req: operations.AdexchangebuyerProposalsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AdexchangebuyerProposalsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdexchangebuyerProposalsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/proposals/{proposalId}/{revisionNumber}/{updateAction}", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AdexchangebuyerProposalsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.proposal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyerProposalsSearch - Search for proposals using pql query
  **/
  adexchangebuyerProposalsSearch(
    req: operations.AdexchangebuyerProposalsSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AdexchangebuyerProposalsSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdexchangebuyerProposalsSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/proposals/search";
    
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
        const res: operations.AdexchangebuyerProposalsSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getOrdersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyerProposalsSetupcomplete - Update the given proposal to indicate that setup has been completed.
  **/
  adexchangebuyerProposalsSetupcomplete(
    req: operations.AdexchangebuyerProposalsSetupcompleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AdexchangebuyerProposalsSetupcompleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdexchangebuyerProposalsSetupcompleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/proposals/{proposalId}/setupcomplete", req.pathParams);
    
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
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AdexchangebuyerProposalsSetupcompleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * adexchangebuyerProposalsUpdate - Update the given proposal
  **/
  adexchangebuyerProposalsUpdate(
    req: operations.AdexchangebuyerProposalsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AdexchangebuyerProposalsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AdexchangebuyerProposalsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/proposals/{proposalId}/{revisionNumber}/{updateAction}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AdexchangebuyerProposalsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.proposal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
