import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Apps {
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
   * appsAddRepoToInstallation - Add a repository to an app installation
   *
   * Add a single repository to an installation. The authenticated user must have admin access to the repository.
   * 
   * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.22/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#add-a-repository-to-an-app-installation - API method documentation
  **/
  appsAddRepoToInstallation(
    req: operations.AppsAddRepoToInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsAddRepoToInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsAddRepoToInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/installations/{installation_id}/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsAddRepoToInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
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
   * appsCheckAuthorization - Check an authorization
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
   * 
   * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#check-an-authorization - API method documentation
  **/
  appsCheckAuthorization(
    req: operations.AppsCheckAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsCheckAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsCheckAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/tokens/{access_token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsCheckAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
   * appsCheckToken - Check a token
   *
   * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#check-a-token - API method documentation
  **/
  appsCheckToken(
    req: operations.AppsCheckTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsCheckTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsCheckTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/token", req.pathParams);

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
        const res: operations.AppsCheckTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
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
   * appsCreateContentAttachment - Create a content attachment
   *
   * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.22/webhooks/event-payloads/#content_reference) to create an attachment.
   * 
   * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.22/apps/using-content-attachments/)" for details about content attachments.
   * 
   * You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-a-content-attachment - API method documentation
  **/
  appsCreateContentAttachment(
    req: operations.AppsCreateContentAttachmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsCreateContentAttachmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsCreateContentAttachmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/content_references/{content_reference_id}/attachments", req.pathParams);

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
        const res: operations.AppsCreateContentAttachmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.contentReferenceAttachment = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
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
          case httpRes?.status == 410:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsCreateContentAttachment415ApplicationJsonObject = httpRes?.data;
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
   * appsCreateFromManifest - Create a GitHub App from a manifest
   *
   * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-a-github-app-from-a-manifest - API method documentation
  **/
  appsCreateFromManifest(
    req: operations.AppsCreateFromManifestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsCreateFromManifestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsCreateFromManifestRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/app-manifests/{code}/conversions", req.pathParams);

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
        const res: operations.AppsCreateFromManifestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gitHubApp = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationErrorSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsCreateInstallationAccessToken - Create an installation access token for an app
   *
   * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#create-an-installation-access-token-for-an-app - API method documentation
  **/
  appsCreateInstallationAccessToken(
    req: operations.AppsCreateInstallationAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsCreateInstallationAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsCreateInstallationAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/app/installations/{installation_id}/access_tokens", req.pathParams);

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
        const res: operations.AppsCreateInstallationAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installationToken = httpRes?.data;
            }
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
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsCreateInstallationAccessToken415ApplicationJsonObject = httpRes?.data;
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
   * appsDeleteAuthorization - Delete an app authorization
   *
   * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
   * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-app-authorization - API method documentation
  **/
  appsDeleteAuthorization(
    req: operations.AppsDeleteAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsDeleteAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsDeleteAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/grant", req.pathParams);

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
        const res: operations.AppsDeleteAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * appsDeleteInstallation - Delete an installation for the authenticated app
   *
   * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#suspend-an-app-installation)" endpoint.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-installation-for-the-authenticated-app - API method documentation
  **/
  appsDeleteInstallation(
    req: operations.AppsDeleteInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsDeleteInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsDeleteInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/app/installations/{installation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsDeleteInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * appsDeleteToken - Delete an app token
   *
   * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#delete-an-app-token - API method documentation
  **/
  appsDeleteToken(
    req: operations.AppsDeleteTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsDeleteTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsDeleteTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/token", req.pathParams);

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
        const res: operations.AppsDeleteTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * appsGetAuthenticated - Get the authenticated app
   *
   * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-the-authenticated-app - API method documentation
  **/
  appsGetAuthenticated(
    config?: AxiosRequestConfig
  ): Promise<operations.AppsGetAuthenticatedResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/app";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsGetAuthenticatedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsGetBySlug - Get an app
   *
   * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
   * 
   * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps/#get-an-app - API method documentation
  **/
  appsGetBySlug(
    req: operations.AppsGetBySlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsGetBySlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsGetBySlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apps/{app_slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsGetBySlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integration = httpRes?.data;
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
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsGetBySlug415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsGetInstallation - Get an installation for the authenticated app
   *
   * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-an-installation-for-the-authenticated-app - API method documentation
  **/
  appsGetInstallation(
    req: operations.AppsGetInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsGetInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsGetInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/app/installations/{installation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsGetInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installationGhes2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsGetInstallation415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsGetOrgInstallation - Get an organization installation for the authenticated app
   *
   * Enables an authenticated GitHub App to find the organization's installation information.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app - API method documentation
  **/
  appsGetOrgInstallation(
    req: operations.AppsGetOrgInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsGetOrgInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsGetOrgInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/installation", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsGetOrgInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installationGhes2 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsGetRepoInstallation - Get a repository installation for the authenticated app
   *
   * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app - API method documentation
  **/
  appsGetRepoInstallation(
    req: operations.AppsGetRepoInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsGetRepoInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsGetRepoInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/installation", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsGetRepoInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installationGhes2 = httpRes?.data;
            }
            break;
          case httpRes?.status == 301:
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
   * appsGetUserInstallation - Get a user installation for the authenticated app
   *
   * Enables an authenticated GitHub App to find the user’s installation information.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#get-a-user-installation-for-the-authenticated-app - API method documentation
  **/
  appsGetUserInstallation(
    req: operations.AppsGetUserInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsGetUserInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsGetUserInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/installation", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsGetUserInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installationGhes2 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsListInstallationReposForAuthenticatedUser - List repositories accessible to the user access token
   *
   * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
   * 
   * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
   * 
   * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
   * 
   * The access the user has to each repository is included in the hash under the `permissions` key.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-repositories-accessible-to-the-user-access-token - API method documentation
  **/
  appsListInstallationReposForAuthenticatedUser(
    req: operations.AppsListInstallationReposForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsListInstallationReposForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsListInstallationReposForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/installations/{installation_id}/repositories", req.pathParams);
    
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
        const res: operations.AppsListInstallationReposForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsListInstallationReposForAuthenticatedUser200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
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
   * appsListInstallations - List installations for the authenticated app
   *
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   * 
   * The permissions the installation has are included under the `permissions` key.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-installations-for-the-authenticated-app - API method documentation
  **/
  appsListInstallations(
    req: operations.AppsListInstallationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsListInstallationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsListInstallationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/app/installations";
    
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
        const res: operations.AppsListInstallationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installationGhes2s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsListInstallationsForAuthenticatedUser - List app installations accessible to the user access token
   *
   * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
   * 
   * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
   * 
   * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
   * 
   * You can find the permissions for the installation under the `permissions` key.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token - API method documentation
  **/
  appsListInstallationsForAuthenticatedUser(
    req: operations.AppsListInstallationsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsListInstallationsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsListInstallationsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/installations";
    
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
        const res: operations.AppsListInstallationsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsListInstallationsForAuthenticatedUser200ApplicationJsonObject = httpRes?.data;
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
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsListInstallationsForAuthenticatedUser415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsListReposAccessibleToInstallation - List repositories accessible to the app installation
   *
   * List repositories that an app installation can access.
   * 
   * You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#list-repositories-accessible-to-the-app-installation - API method documentation
  **/
  appsListReposAccessibleToInstallation(
    req: operations.AppsListReposAccessibleToInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsListReposAccessibleToInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsListReposAccessibleToInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/installation/repositories";
    
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
        const res: operations.AppsListReposAccessibleToInstallationResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.appsListReposAccessibleToInstallation200ApplicationJsonObject = httpRes?.data;
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
   * appsRemoveRepoFromInstallation - Remove a repository from an app installation
   *
   * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
   * 
   * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.22/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#remove-a-repository-from-an-app-installation - API method documentation
  **/
  appsRemoveRepoFromInstallation(
    req: operations.AppsRemoveRepoFromInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsRemoveRepoFromInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsRemoveRepoFromInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/installations/{installation_id}/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsRemoveRepoFromInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
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
   * appsResetAuthorization - Reset an authorization
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
   * 
   * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#reset-an-authorization - API method documentation
  **/
  appsResetAuthorization(
    req: operations.AppsResetAuthorizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsResetAuthorizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsResetAuthorizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/tokens/{access_token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsResetAuthorizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorization = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsResetToken - Reset a token
   *
   * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#reset-a-token - API method documentation
  **/
  appsResetToken(
    req: operations.AppsResetTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsResetTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsResetTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/token", req.pathParams);

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
        const res: operations.AppsResetTokenResponse = {statusCode: httpRes.status, contentType: contentType};
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

  
  /**
   * appsRevokeAuthorizationForApplication - Revoke an authorization for an application
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
   * 
   * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-an-authorization-for-an-application - API method documentation
  **/
  appsRevokeAuthorizationForApplication(
    req: operations.AppsRevokeAuthorizationForApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsRevokeAuthorizationForApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsRevokeAuthorizationForApplicationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/tokens/{access_token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsRevokeAuthorizationForApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsRevokeGrantForApplication - Revoke a grant for an application
   *
   * **Deprecation Notice:** GitHub Enterprise Server will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
   * 
   * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.22/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.
   * 
   * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub Enterprise Server](https://github.com/settings/applications#authorized).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-a-grant-for-an-application - API method documentation
  **/
  appsRevokeGrantForApplication(
    req: operations.AppsRevokeGrantForApplicationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsRevokeGrantForApplicationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsRevokeGrantForApplicationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/applications/{client_id}/grants/{access_token}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsRevokeGrantForApplicationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsRevokeInstallationAccessToken - Revoke an installation access token
   *
   * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
   * 
   * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-server@2.22/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
   * 
   * You must use an [installation access token](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#revoke-an-installation-access-token - API method documentation
  **/
  appsRevokeInstallationAccessToken(
    config?: AxiosRequestConfig
  ): Promise<operations.AppsRevokeInstallationAccessTokenResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/installation/token";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsRevokeInstallationAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * appsSuspendInstallation - Suspend an app installation
   *
   * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Server API or webhook events is blocked for that account.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#suspend-an-app-installation - API method documentation
  **/
  appsSuspendInstallation(
    req: operations.AppsSuspendInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsSuspendInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsSuspendInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/app/installations/{installation_id}/suspended", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsSuspendInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * appsUnsuspendInstallation - Unsuspend an app installation
   *
   * Removes a GitHub App installation suspension.
   * 
   * You must use a [JWT](https://docs.github.com/enterprise-server@2.22/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/apps#unsuspend-an-app-installation - API method documentation
  **/
  appsUnsuspendInstallation(
    req: operations.AppsUnsuspendInstallationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AppsUnsuspendInstallationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AppsUnsuspendInstallationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/app/installations/{installation_id}/suspended", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AppsUnsuspendInstallationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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

}
