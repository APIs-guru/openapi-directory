import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class EnterpriseAdmin {
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
   * enterpriseAdminAddAuthorizedSshKey - Add an authorized SSH key
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#add-an-authorized-ssh-key - API method documentation
  **/
  enterpriseAdminAddAuthorizedSshKey(
    req: operations.EnterpriseAdminAddAuthorizedSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminAddAuthorizedSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminAddAuthorizedSshKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/settings/authorized-keys";

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
        const res: operations.EnterpriseAdminAddAuthorizedSshKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sshKeys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminCreateEnterpriseServerLicense - Create a GitHub license
   *
   * When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
   * 
   * Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
   * 
   * When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
   * 
   * 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
   * 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
   * 
   * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-settings).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-github-enterprise-server-license - API method documentation
  **/
  enterpriseAdminCreateEnterpriseServerLicense(
    req: operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/start";

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
        const res: operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminCreateGlobalWebhook - Create a global webhook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-global-webhook - API method documentation
  **/
  enterpriseAdminCreateGlobalWebhook(
    req: operations.EnterpriseAdminCreateGlobalWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateGlobalWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateGlobalWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/hooks";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.EnterpriseAdminCreateGlobalWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.globalHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminCreateImpersonationOAuthToken - Create an impersonation OAuth token
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-an-impersonation-oauth-token - API method documentation
  **/
  enterpriseAdminCreateImpersonationOAuthToken(
    req: operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/users/{username}/authorizations", req.pathParams);

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
        const res: operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
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
   * enterpriseAdminCreateOrg - Create an organization
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-an-organization - API method documentation
  **/
  enterpriseAdminCreateOrg(
    req: operations.EnterpriseAdminCreateOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/organizations";

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
        const res: operations.EnterpriseAdminCreateOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.organizationSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminCreatePreReceiveEnvironment - Create a pre-receive environment
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-pre-receive-environment - API method documentation
  **/
  enterpriseAdminCreatePreReceiveEnvironment(
    req: operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/pre-receive-environments";

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
        const res: operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveEnvironment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminCreatePreReceiveHook - Create a pre-receive hook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-pre-receive-hook - API method documentation
  **/
  enterpriseAdminCreatePreReceiveHook(
    req: operations.EnterpriseAdminCreatePreReceiveHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreatePreReceiveHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreatePreReceiveHookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/pre-receive-hooks";

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
        const res: operations.EnterpriseAdminCreatePreReceiveHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminCreateUser - Create a user
   *
   * If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
   * 
   * The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
   * 
   * If the login name or email address is already associated with an account, the server will return a `422` response.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#create-a-user - API method documentation
  **/
  enterpriseAdminCreateUser(
    req: operations.EnterpriseAdminCreateUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminCreateUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminCreateUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/users";

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
        const res: operations.EnterpriseAdminCreateUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeleteGlobalWebhook - Delete a global webhook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-global-webhook - API method documentation
  **/
  enterpriseAdminDeleteGlobalWebhook(
    req: operations.EnterpriseAdminDeleteGlobalWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteGlobalWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteGlobalWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteGlobalWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeleteImpersonationOAuthToken - Delete an impersonation OAuth token
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token - API method documentation
  **/
  enterpriseAdminDeleteImpersonationOAuthToken(
    req: operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/users/{username}/authorizations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeletePersonalAccessToken - Delete a personal access token
   *
   * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-personal-access-token - API method documentation
  **/
  enterpriseAdminDeletePersonalAccessToken(
    req: operations.EnterpriseAdminDeletePersonalAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeletePersonalAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeletePersonalAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/tokens/{token_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeletePersonalAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeletePreReceiveEnvironment - Delete a pre-receive environment
   *
   * If you attempt to delete an environment that cannot be deleted, you will receive a `422 Unprocessable Entity` response.
   * 
   * The possible error messages are:
   * 
   * *   _Cannot modify or delete the default environment_
   * *   _Cannot delete environment that has hooks_
   * *   _Cannot delete environment when download is in progress_
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-pre-receive-environment - API method documentation
  **/
  enterpriseAdminDeletePreReceiveEnvironment(
    req: operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminDeletePreReceiveEnvironment422ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeletePreReceiveHook - Delete a pre-receive hook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-pre-receive-hook - API method documentation
  **/
  enterpriseAdminDeletePreReceiveHook(
    req: operations.EnterpriseAdminDeletePreReceiveHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeletePreReceiveHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeletePreReceiveHookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeletePreReceiveHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeletePublicKey - Delete a public key
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-public-key - API method documentation
  **/
  enterpriseAdminDeletePublicKey(
    req: operations.EnterpriseAdminDeletePublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeletePublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeletePublicKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/keys/{key_ids}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeletePublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDeleteUser - Delete a user
   *
   * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
   * 
   * You can delete any user account except your own.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#delete-a-user - API method documentation
  **/
  enterpriseAdminDeleteUser(
    req: operations.EnterpriseAdminDeleteUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDeleteUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDeleteUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/users/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDeleteUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminDemoteSiteAdministrator - Demote a site administrator
   *
   * You can demote any user account except your own.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#demote-a-site-administrator - API method documentation
  **/
  enterpriseAdminDemoteSiteAdministrator(
    req: operations.EnterpriseAdminDemoteSiteAdministratorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminDemoteSiteAdministratorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminDemoteSiteAdministratorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/site_admin", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminDemoteSiteAdministratorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminEnableOrDisableMaintenanceMode - Enable or disable maintenance mode
   *
   * The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
   * 
   * The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode - API method documentation
  **/
  enterpriseAdminEnableOrDisableMaintenanceMode(
    req: operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/maintenance";

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
        const res: operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maintenanceStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetAllAuthorizedSshKeys - Get all authorized SSH keys
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-all-authorized-ssh-keys - API method documentation
  **/
  enterpriseAdminGetAllAuthorizedSshKeys(
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/settings/authorized-keys";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sshKeys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetConfigurationStatus - Get the configuration status
   *
   * This endpoint allows you to check the status of the most recent configuration process:
   * 
   * Note that you may need to wait several seconds after you start a process before you can check its status.
   * 
   * The different statuses are:
   * 
   * | Status        | Description                       |
   * | ------------- | --------------------------------- |
   * | `PENDING`     | The job has not started yet       |
   * | `CONFIGURING` | The job is running                |
   * | `DONE`        | The job has finished correctly    |
   * | `FAILED`      | The job has finished unexpectedly |
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-the-configuration-status - API method documentation
  **/
  enterpriseAdminGetConfigurationStatus(
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetConfigurationStatusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/configcheck";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetConfigurationStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.configurationStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetDownloadStatusForPreReceiveEnvironment - Get the download status for a pre-receive environment
   *
   * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment - API method documentation
  **/
  enterpriseAdminGetDownloadStatusForPreReceiveEnvironment(
    req: operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads/latest", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveEnvironmentDownloadStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetGlobalWebhook - Get a global webhook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-global-webhook - API method documentation
  **/
  enterpriseAdminGetGlobalWebhook(
    req: operations.EnterpriseAdminGetGlobalWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetGlobalWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetGlobalWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetGlobalWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.globalHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetLicenseInformation - Get license information
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-license-information - API method documentation
  **/
  enterpriseAdminGetLicenseInformation(
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetLicenseInformationResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/enterprise/settings/license";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetLicenseInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseInfo = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetMaintenanceStatus - Get the maintenance status
   *
   * Check your installation's maintenance status:
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-the-maintenance-status - API method documentation
  **/
  enterpriseAdminGetMaintenanceStatus(
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetMaintenanceStatusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/maintenance";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetMaintenanceStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.maintenanceStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetPreReceiveEnvironment - Get a pre-receive environment
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-environment - API method documentation
  **/
  enterpriseAdminGetPreReceiveEnvironment(
    req: operations.EnterpriseAdminGetPreReceiveEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetPreReceiveEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetPreReceiveEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetPreReceiveEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveEnvironment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetPreReceiveHook - Get a pre-receive hook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-hook - API method documentation
  **/
  enterpriseAdminGetPreReceiveHook(
    req: operations.EnterpriseAdminGetPreReceiveHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetPreReceiveHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetPreReceiveHookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetPreReceiveHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetPreReceiveHookForOrg - Get a pre-receive hook for an organization
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization - API method documentation
  **/
  enterpriseAdminGetPreReceiveHookForOrg(
    req: operations.EnterpriseAdminGetPreReceiveHookForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetPreReceiveHookForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetPreReceiveHookForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetPreReceiveHookForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orgPreReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetPreReceiveHookForRepo - Get a pre-receive hook for a repository
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository - API method documentation
  **/
  enterpriseAdminGetPreReceiveHookForRepo(
    req: operations.EnterpriseAdminGetPreReceiveHookForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetPreReceiveHookForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetPreReceiveHookForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetPreReceiveHookForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryPreReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetSettings - Get settings
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-settings - API method documentation
  **/
  enterpriseAdminGetSettings(
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetSettingsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/settings";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseSettings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminGetTypeStats - Get statistics
   *
   * There are a variety of types to choose from:
   * 
   * | Type         | Description                                                                                         |
   * | ------------ | --------------------------------------------------------------------------------------------------- |
   * | `issues`     | The number of open and closed issues.                                                               |
   * | `hooks`      | The number of active and inactive hooks.                                                            |
   * | `milestones` | The number of open and closed milestones.                                                           |
   * | `orgs`       | The number of organizations, teams, team members, and disabled organizations.                       |
   * | `comments`   | The number of comments on issues, pull requests, commits, and gists.                                |
   * | `pages`      | The number of GitHub Pages sites.                                                                   |
   * | `users`      | The number of suspended and admin users.                                                            |
   * | `gists`      | The number of private and public gists.                                                             |
   * | `pulls`      | The number of merged, mergeable, and unmergeable pull requests.                                     |
   * | `repos`      | The number of organization-owned repositories, root repositories, forks, pushed commits, and wikis. |
   * | `all`        | All of the statistics listed above.                                                                 |
   * 
   * These statistics are cached and will be updated approximately every 10 minutes.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-statistics - API method documentation
  **/
  enterpriseAdminGetTypeStats(
    req: operations.EnterpriseAdminGetTypeStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminGetTypeStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminGetTypeStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/enterprise/stats/{type}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminGetTypeStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminGetTypeStats200ApplicationJsonAnyOf = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListGlobalWebhooks - List global webhooks
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-global-webhooks - API method documentation
  **/
  enterpriseAdminListGlobalWebhooks(
    req: operations.EnterpriseAdminListGlobalWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListGlobalWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListGlobalWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/hooks";
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        const res: operations.EnterpriseAdminListGlobalWebhooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.globalHooks = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListPersonalAccessTokens - List personal access tokens
   *
   * Lists personal access tokens for all users, including admin users.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-personal-access-tokens - API method documentation
  **/
  enterpriseAdminListPersonalAccessTokens(
    req: operations.EnterpriseAdminListPersonalAccessTokensRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListPersonalAccessTokensResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListPersonalAccessTokensRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/tokens";
    
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
        const res: operations.EnterpriseAdminListPersonalAccessTokensResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authorizations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListPreReceiveEnvironments - List pre-receive environments
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-environments - API method documentation
  **/
  enterpriseAdminListPreReceiveEnvironments(
    req: operations.EnterpriseAdminListPreReceiveEnvironmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListPreReceiveEnvironmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListPreReceiveEnvironmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/pre-receive-environments";
    
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
        const res: operations.EnterpriseAdminListPreReceiveEnvironmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveEnvironments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListPreReceiveHooks - List pre-receive hooks
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-hooks - API method documentation
  **/
  enterpriseAdminListPreReceiveHooks(
    req: operations.EnterpriseAdminListPreReceiveHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListPreReceiveHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListPreReceiveHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/pre-receive-hooks";
    
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
        const res: operations.EnterpriseAdminListPreReceiveHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveHooks = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListPreReceiveHooksForOrg - List pre-receive hooks for an organization
   *
   * List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization - API method documentation
  **/
  enterpriseAdminListPreReceiveHooksForOrg(
    req: operations.EnterpriseAdminListPreReceiveHooksForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListPreReceiveHooksForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListPreReceiveHooksForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListPreReceiveHooksForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orgPreReceiveHooks = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListPreReceiveHooksForRepo - List pre-receive hooks for a repository
   *
   * List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository - API method documentation
  **/
  enterpriseAdminListPreReceiveHooksForRepo(
    req: operations.EnterpriseAdminListPreReceiveHooksForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListPreReceiveHooksForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListPreReceiveHooksForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks", req.pathParams);
    
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
        const res: operations.EnterpriseAdminListPreReceiveHooksForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryPreReceiveHooks = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminListPublicKeys - List public keys
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#list-public-keys - API method documentation
  **/
  enterpriseAdminListPublicKeys(
    req: operations.EnterpriseAdminListPublicKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminListPublicKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminListPublicKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/admin/keys";
    
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
        const res: operations.EnterpriseAdminListPublicKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterprisePublicKeys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminPingGlobalWebhook - Ping a global webhook
   *
   * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.19/webhooks/#ping-event) to be sent to the webhook.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#ping-a-global-webhook - API method documentation
  **/
  enterpriseAdminPingGlobalWebhook(
    req: operations.EnterpriseAdminPingGlobalWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminPingGlobalWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminPingGlobalWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}/pings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminPingGlobalWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminPromoteUserToBeSiteAdministrator - Promote a user to be a site administrator
   *
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator - API method documentation
  **/
  enterpriseAdminPromoteUserToBeSiteAdministrator(
    req: operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/site_admin", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminRemoveAuthorizedSshKey - Remove an authorized SSH key
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#remove-an-authorized-ssh-key - API method documentation
  **/
  enterpriseAdminRemoveAuthorizedSshKey(
    req: operations.EnterpriseAdminRemoveAuthorizedSshKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminRemoveAuthorizedSshKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/settings/authorized-keys";

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
        const res: operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sshKeys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminRemovePreReceiveHookEnforcementForOrg - Remove pre-receive hook enforcement for an organization
   *
   * Removes any overrides for this hook at the org level for this org.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization - API method documentation
  **/
  enterpriseAdminRemovePreReceiveHookEnforcementForOrg(
    req: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orgPreReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminRemovePreReceiveHookEnforcementForRepo - Remove pre-receive hook enforcement for a repository
   *
   * Deletes any overridden enforcement on this repository for the specified hook.
   * 
   * Responds with effective values inherited from owner and/or global level.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository - API method documentation
  **/
  enterpriseAdminRemovePreReceiveHookEnforcementForRepo(
    req: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryPreReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminSetSettings - Set settings
   *
   * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#get-settings).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#set-settings - API method documentation
  **/
  enterpriseAdminSetSettings(
    req: operations.EnterpriseAdminSetSettingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSetSettingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSetSettingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/settings";

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
        const res: operations.EnterpriseAdminSetSettingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminStartConfigurationProcess - Start a configuration process
   *
   * This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#start-a-configuration-process - API method documentation
  **/
  enterpriseAdminStartConfigurationProcess(
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminStartConfigurationProcessResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/configure";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminStartConfigurationProcessResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminStartPreReceiveEnvironmentDownload - Start a pre-receive environment download
   *
   * Triggers a new download of the environment tarball from the environment's `image_url`. When the download is finished, the newly downloaded tarball will overwrite the existing environment.
   * 
   * If a download cannot be triggered, you will receive a `422 Unprocessable Entity` response.
   * 
   * The possible error messages are:
   * 
   * * _Cannot modify or delete the default environment_
   * * _Can not start a new download when a download is in progress_
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#start-a-pre-receive-environment-download - API method documentation
  **/
  enterpriseAdminStartPreReceiveEnvironmentDownload(
    req: operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}/downloads", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveEnvironmentDownloadStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminSuspendUser - Suspend a user
   *
   * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
   * 
   * You can suspend any user account except your own.
   * 
   * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#suspend-a-user - API method documentation
  **/
  enterpriseAdminSuspendUser(
    req: operations.EnterpriseAdminSuspendUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSuspendUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSuspendUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/suspended", req.pathParams);

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
        const res: operations.EnterpriseAdminSuspendUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminSyncLdapMappingForTeam - Sync LDAP mapping for a team
   *
   * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team - API method documentation
  **/
  enterpriseAdminSyncLdapMappingForTeam(
    req: operations.EnterpriseAdminSyncLdapMappingForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSyncLdapMappingForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSyncLdapMappingForTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/ldap/teams/{team_id}/sync", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminSyncLdapMappingForTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminSyncLdapMappingForTeam201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminSyncLdapMappingForUser - Sync LDAP mapping for a user
   *
   * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user - API method documentation
  **/
  enterpriseAdminSyncLdapMappingForUser(
    req: operations.EnterpriseAdminSyncLdapMappingForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminSyncLdapMappingForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminSyncLdapMappingForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/ldap/users/{username}/sync", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.EnterpriseAdminSyncLdapMappingForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminSyncLdapMappingForUser201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUnsuspendUser - Unsuspend a user
   *
   * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#unsuspend-a-user - API method documentation
  **/
  enterpriseAdminUnsuspendUser(
    req: operations.EnterpriseAdminUnsuspendUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUnsuspendUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUnsuspendUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/suspended", req.pathParams);

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
        const res: operations.EnterpriseAdminUnsuspendUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdateGlobalWebhook - Update a global webhook
   *
   * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-a-global-webhook - API method documentation
  **/
  enterpriseAdminUpdateGlobalWebhook(
    req: operations.EnterpriseAdminUpdateGlobalWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateGlobalWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateGlobalWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/hooks/{hook_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.EnterpriseAdminUpdateGlobalWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.globalHook2 = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdateLdapMappingForTeam - Update LDAP mapping for a team
   *
   * Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
   * 
   * If you pass the `hellcat-preview` media type, you can also update the LDAP mapping of a child team.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team - API method documentation
  **/
  enterpriseAdminUpdateLdapMappingForTeam(
    req: operations.EnterpriseAdminUpdateLdapMappingForTeamRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateLdapMappingForTeamResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateLdapMappingForTeamRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/ldap/teams/{team_id}/mapping", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateLdapMappingForTeamResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ldapMappingTeam = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdateLdapMappingForUser - Update LDAP mapping for a user
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user - API method documentation
  **/
  enterpriseAdminUpdateLdapMappingForUser(
    req: operations.EnterpriseAdminUpdateLdapMappingForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateLdapMappingForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateLdapMappingForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/ldap/users/{username}/mapping", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateLdapMappingForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ldapMappingUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdateOrgName - Update an organization name
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-an-organization-name - API method documentation
  **/
  enterpriseAdminUpdateOrgName(
    req: operations.EnterpriseAdminUpdateOrgNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateOrgNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateOrgNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/organizations/{org}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateOrgNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminUpdateOrgName202ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdatePreReceiveEnvironment - Update a pre-receive environment
   *
   * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-a-pre-receive-environment - API method documentation
  **/
  enterpriseAdminUpdatePreReceiveEnvironment(
    req: operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-environments/{pre_receive_environment_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveEnvironment = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdatePreReceiveHook - Update a pre-receive hook
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-a-pre-receive-hook - API method documentation
  **/
  enterpriseAdminUpdatePreReceiveHook(
    req: operations.EnterpriseAdminUpdatePreReceiveHookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdatePreReceiveHookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdatePreReceiveHookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdatePreReceiveHookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.preReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdatePreReceiveHookEnforcementForOrg - Update pre-receive hook enforcement for an organization
   *
   * For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization - API method documentation
  **/
  enterpriseAdminUpdatePreReceiveHookEnforcementForOrg(
    req: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orgPreReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdatePreReceiveHookEnforcementForRepo - Update pre-receive hook enforcement for a repository
   *
   * For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository - API method documentation
  **/
  enterpriseAdminUpdatePreReceiveHookEnforcementForRepo(
    req: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryPreReceiveHook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpdateUsernameForUser - Update the username for a user
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#update-the-username-for-a-user - API method documentation
  **/
  enterpriseAdminUpdateUsernameForUser(
    req: operations.EnterpriseAdminUpdateUsernameForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpdateUsernameForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpdateUsernameForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/admin/users/{username}", req.pathParams);

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
        const res: operations.EnterpriseAdminUpdateUsernameForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.enterpriseAdminUpdateUsernameForUser202ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * enterpriseAdminUpgradeLicense - Upgrade a license
   *
   * This API upgrades your license and also triggers the configuration process:
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/enterprise-admin#upgrade-a-license - API method documentation
  **/
  enterpriseAdminUpgradeLicense(
    req: operations.EnterpriseAdminUpgradeLicenseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnterpriseAdminUpgradeLicenseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnterpriseAdminUpgradeLicenseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/setup/api/upgrade";

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
        const res: operations.EnterpriseAdminUpgradeLicenseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
