import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Users {
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
   * createUser - Create new user
   *
   * ### Description:
   * Create a new user.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
   * 
   * ### Postcondition:
   * New user is created.
   * 
   * ### Further Information:
   * * If a user should **NOT** expire, leave `expireAt` empty.
   * * All input fields are limited to **150** characters
   * * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
   * 
   * ### Authentication Method Options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Authentication Method | Option Key | Option Value |
   * | :--- | :--- | :--- |
   * | `basic` / `sql` | `username` | Unique user identifier |
   * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
   * |  | `username` | Active Directory username according to authentication setting `userFilter` |
   * | `radius` | `username` | RADIUS username |
   * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
   * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
   * 
   * </details>
  **/
  createUser(
    req: operations.CreateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateUserResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/users";

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
        const res: operations.CreateUserResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userData = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createUser400ApplicationJsonOneOf = httpRes?.data;
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
   * removeUser - Remove user
   *
   * ### Description:
   * Delete a user.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete users</span> required.
   * 
   * ### Postcondition:
   * User is deleted.
   * 
   * ### Further Information:
   * User **CANNOT** be deleted if he is a last room administrator of any room.
  **/
  removeUser(
    req: operations.RemoveUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}", req.pathParams);
    
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
        const res: operations.RemoveUserResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * removeUserAttribute - Remove custom user attribute
   *
   * ### Description:
   * Delete custom user attribute.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
   * 
   * ### Postcondition:
   * Custom user attribute is deleted.
   * 
   * ### Further Information:
   * * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
   * * Characters are **case-insensitive**.
  **/
  removeUserAttribute(
    req: operations.RemoveUserAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveUserAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveUserAttributeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/userAttributes/{key}", req.pathParams);
    
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
        const res: operations.RemoveUserAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
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
   * requestLastAdminRoomsUsers - Request rooms where the user is last admin
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of all rooms where the user is last admin (except homeroom and its subordinary rooms).
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
   * 
   * ### Postcondition:
   * List of rooms is returned. 
   * 
   * ### Further Information:
   * An empty list is returned if no rooms were found where the user is last admin.
  **/
  requestLastAdminRoomsUsers(
    req: operations.RequestLastAdminRoomsUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestLastAdminRoomsUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestLastAdminRoomsUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/last_admin_rooms", req.pathParams);
    
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
        const res: operations.RequestLastAdminRoomsUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.lastAdminUserRoomList = httpRes?.data;
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
   * requestUser - Request user
   *
   * ### Description:  
   * Retrieve detailed information about a single user.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
   * 
   * ### Postcondition:
   * User information is returned.
   * 
   * ### Further Information:
   * None.
   * 
   * ### Authentication Method Options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Authentication Method | Option Key | Option Value |
   * | :--- | :--- | :--- |
   * | `basic` / `sql` | `username` | Unique user identifier |
   * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
   * |  | `username` | Active Directory username according to authentication setting `userFilter` |
   * | `radius` | `username` | RADIUS username |
   * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
   * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
   * 
   * </details>
  **/
  requestUser(
    req: operations.RequestUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}", req.pathParams);
    
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
        const res: operations.RequestUserResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userData = httpRes?.data;
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
   * requestUserAttributes - Request custom user attributes
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
   * 
   * ### Description:  
   * Retrieve a list of user attributes.
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
   * | `key` | User attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
   * | `value` | User attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
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
   * | `key` | User attribute key |
   * | `value` | User attribute value |
   * 
   * </details>
  **/
  requestUserAttributes(
    req: operations.RequestUserAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/userAttributes", req.pathParams);
    
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
        const res: operations.RequestUserAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * requestUserGroups - Request groups that user is a member of or / and can become a member
   *
   * ### Description:  
   * Retrieves a list of groups a user is member of and / or can become a member.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
   * 
   * ### Postcondition:
   * List of groups is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `isMember:eq:false|name:cn:searchString`  
   * Get all groups that the user is **NOT** member of **AND** whose name is like `searchString`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
   * | `isMember` | Filter the groups which the user is (not) member of | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
   * 
   * </details>
  **/
  requestUserGroups(
    req: operations.RequestUserGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/groups", req.pathParams);
    
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
        const res: operations.RequestUserGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userGroupList = httpRes?.data;
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
   * requestUserRoles - Request user's granted roles
   *
   * ### Description:  
   * Retrieve a list of all roles granted to a user.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
   * 
   * ### Postcondition:
   * List of granted roles is returned.
   * 
   * ### Further Information:
   * None.
  **/
  requestUserRoles(
    req: operations.RequestUserRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUserRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUserRolesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/roles", req.pathParams);
    
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
        const res: operations.RequestUserRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roleList = httpRes?.data;
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
   * requestUsers - Request users
   *
   * ### Description:  
   * Returns a list of DRACOON users.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
   * 
   * ### Postcondition:
   * List of users is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
   * Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
   * | `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
   * | `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
   * | `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
   * | `isLocked` | User lock status filter | `eq` |  | `true or false` |
   * | `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
   * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
   * | `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
   * | `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
   * | `hasRole` | User role filter<br>Depends on **effectiveRoles**.<br>For more Roles information please call `GET /roles API` | `eq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li></ul> |
   * 
   * </details>
   * 
   * ### Deprecated filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
   * | <del>`login`</del> | User login filter | `cn` | User login contains value. | `search String` |
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
   * `firstName:asc|lastLoginSuccessAt:desc`  
   * Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.
   * 
   * </details>
   * 
   * ### Sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | `userName` | User name |
   * | `email` | User email |
   * | `firstName` | User first name |
   * | `lastName` | User last name |
   * | `isLocked` | User lock status |
   * | `lastLoginSuccessAt` | Last successful login date |
   * | `expireAt` | Expiration date |
   * | `createdAt` | Creation date |
   * 
   * </details>
   * 
   * ### Deprecated sorting options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Description |
   * | :--- | :--- |
   * | <del>`gender`</del> | Gender |
   * | <del>`lockStatus`</del> | User lock status |
   * | <del>`login`</del> | User login |
   * 
   * </details>
  **/
  requestUsers(
    req: operations.RequestUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUsersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/users";
    
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
        const res: operations.RequestUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userList = httpRes?.data;
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
   * requestUsersRooms - Request rooms granted to the user or / and rooms that can be granted
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>
   * 
   * ### Description:  
   * Retrieves a list of rooms granted to the user and / or that can be granted.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
   * 
   * ### Postcondition:
   * List of rooms is returned.
   * 
   * ### Further Information:
   * 
   * ### Filtering:
   * All filter fields are connected via logical conjunction (**AND**)  
   * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`  
   * 
   * <details style="padding-left: 10px">
   * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
   * 
   * `isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`  
   * Get all rooms that the user is granted **AND** is last admin **AND** whose name is like `searchString`.
   * 
   * </details>
   * 
   * ### Filtering options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
   * | :--- | :--- | :--- | :--- | :--- |
   * | `name` | Room name filter | `cn` | Room name contains value. | `search String` |
   * | `isGranted` | Filter the rooms which the user is (not) granted. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
   * | `isLastAdmin` | Filter the rooms which the user is last room administrator.<br>Only in connection with `isGranted:eq:true` filter possible. | `eq` |  | `true` |
   * | `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
   * 
   * </details>
  **/
  requestUsersRooms(
    req: operations.RequestUsersRoomsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RequestUsersRoomsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RequestUsersRoomsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/rooms", req.pathParams);
    
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
        const res: operations.RequestUsersRoomsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.roomTreeDataList = httpRes?.data;
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
   * setUserAttributes - Set custom user attributes
   *
   * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>
   * 
   * ### Description:  
   * Set custom user attributes.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
   * 
   * ### Postcondition:
   * Custom user attributes are set.
   * 
   * ### Further Information:
   * Batch function.  
   * All existing user attributes will be deleted.  
   * 
   * * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
   * * Characters are **case-insensitive**.
  **/
  setUserAttributes(
    req: operations.SetUserAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SetUserAttributesResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SetUserAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/userAttributes", req.pathParams);

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
        const res: operations.SetUserAttributesResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userData = httpRes?.data;
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
   * updateUser - Update user's metadata
   *
   * ### Description:  
   * Update user's metadata.
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
   * 
   * ### Postcondition:
   * User's metadata is updated.
   * 
   * ### Further Information:
   * * If a user should **NOT** expire, leave `expireAt` empty.
   * * All input fields are limited to **150** characters
   * * **All** characters are allowed.
   * 
   * ### Authentication Method Options:
   * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
   * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
   * 
   * | Authentication Method | Option Key | Option Value |
   * | :--- | :--- | :--- |
   * | `basic` / `sql` | `username` | Unique user identifier |
   * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
   * |  | `username` | Active Directory username according to authentication setting `userFilter` |
   * | `radius` | `username` | RADIUS username |
   * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
   * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
   * 
   * </details>
  **/
  updateUser(
    req: operations.UpdateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}", req.pathParams);

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
        const res: operations.UpdateUserResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userData = httpRes?.data;
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
   * updateUserAttributes - Add or edit custom user attributes
   *
   * ### Description:  
   * Add or edit custom user attributes.
   * <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
   * 
   * ### Precondition:
   * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
   * 
   * ### Postcondition:
   * Custom user attributes gets added or edited.
   * 
   * ### Further Information:
   * Batch function.  
   * If an entry exists before, it will be overwritten.  
   * 
   * * Allowed characters for keys are: `[a-zA-Z0-9_-]`  
   * * Characters are **case-insensitive**.
  **/
  updateUserAttributes(
    req: operations.UpdateUserAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateUserAttributesResponseOutput> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateUserAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/users/{user_id}/userAttributes", req.pathParams);

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
        const res: operations.UpdateUserAttributesResponseOutput = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.userData = httpRes?.data;
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

}
