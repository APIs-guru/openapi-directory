import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class User {
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
   * changeUserPassword - Change user's password
   *
   * ### Description:
   * Change the user's password.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * User's password is changed.
   * 
   * ### Further Information:
   * The password **MUST** comply to configured password policies.  
   * 
   * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
  **/
  changeUserPassword(
    req: operations.ChangeUserPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChangeUserPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChangeUserPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/password";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ChangeUserPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.changeUserPassword400ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createAndPreserveUserKeyPair - Create key pair and preserve copy of old private key
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Create user key pair and preserve copy of old private key.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Key pair is created.  
   * Copy of old private key is preserved.
   * 
   * ### Further Information:
   * You can submit your old private key, encrypted with your current password.  
   * This allows migrating file keys encrypted with your old key pair to the new one.
  **/
  createAndPreserveUserKeyPair(
    req: operations.CreateAndPreserveUserKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAndPreserveUserKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAndPreserveUserKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/keypairs";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.CreateAndPreserveUserKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enableCustomerEncryption - Activate client-side encryption for customer
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
   * 
   * ### Use `POST /settings/keypair` API
   * 
   * ### Description:  
   * Activate client-side encryption for according customer.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
   * 
   * ### Postcondition:
   * Client-side encryption is enabled.
   * 
   * ### Further Information:
   * Sets the ability for this customer to encrypt rooms.  
   * Once enabled on customer level, it **CANNOT** be unset.  
   * On activation, a customer rescue key pair **MUST** be set.
  **/
  enableCustomerEncryption(
    req: operations.EnableCustomerEncryptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableCustomerEncryptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableCustomerEncryptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/customer";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnableCustomerEncryptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customerData = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listDownloadShareSubscriptions - List Download Share subscriptions
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of subscribed Download Shares for current user. 
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of subscribed Download Shares is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Filtering
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `authParentId:eq:#`  
   * Get download shares where `authParentId` equals `#`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | **`downloadShareId`** | Download Share ID filter | `eq` | Download Share ID equals value. | `long value` |
   * | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `downloadShareId:desc|authParentId:asc`  
   * Sort by `downloadShareId` descending **AND** `authParentId` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | **`downloadShareId`** | Download Share ID |
   * | **`authParentId`** | Auth parent ID |
   * 
   * </details>
  **/
  listDownloadShareSubscriptions(
    req: operations.ListDownloadShareSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDownloadShareSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDownloadShareSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/subscriptions/download_shares";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListDownloadShareSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subscribedDownloadShareList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listNodeSubscriptions - List node subscriptions
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of subscribed nodes for current user. 
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of subscribed nodes is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `authParentId:eq:#`  
   * Get nodes where `authParentId` equals `#`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | **`nodeId`** | Node ID filter | `eq` | Node ID equals value. | `long value` |
   * | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `nodeId:desc|authParentId:asc`  
   * Sort by `nodeId` descending **AND** `authParentId` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | **`nodeId`** | Node ID |
   * | **`authParentId`** | Auth parent ID |
   * 
   * </details>
  **/
  listNodeSubscriptions(
    req: operations.ListNodeSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListNodeSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListNodeSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/subscriptions/nodes";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListNodeSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subscribedNodeList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listUploadShareSubscriptions - List Upload Share subscriptions
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of subscribed Upload Shares for current user. 
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of subscribed Upload Shares is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Filtering
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `targetNodeId:eq:#`  
   * Get upload shares where `targetNodeId` equals `#`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | **`uploadShareId`** | Upload Share ID filter | `eq` | Upload Share ID equals value. | `long value` |
   * | **`targetNodeId`** | Target node ID filter | `eq` | Target node ID equals value. | `long value` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `uploadShareId:desc|targetNodeId:asc`  
   * Sort by `uploadShareId` descending **AND** `targetNodeId` ascending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | **`uploadShareId`** | Upload Share ID |
   * | **`targetNodeId`** | Target node ID |
   * 
   * </details>
  **/
  listUploadShareSubscriptions(
    req: operations.ListUploadShareSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListUploadShareSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListUploadShareSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/subscriptions/upload_shares";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListUploadShareSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subscribedUploadShareList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * logout - Invalidate authentication token
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
   * 
   * ### Description:  
   * Log out a user.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * * User is logged out  
   * * Authentication token gets invalidated.
   * 
   * ### Further Information:
   * None.
  **/
  logout(
    req: operations.LogoutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LogoutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LogoutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/logout";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LogoutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pingUser - (authenticated) Ping
   *
   * ### Description:
   * Test connection to DRACOON Server (while authenticated).
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * `200 OK` with principal information is returned if successful.
   * 
   * ### Further Information:
   * None.
  **/
  pingUser(
    req: operations.PingUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PingUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PingUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/ping";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PingUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.pingUser200TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeOAuthApproval - Remove OAuth client approval
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
   * 
   * ### Functional Description:
   * Delete an OAuth client approval.
   * 
   * ### Precondition:
   * Authenticated user and valid client ID
   * 
   * ### Postcondition:
   * OAuth Client approval is revoked.
   * 
   * ### Further Information:
   * None.
  **/
  removeOAuthApproval(
    req: operations.RemoveOAuthApprovalRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveOAuthApprovalResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveOAuthApprovalRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/oauth/approvals/{client_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveOAuthApprovalResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeOAuthAuthorization - Remove a OAuth authorization
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
   * 
   * ### Description:
   * Delete an authorization.
   * 
   * ### Precondition:
   * Authenticated user and valid client ID, authorization ID
   * 
   * ### Postcondition:
   * Authorization is revoked.
   * 
   * ### Further Information:
   * None.
  **/
  removeOAuthAuthorization(
    req: operations.RemoveOAuthAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveOAuthAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveOAuthAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/oauth/authorizations/{client_id}/{authorization_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveOAuthAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeOAuthAuthorizations - Remove all OAuth authorizations of a client
   *
   * ### Description:
   * Delete all authorizations of a client.
   * 
   * ### Precondition:
   * Authenticated user and valid client ID
   * 
   * ### Postcondition:
   * All authorizations for the client are revoked.
   * 
   * ### Further Information:
   * None.
  **/
  removeOAuthAuthorizations(
    req: operations.RemoveOAuthAuthorizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveOAuthAuthorizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveOAuthAuthorizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/oauth/authorizations/{client_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveOAuthAuthorizationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeProfileAttribute - Remove user profile attribute
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
   * 
   * ### Description:  
   * Delete custom user profile attribute.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Custom user profile attribute is deleted.
   * 
   * ### Further Information:
   * Allowed characters for keys are: `[a-zA-Z0-9_-]`
  **/
  removeProfileAttribute(
    req: operations.RemoveProfileAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveProfileAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveProfileAttributeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/profileAttributes/{key}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveProfileAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * removeUserKeyPair - Remove user's key pair
   *
   * ### Description:  
   * Delete user key pair.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Key pair is deleted.
   * 
   * ### Further Information:
   * If parameter `version` is not set and two key versions exist, this API deletes version A.      
   * If two keys with the same version are set, this API deletes the older one.
   * 
   * This will also remove all file keys that were encrypted with the user public key.
   * If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.
  **/
  removeUserKeyPair(
    req: operations.RemoveUserKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveUserKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveUserKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/keypair";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveUserKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestAvatar - Request avatar
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
   * 
   * ### Description:
   * Get the avatar.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Avatar is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestAvatar(
    req: operations.RequestAvatarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestAvatarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestAvatarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/avatar";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestAvatarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.avatar = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestCustomerInfo - Request customer information for user
   *
   * ### Description:  
   * Use this API to get: 
   * * customer name
   * * used / free space
   * * used / available
   * * user account info
   * 
   * of the according customer.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Customer information is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestCustomerInfo(
    req: operations.RequestCustomerInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestCustomerInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestCustomerInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/customer";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestCustomerInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customerData = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestCustomerKeyPair - Request customer's key pair
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
   * 
   * ### Use `GET /settings/keypair` API
   * 
   * ### Description:  
   * Retrieve the customer rescue key pair.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Key pair is returned.
   * 
   * ### Further Information:
   * The private key is password-based encrypted with `AES256` / `PBKDF2`.
  **/
  requestCustomerKeyPair(
    req: operations.RequestCustomerKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestCustomerKeyPairResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestCustomerKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/customer/keypair";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestCustomerKeyPairResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userKeyPairContainer = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestListOfNotificationConfigs - Request list of notification configurations
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of notification configurations for current user. 
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of available notification configurations is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestListOfNotificationConfigs(
    req: operations.RequestListOfNotificationConfigsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestListOfNotificationConfigsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestListOfNotificationConfigsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/notifications/config";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestListOfNotificationConfigsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notificationConfigList = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestOAuthApprovals - Request list of OAuth client approvals
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
   * 
   * ### Functional Description:  
   * Retrieve information about all OAuth client approvals.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * None.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `clientName:desc`  
   * Sort by `clientName` descending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `clientName` | Client name |
   * 
   * </details>
  **/
  requestOAuthApprovals(
    req: operations.RequestOAuthApprovalsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestOAuthApprovalsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestOAuthApprovalsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/oauth/approvals";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestOAuthApprovalsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oAuthApprovals = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestOAuthAuthorizations - Request list of OAuth client authorizations
   *
   * ### Description:  
   * Retrieve information about all OAuth client authorizations.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of OAuth client authorizations is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `isStandard:eq:true`  
   * Get standard OAuth clients.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `isStandard` | Standard client filter | `eq` |  | `true or false` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort criteria are possible.  
   * Fields are connected via logical conjunction **AND**.
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `clientName:desc`  
   * Sort by `clientName` descending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `clientName` | Client name |
   * 
   * </details>
  **/
  requestOAuthAuthorizations(
    req: operations.RequestOAuthAuthorizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestOAuthAuthorizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestOAuthAuthorizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/oauth/authorizations";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestOAuthAuthorizationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.oAuthAuthorizations = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestProfileAttributes - Request user profile attributes
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of user profile attributes.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * List of attributes is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `key:cn:searchString_1|value:cn:searchString_2`  
   * Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `key` | User profile attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
   * | `value` | User profile attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
   * 
   * </details>
   * 
   * ---
   * 
   * ### Sorting:
   * Sort string syntax: `FIELD_NAME:ORDER`  
   * `ORDER` can be `asc` or `desc`.  
   * Multiple sort fields are supported.  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `key:asc|value:desc`  
   * Sort by `key` ascending **AND** by `value` descending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `key` | User profile attribute key |
   * | `value` | User profile attribute value |
   * 
   * </details>
  **/
  requestProfileAttributes(
    req: operations.RequestProfileAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestProfileAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestProfileAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/profileAttributes";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestProfileAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.attributesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestUserInfo - Request user account information
   *
   * ### Description:  
   * Retrieves all information regarding the current user's account.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * User information is returned.
   * 
   * ### Further Information:
   * Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.  
   * 
   * `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
  **/
  requestUserInfo(
    req: operations.RequestUserInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserInfoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestUserInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userAccount = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestUserKeyPair - Request user's key pair
   *
   * ### Description:  
   * Retrieve the user key pair.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Key pair is returned. 
   * 
   * ### Further Information:
   * The private key is password-based encrypted with `AES256` / `PBKDF2`.
  **/
  requestUserKeyPair(
    req: operations.RequestUserKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserKeyPairResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/keypair";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestUserKeyPairResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userKeyPairContainer = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * requestUserKeyPairs - Request all user key pairs
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Retrieve all user key pairs to allow re-encrypting file keys without need for a second distributor.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * List of key pairs is returned. 
   * 
   * ### Further Information:
   * None.
  **/
  requestUserKeyPairs(
    req: operations.RequestUserKeyPairsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserKeyPairsResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserKeyPairsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/keypairs";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RequestUserKeyPairsResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userKeyPairContainers = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * resetAvatar - Reset avatar
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
   * 
   * ### Description:  
   * Reset (custom) avatar to default avatar.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * * User's avatar gets deleted.  
   * * Default avatar is set.
   * 
   * ### Further Information:
   * None.
  **/
  resetAvatar(
    req: operations.ResetAvatarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ResetAvatarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ResetAvatarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/avatar";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ResetAvatarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.avatar = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setProfileAttributes - Set user profile attributes
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
   * 
   * ### Description:  
   * Set custom user profile attributes.
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Custom user profile attributes are set.
   * 
   * ### Further Information:
   * Batch function.  
   * All existing user profile attributes will be deleted.  
   * 
   * * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
   * * Characters are **case-insensitive**  
   * * Maximum key length is **255**  
   * * Maximum value length is **4096**
  **/
  setProfileAttributes(
    req: operations.SetProfileAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetProfileAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetProfileAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/profileAttributes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.SetProfileAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.profileAttributes = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * setUserKeyPair - Set user's key pair
   *
   * ### Description:  
   * Set the user key pair.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Key pair is set.
   * 
   * ### Further Information:
   * Overwriting an existing key pair is **NOT** possible.  
   * Please delete the existing key pair first.  
   * The private key is password-based encrypted with `AES256` / `PBKDF2`.
  **/
  setUserKeyPair(
    req: operations.SetUserKeyPairRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetUserKeyPairResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetUserKeyPairRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/keypair";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.SetUserKeyPairResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeDownloadShare - Subscribe Download Share for notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Subscribe Download Share for notifications.
   * 
   * ### Precondition:
   * User with _"manage download share"_ permissions on target node.
   * 
   * ### Postcondition:
   * Download Share is subscribed.  
   * Notifications for this Download Share will be triggered in the future.
   * 
   * ### Further Information:
   * None.
  **/
  subscribeDownloadShare(
    req: operations.SubscribeDownloadShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeDownloadShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeDownloadShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/subscriptions/download_shares/{share_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeDownloadShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subscribedDownloadShare = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeDownloadShares - Subscribe or Unsubscribe a List of Download Shares for notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
   * 
   * ### Description:  
   * Subscribe/Unsubscribe download shares for notifications.
   * 
   * ### Precondition:
   * User with _"manage download share"_ permissions on target node.
   * 
   * 
   * 
   * ### Postcondition:
   * Download shares are subscribed or unsubscribed.
   * Notifications for these download shares will be triggered in the future.
   * 
   * ### Further Information:
   * Maximum number of subscriptions is 200.
  **/
  subscribeDownloadShares(
    req: operations.SubscribeDownloadSharesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeDownloadSharesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeDownloadSharesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/subscriptions/download_shares";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeDownloadSharesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeNode - Subscribe node for notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:
   * Subscribe node for notifications.
   * 
   * ### Precondition:
   * User has _"read"_ permissions in auth parent room.
   * 
   * ### Postcondition:
   * Node is subscribed.
   * Notifications for this node will be triggered in the future.
   * 
   * ### Further Information:
   * None.
  **/
  subscribeNode(
    req: operations.SubscribeNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/subscriptions/nodes/{node_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subscribedNode = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeUploadShare - Subscribe Upload Share for notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Subscribe Upload Share for notifications.
   * 
   * ### Precondition:
   * User with _"manage upload share"_ permissions on target node.
   * 
   * ### Postcondition:
   * Upload Share is subscribed.  
   * Notifications for this Upload Share will be triggered in the future.
   * 
   * ### Further Information:
   * None.
  **/
  subscribeUploadShare(
    req: operations.SubscribeUploadShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeUploadShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeUploadShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/subscriptions/upload_shares/{share_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeUploadShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subscribedUploadShare = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * subscribeUploadShares - Subscribe or Unsubscribe a List of Upload Shares for notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
   * 
   * ### Description:  
   * Subscribe/Unsubscribe upload shares for notifications.
   * 
   * ### Precondition:
   * User with _"manage upload share"_ permissions on target node.
   * 
   * 
   * 
   * ### Postcondition:
   * Upload shares are subscribed or unsubscribed.
   * Notifications for these upload shares will be triggered in the future.
   * 
   * ### Further Information:
   * Maximum number of subscriptions is 200.
  **/
  subscribeUploadShares(
    req: operations.SubscribeUploadSharesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SubscribeUploadSharesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SubscribeUploadSharesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/subscriptions/upload_shares";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SubscribeUploadSharesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unsubscribeDownloadShare - Unsubscribe Download Share from notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Unsubscribe Download Share from notifications.
   * 
   * ### Precondition:
   * User with _"manage download share"_ permissions on target node.
   * 
   * ### Postcondition:
   * Download Share is unsubscribed.  
   * Notifications for this Download Share are disabled.
   * 
   * ### Further Information:
   * None.
  **/
  unsubscribeDownloadShare(
    req: operations.UnsubscribeDownloadShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsubscribeDownloadShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsubscribeDownloadShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/subscriptions/download_shares/{share_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnsubscribeDownloadShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unsubscribeNode - Unsubscribe node from notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Unsubscribe node from notifications.
   * 
   * ### Precondition:
   * User has _"read"_ permissions in auth parent room.
   * 
   * ### Postcondition:
   * Node is unsubscribed.  
   * Notifications for this node are disabled.
   * 
   * ### Further Information:
   * None.
  **/
  unsubscribeNode(
    req: operations.UnsubscribeNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsubscribeNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsubscribeNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/subscriptions/nodes/{node_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnsubscribeNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * unsubscribeUploadShare - Unsubscribe Upload Share from notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
   * 
   * ### Description:  
   * Unsubscribe Upload Share from notifications.
   * 
   * ### Precondition:
   * User with _"manage upload share"_ permissions on target node.
   * 
   * ### Postcondition:
   * Upload Share is unsubscribed.  
   * Notifications for this Upload Share are disabled.
   * 
   * ### Further Information:
   * None.
  **/
  unsubscribeUploadShare(
    req: operations.UnsubscribeUploadShareRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsubscribeUploadShareResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsubscribeUploadShareRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/subscriptions/upload_shares/{share_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UnsubscribeUploadShareResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNodeSubscriptions - Subscribe or Unsubscribe a List of nodes for notifications
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
   * 
   * ### Description:  
   * Subscribe/Unsubscribe nodes for notifications.
   * 
   * ### Precondition:
   * User has _"read"_ permissions in auth parent room.
   * 
   * ### Postcondition:
   * Nodes are subscribed or unsubscribed.
   * Notifications for these nodes will be triggered in the future.
   * 
   * ### Further Information:
   * Maximum number of subscriptions is 200.
  **/
  updateNodeSubscriptions(
    req: operations.UpdateNodeSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNodeSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNodeSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/subscriptions/nodes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNodeSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateNotificationConfig - Update notification configuration
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
   * 
   * ### Description:  
   * Update notification configuration for current user. 
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Notification configuration is updated.
   * 
   * ### Further Information:
   * Leave `channelIds` empty to disable notifications.
  **/
  updateNotificationConfig(
    req: operations.UpdateNotificationConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateNotificationConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateNotificationConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/user/notifications/config/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateNotificationConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notificationConfig = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateProfileAttributes - Add or edit user profile attributes
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
   * 
   * ### Description:  
   * Add or edit custom user profile attributes.
   * <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
   * 
   * ### Precondition:
   * None.
   * 
   * ### Postcondition:
   * Custom user profile attributes are added or edited.
   * 
   * ### Further Information:
   * Batch function.  
   * If an entry existed before, it will be overwritten.  
   * Range submodel is never returned.
   * 
   * * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
   * * Characters are **case-insensitive**  
   * * Maximum key length is **255**  
   * * Maximum value length is **4096**
  **/
  updateProfileAttributes(
    req: operations.UpdateProfileAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProfileAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProfileAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/profileAttributes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateProfileAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.profileAttributes = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateUserAccount - Update user account
   *
   * ### Description:  
   * Update current user's account.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * User's account is updated.
   * 
   * ### Further Information:
   * * All input fields are limited to **150** characters.  
   * * **All** characters are allowed.  
   * 
   * `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
  **/
  updateUserAccount(
    req: operations.UpdateUserAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateUserAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userAccount = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * uploadAvatarAsMultipart - Change avatar
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
   * 
   * ### Description:
   * Change the avatar.
   * 
   * ### Precondition:
   * Authenticated user.
   * 
   * ### Postcondition:
   * Avatar is changed.
   * 
   * ### Further Information:
   * * Media type **MUST** be `jpeg` or `png`
   * * File size **MUST** bei less than `5 MB`
   * * Dimensions **MUST** be `256x256 px`
  **/
  uploadAvatarAsMultipart(
    req: operations.UploadAvatarAsMultipartRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadAvatarAsMultipartResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadAvatarAsMultipartRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/user/account/avatar";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.UploadAvatarAsMultipartResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.avatar = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 412:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
