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
   * usersAddEmailForAuthenticated - Add an email address for the authenticated user
   *
   * This endpoint is accessible with the `user` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#add-an-email-address-for-the-authenticated-user - API method documentation
  **/
  usersAddEmailForAuthenticated(
    req: operations.UsersAddEmailForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersAddEmailForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersAddEmailForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/emails";

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
        const res: operations.UsersAddEmailForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.emails = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersCheckFollowingForUser - Check if a user follows another user
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#check-if-a-user-follows-another-user - API method documentation
  **/
  usersCheckFollowingForUser(
    req: operations.UsersCheckFollowingForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersCheckFollowingForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersCheckFollowingForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/following/{target_user}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersCheckFollowingForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersCheckPersonIsFollowedByAuthenticated - Check if a person is followed by the authenticated user
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user - API method documentation
  **/
  usersCheckPersonIsFollowedByAuthenticated(
    req: operations.UsersCheckPersonIsFollowedByAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersCheckPersonIsFollowedByAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersCheckPersonIsFollowedByAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/following/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersCheckPersonIsFollowedByAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersCreateGpgKeyForAuthenticated - Create a GPG key for the authenticated user
   *
   * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#create-a-gpg-key-for-the-authenticated-user - API method documentation
  **/
  usersCreateGpgKeyForAuthenticated(
    req: operations.UsersCreateGpgKeyForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersCreateGpgKeyForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersCreateGpgKeyForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/gpg_keys";

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
        const res: operations.UsersCreateGpgKeyForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gpgKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersCreatePublicSshKeyForAuthenticated - Create a public SSH key for the authenticated user
   *
   * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user - API method documentation
  **/
  usersCreatePublicSshKeyForAuthenticated(
    req: operations.UsersCreatePublicSshKeyForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersCreatePublicSshKeyForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersCreatePublicSshKeyForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/keys";

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
        const res: operations.UsersCreatePublicSshKeyForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.key = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersDeleteEmailForAuthenticated - Delete an email address for the authenticated user
   *
   * This endpoint is accessible with the `user` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#delete-an-email-address-for-the-authenticated-user - API method documentation
  **/
  usersDeleteEmailForAuthenticated(
    req: operations.UsersDeleteEmailForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersDeleteEmailForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersDeleteEmailForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/emails";

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
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersDeleteEmailForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersDeleteGpgKeyForAuthenticated - Delete a GPG key for the authenticated user
   *
   * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user - API method documentation
  **/
  usersDeleteGpgKeyForAuthenticated(
    req: operations.UsersDeleteGpgKeyForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersDeleteGpgKeyForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersDeleteGpgKeyForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/gpg_keys/{gpg_key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersDeleteGpgKeyForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersDeletePublicSshKeyForAuthenticated - Delete a public SSH key for the authenticated user
   *
   * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user - API method documentation
  **/
  usersDeletePublicSshKeyForAuthenticated(
    req: operations.UsersDeletePublicSshKeyForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersDeletePublicSshKeyForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersDeletePublicSshKeyForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersDeletePublicSshKeyForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersFollow - Follow a user
   *
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
   * 
   * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#follow-a-user - API method documentation
  **/
  usersFollow(
    req: operations.UsersFollowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersFollowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersFollowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/following/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersFollowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGetAuthenticated - Get the authenticated user
   *
   * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
   * 
   * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#get-the-authenticated-user - API method documentation
  **/
  usersGetAuthenticated(
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetAuthenticatedResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersGetAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.usersGetAuthenticated200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGetByUsername - Get a user
   *
   * Provides publicly available information about someone with a GitHub account.
   * 
   * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Server plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-server@2.20/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Server plan information' below"
   * 
   * The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Server [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Server. For more information, see [Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication).
   * 
   * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-server@2.20/rest/reference/users#emails)".
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#get-a-user - API method documentation
  **/
  usersGetByUsername(
    req: operations.UsersGetByUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetByUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetByUsernameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersGetByUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.usersGetByUsername200ApplicationJsonOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.usersGetByUsername202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGetContextForUser - Get contextual information for a user
   *
   * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
   * 
   * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
   * 
   * ```shell
   *  curl -u username:token
   *   https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
   * ```
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#get-contextual-information-for-a-user - API method documentation
  **/
  usersGetContextForUser(
    req: operations.UsersGetContextForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetContextForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetContextForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/hovercard", req.pathParams);
    
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
        const res: operations.UsersGetContextForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hovercard = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGetGpgKeyForAuthenticated - Get a GPG key for the authenticated user
   *
   * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#get-a-gpg-key-for-the-authenticated-user - API method documentation
  **/
  usersGetGpgKeyForAuthenticated(
    req: operations.UsersGetGpgKeyForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetGpgKeyForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetGpgKeyForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/gpg_keys/{gpg_key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersGetGpgKeyForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gpgKey = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersGetPublicSshKeyForAuthenticated - Get a public SSH key for the authenticated user
   *
   * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user - API method documentation
  **/
  usersGetPublicSshKeyForAuthenticated(
    req: operations.UsersGetPublicSshKeyForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetPublicSshKeyForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetPublicSshKeyForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersGetPublicSshKeyForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.key = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersList - List users
   *
   * Lists all users, in the order that they signed up on GitHub Enterprise Server. This list includes personal user accounts and organization accounts.
   * 
   * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-users - API method documentation
  **/
  usersList(
    req: operations.UsersListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/users";
    
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
        const res: operations.UsersListResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListEmailsForAuthenticated - List email addresses for the authenticated user
   *
   * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-email-addresses-for-the-authenticated-user - API method documentation
  **/
  usersListEmailsForAuthenticated(
    req: operations.UsersListEmailsForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListEmailsForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListEmailsForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/emails";
    
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
        const res: operations.UsersListEmailsForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.emails = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListFollowedByAuthenticated - List the people the authenticated user follows
   *
   * Lists the people who the authenticated user follows.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-the-people-the-authenticated-user-follows - API method documentation
  **/
  usersListFollowedByAuthenticated(
    req: operations.UsersListFollowedByAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListFollowedByAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListFollowedByAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/following";
    
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
        const res: operations.UsersListFollowedByAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListFollowersForAuthenticatedUser - List followers of the authenticated user
   *
   * Lists the people following the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-followers-of-the-authenticated-user - API method documentation
  **/
  usersListFollowersForAuthenticatedUser(
    req: operations.UsersListFollowersForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListFollowersForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListFollowersForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/followers";
    
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
        const res: operations.UsersListFollowersForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListFollowersForUser - List followers of a user
   *
   * Lists the people following the specified user.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-followers-of-a-user - API method documentation
  **/
  usersListFollowersForUser(
    req: operations.UsersListFollowersForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListFollowersForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListFollowersForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/followers", req.pathParams);
    
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
        const res: operations.UsersListFollowersForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListFollowingForUser - List the people a user follows
   *
   * Lists the people who the specified user follows.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-the-people-a-user-follows - API method documentation
  **/
  usersListFollowingForUser(
    req: operations.UsersListFollowingForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListFollowingForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListFollowingForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/following", req.pathParams);
    
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
        const res: operations.UsersListFollowingForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListGpgKeysForAuthenticated - List GPG keys for the authenticated user
   *
   * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-gpg-keys-for-the-authenticated-user - API method documentation
  **/
  usersListGpgKeysForAuthenticated(
    req: operations.UsersListGpgKeysForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListGpgKeysForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListGpgKeysForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/gpg_keys";
    
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
        const res: operations.UsersListGpgKeysForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gpgKeys = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListGpgKeysForUser - List GPG keys for a user
   *
   * Lists the GPG keys for a user. This information is accessible by anyone.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-gpg-keys-for-a-user - API method documentation
  **/
  usersListGpgKeysForUser(
    req: operations.UsersListGpgKeysForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListGpgKeysForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListGpgKeysForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/gpg_keys", req.pathParams);
    
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
        const res: operations.UsersListGpgKeysForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gpgKeys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListPublicEmailsForAuthenticated - List public email addresses for the authenticated user
   *
   * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-server@2.20/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-public-email-addresses-for-the-authenticated-user - API method documentation
  **/
  usersListPublicEmailsForAuthenticated(
    req: operations.UsersListPublicEmailsForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListPublicEmailsForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListPublicEmailsForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/public_emails";
    
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
        const res: operations.UsersListPublicEmailsForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.emails = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListPublicKeysForUser - List public keys for a user
   *
   * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-public-keys-for-a-user - API method documentation
  **/
  usersListPublicKeysForUser(
    req: operations.UsersListPublicKeysForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListPublicKeysForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListPublicKeysForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/keys", req.pathParams);
    
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
        const res: operations.UsersListPublicKeysForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keySimples = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersListPublicSshKeysForAuthenticated - List public SSH keys for the authenticated user
   *
   * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user - API method documentation
  **/
  usersListPublicSshKeysForAuthenticated(
    req: operations.UsersListPublicSshKeysForAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersListPublicSshKeysForAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersListPublicSshKeysForAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/keys";
    
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
        const res: operations.UsersListPublicSshKeysForAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.keys = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersUnfollow - Unfollow a user
   *
   * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users#unfollow-a-user - API method documentation
  **/
  usersUnfollow(
    req: operations.UsersUnfollowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersUnfollowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersUnfollowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/following/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersUnfollowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * usersUpdateAuthenticated - Update the authenticated user
   *
   * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/users/#update-the-authenticated-user - API method documentation
  **/
  usersUpdateAuthenticated(
    req: operations.UsersUpdateAuthenticatedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersUpdateAuthenticatedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersUpdateAuthenticatedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user";

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UsersUpdateAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.privateUser = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
