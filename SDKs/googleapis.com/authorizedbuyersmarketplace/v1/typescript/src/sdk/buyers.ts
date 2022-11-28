import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Buyers {
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
   * authorizedbuyersmarketplaceBuyersAuctionPackagesList - List the auction packages subscribed by a buyer and its clients.
  **/
  authorizedbuyersmarketplaceBuyersAuctionPackagesList(
    req: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/auctionPackages", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAuctionPackagesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe - Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
  **/
  authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribe(
    req: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:subscribe", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auctionPackage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients - Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
  **/
  authorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClients(
    req: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{auctionPackage}:subscribeClients", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesSubscribeClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auctionPackage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe - Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
  **/
  authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribe(
    req: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:unsubscribe", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auctionPackage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients - Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
  **/
  authorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClients(
    req: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{auctionPackage}:unsubscribeClients", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersAuctionPackagesUnsubscribeClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.auctionPackage = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsCreate - Creates a new client.
  **/
  authorizedbuyersmarketplaceBuyersClientsCreate(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/clients", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.client = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsList - Lists all the clients for the current buyer.
  **/
  authorizedbuyersmarketplaceBuyersClientsList(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/clients", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listClientsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsUsersActivate - Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
  **/
  authorizedbuyersmarketplaceBuyersClientsUsersActivate(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:activate", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersActivateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsUsersCreate - Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
  **/
  authorizedbuyersmarketplaceBuyersClientsUsersCreate(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/users", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsUsersDeactivate - Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
  **/
  authorizedbuyersmarketplaceBuyersClientsUsersDeactivate(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:deactivate", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.clientUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsUsersDelete - Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
  **/
  authorizedbuyersmarketplaceBuyersClientsUsersDelete(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersClientsUsersList - Lists all client users for a specified client.
  **/
  authorizedbuyersmarketplaceBuyersClientsUsersList(
    req: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/users", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersClientsUsersListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listClientUsersResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative - Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
  **/
  authorizedbuyersmarketplaceBuyersFinalizedDealsAddCreative(
    req: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{deal}:addCreative", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.finalizedDeal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersFinalizedDealsList - Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
  **/
  authorizedbuyersmarketplaceBuyersFinalizedDealsList(
    req: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/finalizedDeals", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFinalizedDealsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersFinalizedDealsPause - Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
  **/
  authorizedbuyersmarketplaceBuyersFinalizedDealsPause(
    req: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:pause", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsPauseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.finalizedDeal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersFinalizedDealsResume - Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
  **/
  authorizedbuyersmarketplaceBuyersFinalizedDealsResume(
    req: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:resume", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsResumeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.finalizedDeal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe - Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
  **/
  authorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServe(
    req: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{deal}:setReadyToServe", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.finalizedDeal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersProposalsAccept - Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
  **/
  authorizedbuyersmarketplaceBuyersProposalsAccept(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}:accept", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsAcceptResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * authorizedbuyersmarketplaceBuyersProposalsAddNote - Creates a note for this proposal and sends to the seller.
  **/
  authorizedbuyersmarketplaceBuyersProposalsAddNote(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{proposal}:addNote", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation - Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
  **/
  authorizedbuyersmarketplaceBuyersProposalsCancelNegotiation(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{proposal}:cancelNegotiation", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate - Batch updates multiple deals in the same proposal.
  **/
  authorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdate(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/deals:batchUpdate", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchUpdateDealsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersProposalsDealsList - Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
  **/
  authorizedbuyersmarketplaceBuyersProposalsDealsList(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/deals", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listDealsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersProposalsDealsPatch - Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
  **/
  authorizedbuyersmarketplaceBuyersProposalsDealsPatch(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deal = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersProposalsList - Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.
  **/
  authorizedbuyersmarketplaceBuyersProposalsList(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/proposals", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listProposalsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersProposalsSendRfp - Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
  **/
  authorizedbuyersmarketplaceBuyersProposalsSendRfp(
    req: operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{buyer}/proposals:sendRfp", req.pathParams);

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
        const res: operations.AuthorizedbuyersmarketplaceBuyersProposalsSendRfpResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * authorizedbuyersmarketplaceBuyersPublisherProfilesGet - Gets the requested publisher profile by name.
  **/
  authorizedbuyersmarketplaceBuyersPublisherProfilesGet(
    req: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{name}", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.publisherProfile = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * authorizedbuyersmarketplaceBuyersPublisherProfilesList - Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.
  **/
  authorizedbuyersmarketplaceBuyersPublisherProfilesList(
    req: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v1/{parent}/publisherProfiles", req.pathParams);
    
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
        const res: operations.AuthorizedbuyersmarketplaceBuyersPublisherProfilesListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPublisherProfilesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
