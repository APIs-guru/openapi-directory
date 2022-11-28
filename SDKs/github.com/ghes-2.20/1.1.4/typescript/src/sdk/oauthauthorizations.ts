import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class OauthAuthorizations {
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
   * oauthAuthorizationsCreateAuthorization - Create a new authorization
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   * 
   * **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
   * 
   * Creates OAuth tokens using [Basic Authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
   * 
   * To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.
   * 
   * You can also create tokens on GitHub Enterprise Server from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).
   * 
   * Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#create-a-new-authorization - API method documentation
  **/
  oauthAuthorizationsCreateAuthorization(
    req: operations.OauthAuthorizationsCreateAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsCreateAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsCreateAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/authorizations";

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
        const res: operations.OauthAuthorizationsCreateAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
          case httpRes?.status == 410:
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
   * oauthAuthorizationsDeleteAuthorization - Delete an authorization
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#delete-an-authorization - API method documentation
  **/
  oauthAuthorizationsDeleteAuthorization(
    req: operations.OauthAuthorizationsDeleteAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsDeleteAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsDeleteAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/authorizations/{authorization_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OauthAuthorizationsDeleteAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * oauthAuthorizationsDeleteGrant - Delete a grant
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   * 
   * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#delete-a-grant - API method documentation
  **/
  oauthAuthorizationsDeleteGrant(
    req: operations.OauthAuthorizationsDeleteGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsDeleteGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsDeleteGrantRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/grants/{grant_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OauthAuthorizationsDeleteGrantResponse = {statusCode: httpRes.status, contentType: contentType};
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * oauthAuthorizationsGetAuthorization - Get a single authorization
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#get-a-single-authorization - API method documentation
  **/
  oauthAuthorizationsGetAuthorization(
    req: operations.OauthAuthorizationsGetAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsGetAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsGetAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/authorizations/{authorization_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OauthAuthorizationsGetAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
   * oauthAuthorizationsGetGrant - Get a single grant
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#get-a-single-grant - API method documentation
  **/
  oauthAuthorizationsGetGrant(
    req: operations.OauthAuthorizationsGetGrantRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsGetGrantResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsGetGrantRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/grants/{grant_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OauthAuthorizationsGetGrantResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.applicationGrant = httpRes?.data;
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
   * oauthAuthorizationsGetOrCreateAuthorizationForApp - Get-or-create an authorization for a specific app
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   * 
   * **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
   * 
   * Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
   * 
   * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
   * 
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app - API method documentation
  **/
  oauthAuthorizationsGetOrCreateAuthorizationForApp(
    req: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/authorizations/clients/{client_id}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
   * oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint - Get-or-create an authorization for a specific app and fingerprint
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   * 
   * **Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
   * 
   * This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
   * 
   * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint - API method documentation
  **/
  oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(
    req: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/authorizations/clients/{client_id}/{fingerprint}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
   * oauthAuthorizationsListAuthorizations - List your authorizations
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#list-your-authorizations - API method documentation
  **/
  oauthAuthorizationsListAuthorizations(
    req: operations.OauthAuthorizationsListAuthorizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsListAuthorizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsListAuthorizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/authorizations";
    
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
        const res: operations.OauthAuthorizationsListAuthorizationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorizations = httpRes?.data;
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
   * oauthAuthorizationsListGrants - List your grants
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   * 
   * You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#list-your-grants - API method documentation
  **/
  oauthAuthorizationsListGrants(
    req: operations.OauthAuthorizationsListGrantsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsListGrantsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsListGrantsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/applications/grants";
    
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
        const res: operations.OauthAuthorizationsListGrantsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.applicationGrants = httpRes?.data;
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
   * oauthAuthorizationsUpdateAuthorization - Update an existing authorization
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
   * 
   * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.20/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
   * 
   * You can only send one of these scope keys at a time.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#update-an-existing-authorization - API method documentation
  **/
  oauthAuthorizationsUpdateAuthorization(
    req: operations.OauthAuthorizationsUpdateAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OauthAuthorizationsUpdateAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OauthAuthorizationsUpdateAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/authorizations/{authorization_id}", req.pathParams);

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
        const res: operations.OauthAuthorizationsUpdateAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
