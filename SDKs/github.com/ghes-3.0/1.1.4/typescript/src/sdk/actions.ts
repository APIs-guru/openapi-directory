import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Actions {
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
   * actionsAddRepoAccessToSelfHostedRunnerGroupInOrg - Add repository access to a self-hosted runner group in an organization
   *
   * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
  **/
  actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(
    req: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsAddSelectedRepoToOrgSecret - Add selected repository to an organization secret
   *
   * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
  **/
  actionsAddSelectedRepoToOrgSecret(
    req: operations.ActionsAddSelectedRepoToOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsAddSelectedRepoToOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsAddSelectedRepoToOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsAddSelectedRepoToOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 409:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsAddSelfHostedRunnerToGroupForOrg - Add a self-hosted runner to a group for an organization
   *
   * Adds a self-hosted runner to a runner group configured in an organization.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
  **/
  actionsAddSelfHostedRunnerToGroupForOrg(
    req: operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCancelWorkflowRun - Cancel a workflow run
   *
   * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#cancel-a-workflow-run - API method documentation
  **/
  actionsCancelWorkflowRun(
    req: operations.ActionsCancelWorkflowRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCancelWorkflowRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCancelWorkflowRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsCancelWorkflowRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsCancelWorkflowRun202ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateOrUpdateOrgSecret - Create or update an organization secret
   *
   * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
   * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
   * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
   * use this endpoint.
   * 
   * #### Example encrypting a secret using Node.js
   * 
   * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
   * 
   * ```
   * const sodium = require('tweetsodium');
   * 
   * const key = "base64-encoded-public-key";
   * const value = "plain-text-secret";
   * 
   * // Convert the message and key to Uint8Array's (Buffer implements that interface)
   * const messageBytes = Buffer.from(value);
   * const keyBytes = Buffer.from(key, 'base64');
   * 
   * // Encrypt using LibSodium.
   * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
   * 
   * // Base64 the encrypted secret
   * const encrypted = Buffer.from(encryptedBytes).toString('base64');
   * 
   * console.log(encrypted);
   * ```
   * 
   * 
   * #### Example encrypting a secret using Python
   * 
   * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
   * 
   * ```
   * from base64 import b64encode
   * from nacl import encoding, public
   * 
   * def encrypt(public_key: str, secret_value: str) -> str:
   *   """Encrypt a Unicode string using the public key."""
   *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
   *   sealed_box = public.SealedBox(public_key)
   *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
   *   return b64encode(encrypted).decode("utf-8")
   * ```
   * 
   * #### Example encrypting a secret using C#
   * 
   * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
   * 
   * ```
   * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
   * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
   * 
   * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
   * 
   * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
   * ```
   * 
   * #### Example encrypting a secret using Ruby
   * 
   * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
   * 
   * ```ruby
   * require "rbnacl"
   * require "base64"
   * 
   * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
   * public_key = RbNaCl::PublicKey.new(key)
   * 
   * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
   * encrypted_secret = box.encrypt("my_secret")
   * 
   * # Print the base64 encoded secret
   * puts Base64.strict_encode64(encrypted_secret)
   * ```
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret - API method documentation
  **/
  actionsCreateOrUpdateOrgSecret(
    req: operations.ActionsCreateOrUpdateOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateOrUpdateOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateOrUpdateOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}", req.pathParams);

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
        const res: operations.ActionsCreateOrUpdateOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.emptyObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateOrUpdateRepoSecret - Create or update a repository secret
   *
   * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
   * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
   * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
   * this endpoint.
   * 
   * #### Example encrypting a secret using Node.js
   * 
   * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
   * 
   * ```
   * const sodium = require('tweetsodium');
   * 
   * const key = "base64-encoded-public-key";
   * const value = "plain-text-secret";
   * 
   * // Convert the message and key to Uint8Array's (Buffer implements that interface)
   * const messageBytes = Buffer.from(value);
   * const keyBytes = Buffer.from(key, 'base64');
   * 
   * // Encrypt using LibSodium.
   * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
   * 
   * // Base64 the encrypted secret
   * const encrypted = Buffer.from(encryptedBytes).toString('base64');
   * 
   * console.log(encrypted);
   * ```
   * 
   * 
   * #### Example encrypting a secret using Python
   * 
   * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
   * 
   * ```
   * from base64 import b64encode
   * from nacl import encoding, public
   * 
   * def encrypt(public_key: str, secret_value: str) -> str:
   *   """Encrypt a Unicode string using the public key."""
   *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
   *   sealed_box = public.SealedBox(public_key)
   *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
   *   return b64encode(encrypted).decode("utf-8")
   * ```
   * 
   * #### Example encrypting a secret using C#
   * 
   * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
   * 
   * ```
   * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
   * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
   * 
   * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
   * 
   * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
   * ```
   * 
   * #### Example encrypting a secret using Ruby
   * 
   * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
   * 
   * ```ruby
   * require "rbnacl"
   * require "base64"
   * 
   * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
   * public_key = RbNaCl::PublicKey.new(key)
   * 
   * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
   * encrypted_secret = box.encrypt("my_secret")
   * 
   * # Print the base64 encoded secret
   * puts Base64.strict_encode64(encrypted_secret)
   * ```
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
  **/
  actionsCreateOrUpdateRepoSecret(
    req: operations.ActionsCreateOrUpdateRepoSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateOrUpdateRepoSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateOrUpdateRepoSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", req.pathParams);

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
        const res: operations.ActionsCreateOrUpdateRepoSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsCreateOrUpdateRepoSecret201ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateRegistrationTokenForOrg - Create a registration token for an organization
   *
   * Returns a token that you can pass to the `config` script. The token expires after one hour.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   * 
   * #### Example using registration token
   * 
   * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
   * 
   * ```
   * ./config.sh --url https://github.com/octo-org --token TOKEN
   * ```
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
  **/
  actionsCreateRegistrationTokenForOrg(
    req: operations.ActionsCreateRegistrationTokenForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateRegistrationTokenForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateRegistrationTokenForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/registration-token", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsCreateRegistrationTokenForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateRegistrationTokenForRepo - Create a registration token for a repository
   *
   * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
   * using an access token with the `repo` scope to use this endpoint.
   * 
   * #### Example using registration token
   *  
   * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
   * 
   * ```
   * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
   * ```
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
  **/
  actionsCreateRegistrationTokenForRepo(
    req: operations.ActionsCreateRegistrationTokenForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateRegistrationTokenForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateRegistrationTokenForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/registration-token", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsCreateRegistrationTokenForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateRemoveTokenForOrg - Create a remove token for an organization
   *
   * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   * 
   * #### Example using remove token
   * 
   * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
   * endpoint.
   * 
   * ```
   * ./config.sh remove --token TOKEN
   * ```
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
  **/
  actionsCreateRemoveTokenForOrg(
    req: operations.ActionsCreateRemoveTokenForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateRemoveTokenForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateRemoveTokenForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/remove-token", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsCreateRemoveTokenForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateRemoveTokenForRepo - Create a remove token for a repository
   *
   * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
   * You must authenticate using an access token with the `repo` scope to use this endpoint.
   * 
   * #### Example using remove token
   *  
   * To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
   * 
   * ```
   * ./config.sh remove --token TOKEN
   * ```
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
  **/
  actionsCreateRemoveTokenForRepo(
    req: operations.ActionsCreateRemoveTokenForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateRemoveTokenForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateRemoveTokenForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/remove-token", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsCreateRemoveTokenForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.authenticationToken = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateSelfHostedRunnerGroupForOrg - Create a self-hosted runner group for an organization
   *
   * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
   * 
   * Creates a new self-hosted runner group for an organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
  **/
  actionsCreateSelfHostedRunnerGroupForOrg(
    req: operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups", req.pathParams);

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
        const res: operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runnerGroupsOrg = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsCreateWorkflowDispatch - Create a workflow dispatch event
   *
   * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
   * 
   * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
  **/
  actionsCreateWorkflowDispatch(
    req: operations.ActionsCreateWorkflowDispatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsCreateWorkflowDispatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsCreateWorkflowDispatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", req.pathParams);

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
        const res: operations.ActionsCreateWorkflowDispatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteArtifact - Delete an artifact
   *
   * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-an-artifact - API method documentation
  **/
  actionsDeleteArtifact(
    req: operations.ActionsDeleteArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteOrgSecret - Delete an organization secret
   *
   * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-an-organization-secret - API method documentation
  **/
  actionsDeleteOrgSecret(
    req: operations.ActionsDeleteOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteRepoSecret - Delete a repository secret
   *
   * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-repository-secret - API method documentation
  **/
  actionsDeleteRepoSecret(
    req: operations.ActionsDeleteRepoSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteRepoSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteRepoSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteRepoSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteSelfHostedRunnerFromOrg - Delete a self-hosted runner from an organization
   *
   * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
  **/
  actionsDeleteSelfHostedRunnerFromOrg(
    req: operations.ActionsDeleteSelfHostedRunnerFromOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteSelfHostedRunnerFromOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteSelfHostedRunnerFromOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteSelfHostedRunnerFromOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteSelfHostedRunnerFromRepo - Delete a self-hosted runner from a repository
   *
   * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
   * 
   * You must authenticate using an access token with the `repo`
   * scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
  **/
  actionsDeleteSelfHostedRunnerFromRepo(
    req: operations.ActionsDeleteSelfHostedRunnerFromRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteSelfHostedRunnerFromRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteSelfHostedRunnerFromRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteSelfHostedRunnerFromRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteSelfHostedRunnerGroupFromOrg - Delete a self-hosted runner group from an organization
   *
   * Deletes a self-hosted runner group for an organization.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
  **/
  actionsDeleteSelfHostedRunnerGroupFromOrg(
    req: operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteWorkflowRun - Delete a workflow run
   *
   * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
   * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
   * this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-workflow-run - API method documentation
  **/
  actionsDeleteWorkflowRun(
    req: operations.ActionsDeleteWorkflowRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteWorkflowRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteWorkflowRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteWorkflowRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDeleteWorkflowRunLogs - Delete workflow run logs
   *
   * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-workflow-run-logs - API method documentation
  **/
  actionsDeleteWorkflowRunLogs(
    req: operations.ActionsDeleteWorkflowRunLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDeleteWorkflowRunLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDeleteWorkflowRunLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDeleteWorkflowRunLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDisableSelectedRepositoryGithubActionsOrganization - Disable a selected repository for GitHub Actions in an organization
   *
   * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
  **/
  actionsDisableSelectedRepositoryGithubActionsOrganization(
    req: operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDisableWorkflow - Disable a workflow
   *
   * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#disable-a-workflow - API method documentation
  **/
  actionsDisableWorkflow(
    req: operations.ActionsDisableWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDisableWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDisableWorkflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDisableWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDownloadArtifact - Download an artifact
   *
   * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
   * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
   * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
   * GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-an-artifact - API method documentation
  **/
  actionsDownloadArtifact(
    req: operations.ActionsDownloadArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDownloadArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDownloadArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDownloadArtifactResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDownloadJobLogsForWorkflowRun - Download job logs for a workflow run
   *
   * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
   * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
   * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
   * have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
  **/
  actionsDownloadJobLogsForWorkflowRun(
    req: operations.ActionsDownloadJobLogsForWorkflowRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDownloadJobLogsForWorkflowRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDownloadJobLogsForWorkflowRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDownloadJobLogsForWorkflowRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsDownloadWorkflowRunLogs - Download workflow run logs
   *
   * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
   * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
   * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
   * the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-workflow-run-logs - API method documentation
  **/
  actionsDownloadWorkflowRunLogs(
    req: operations.ActionsDownloadWorkflowRunLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsDownloadWorkflowRunLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsDownloadWorkflowRunLogsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsDownloadWorkflowRunLogsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsEnableSelectedRepositoryGithubActionsOrganization - Enable a selected repository for GitHub Actions in an organization
   *
   * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
  **/
  actionsEnableSelectedRepositoryGithubActionsOrganization(
    req: operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsEnableWorkflow - Enable a workflow
   *
   * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#enable-a-workflow - API method documentation
  **/
  actionsEnableWorkflow(
    req: operations.ActionsEnableWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsEnableWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsEnableWorkflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsEnableWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetAllowedActionsOrganization - Get allowed actions for an organization
   *
   * Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-allowed-actions-for-an-organization - API method documentation
  **/
  actionsGetAllowedActionsOrganization(
    req: operations.ActionsGetAllowedActionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetAllowedActionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetAllowedActionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/selected-actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetAllowedActionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.selectedActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetAllowedActionsRepository - Get allowed actions for a repository
   *
   * Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-allowed-actions-for-a-repository - API method documentation
  **/
  actionsGetAllowedActionsRepository(
    req: operations.ActionsGetAllowedActionsRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetAllowedActionsRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetAllowedActionsRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions/selected-actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetAllowedActionsRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.selectedActions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetArtifact - Get an artifact
   *
   * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-artifact - API method documentation
  **/
  actionsGetArtifact(
    req: operations.ActionsGetArtifactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetArtifactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetArtifactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetArtifactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.artifact = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetGithubActionsPermissionsOrganization - Get GitHub Actions permissions for an organization
   *
   * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-github-actions-permissions-for-an-organization - API method documentation
  **/
  actionsGetGithubActionsPermissionsOrganization(
    req: operations.ActionsGetGithubActionsPermissionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetGithubActionsPermissionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetGithubActionsPermissionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetGithubActionsPermissionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsOrganizationPermissions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetGithubActionsPermissionsRepository - Get GitHub Actions permissions for a repository
   *
   * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.
   * 
   * You must authenticate using an access token with the `repo` scope to use this
   * endpoint. GitHub Apps must have the `administration` repository permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-github-actions-permissions-for-a-repository - API method documentation
  **/
  actionsGetGithubActionsPermissionsRepository(
    req: operations.ActionsGetGithubActionsPermissionsRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetGithubActionsPermissionsRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetGithubActionsPermissionsRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetGithubActionsPermissionsRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsRepositoryPermissions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetJobForWorkflowRun - Get a job for a workflow run
   *
   * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
  **/
  actionsGetJobForWorkflowRun(
    req: operations.ActionsGetJobForWorkflowRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetJobForWorkflowRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetJobForWorkflowRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/jobs/{job_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetJobForWorkflowRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.job = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetOrgPublicKey - Get an organization public key
   *
   * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-public-key - API method documentation
  **/
  actionsGetOrgPublicKey(
    req: operations.ActionsGetOrgPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetOrgPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetOrgPublicKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/public-key", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetOrgPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetOrgSecret - Get an organization secret
   *
   * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-secret - API method documentation
  **/
  actionsGetOrgSecret(
    req: operations.ActionsGetOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.organizationActionsSecret = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetRepoPublicKey - Get a repository public key
   *
   * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-repository-public-key - API method documentation
  **/
  actionsGetRepoPublicKey(
    req: operations.ActionsGetRepoPublicKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetRepoPublicKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetRepoPublicKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/public-key", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetRepoPublicKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsPublicKey = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetRepoSecret - Get a repository secret
   *
   * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-repository-secret - API method documentation
  **/
  actionsGetRepoSecret(
    req: operations.ActionsGetRepoSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetRepoSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetRepoSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetRepoSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsSecret = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetSelfHostedRunnerForOrg - Get a self-hosted runner for an organization
   *
   * Gets a specific self-hosted runner configured in an organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
  **/
  actionsGetSelfHostedRunnerForOrg(
    req: operations.ActionsGetSelfHostedRunnerForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetSelfHostedRunnerForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetSelfHostedRunnerForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetSelfHostedRunnerForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runner = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetSelfHostedRunnerForRepo - Get a self-hosted runner for a repository
   *
   * Gets a specific self-hosted runner configured in a repository.
   * 
   * You must authenticate using an access token with the `repo` scope to use this
   * endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
  **/
  actionsGetSelfHostedRunnerForRepo(
    req: operations.ActionsGetSelfHostedRunnerForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetSelfHostedRunnerForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetSelfHostedRunnerForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetSelfHostedRunnerForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runner = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetSelfHostedRunnerGroupForOrg - Get a self-hosted runner group for an organization
   *
   * Gets a specific self-hosted runner group for an organization.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
  **/
  actionsGetSelfHostedRunnerGroupForOrg(
    req: operations.ActionsGetSelfHostedRunnerGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetSelfHostedRunnerGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetSelfHostedRunnerGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetSelfHostedRunnerGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runnerGroupsOrg = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetWorkflow - Get a workflow
   *
   * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-workflow - API method documentation
  **/
  actionsGetWorkflow(
    req: operations.ActionsGetWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetWorkflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.workflow = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsGetWorkflowRun - Get a workflow run
   *
   * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-workflow-run - API method documentation
  **/
  actionsGetWorkflowRun(
    req: operations.ActionsGetWorkflowRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsGetWorkflowRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsGetWorkflowRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsGetWorkflowRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.workflowRun = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListArtifactsForRepo - List artifacts for a repository
   *
   * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
  **/
  actionsListArtifactsForRepo(
    req: operations.ActionsListArtifactsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListArtifactsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListArtifactsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/artifacts", req.pathParams);
    
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
        const res: operations.ActionsListArtifactsForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListArtifactsForRepo200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListJobsForWorkflowRun - List jobs for a workflow run
   *
   * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
  **/
  actionsListJobsForWorkflowRun(
    req: operations.ActionsListJobsForWorkflowRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListJobsForWorkflowRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListJobsForWorkflowRunRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", req.pathParams);
    
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
        const res: operations.ActionsListJobsForWorkflowRunResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListJobsForWorkflowRun200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListOrgSecrets - List organization secrets
   *
   * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-organization-secrets - API method documentation
  **/
  actionsListOrgSecrets(
    req: operations.ActionsListOrgSecretsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListOrgSecretsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListOrgSecretsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets", req.pathParams);
    
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
        const res: operations.ActionsListOrgSecretsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListOrgSecrets200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListRepoAccessToSelfHostedRunnerGroupInOrg - List repository access to a self-hosted runner group in an organization
   *
   * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
   * 
   * Lists the repositories with access to a self-hosted runner group configured in an organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
  **/
  actionsListRepoAccessToSelfHostedRunnerGroupInOrg(
    req: operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", req.pathParams);
    
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
        const res: operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListRepoSecrets - List repository secrets
   *
   * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-secrets - API method documentation
  **/
  actionsListRepoSecrets(
    req: operations.ActionsListRepoSecretsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListRepoSecretsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListRepoSecretsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/secrets", req.pathParams);
    
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
        const res: operations.ActionsListRepoSecretsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListRepoSecrets200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListRepoWorkflows - List repository workflows
   *
   * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-workflows - API method documentation
  **/
  actionsListRepoWorkflows(
    req: operations.ActionsListRepoWorkflowsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListRepoWorkflowsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListRepoWorkflowsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows", req.pathParams);
    
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
        const res: operations.ActionsListRepoWorkflowsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListRepoWorkflows200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListRunnerApplicationsForOrg - List runner applications for an organization
   *
   * Lists binaries for the runner application that you can download and run.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
  **/
  actionsListRunnerApplicationsForOrg(
    req: operations.ActionsListRunnerApplicationsForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListRunnerApplicationsForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListRunnerApplicationsForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners/downloads", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsListRunnerApplicationsForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runnerApplications = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListRunnerApplicationsForRepo - List runner applications for a repository
   *
   * Lists binaries for the runner application that you can download and run.
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
  **/
  actionsListRunnerApplicationsForRepo(
    req: operations.ActionsListRunnerApplicationsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListRunnerApplicationsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListRunnerApplicationsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners/downloads", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsListRunnerApplicationsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runnerApplications = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListSelectedReposForOrgSecret - List selected repositories for an organization secret
   *
   * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
  **/
  actionsListSelectedReposForOrgSecret(
    req: operations.ActionsListSelectedReposForOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListSelectedReposForOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListSelectedReposForOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories", req.pathParams);
    
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
        const res: operations.ActionsListSelectedReposForOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListSelectedReposForOrgSecret200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListSelectedRepositoriesEnabledGithubActionsOrganization - List selected repositories enabled for GitHub Actions in an organization
   *
   * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
  **/
  actionsListSelectedRepositoriesEnabledGithubActionsOrganization(
    req: operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories", req.pathParams);
    
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
        const res: operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListSelfHostedRunnerGroupsForOrg - List self-hosted runner groups for an organization
   *
   * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
  **/
  actionsListSelfHostedRunnerGroupsForOrg(
    req: operations.ActionsListSelfHostedRunnerGroupsForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListSelfHostedRunnerGroupsForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListSelfHostedRunnerGroupsForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups", req.pathParams);
    
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
        const res: operations.ActionsListSelfHostedRunnerGroupsForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListSelfHostedRunnerGroupsForOrg200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListSelfHostedRunnersForOrg - List self-hosted runners for an organization
   *
   * Lists all self-hosted runners configured in an organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
  **/
  actionsListSelfHostedRunnersForOrg(
    req: operations.ActionsListSelfHostedRunnersForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListSelfHostedRunnersForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListSelfHostedRunnersForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runners", req.pathParams);
    
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
        const res: operations.ActionsListSelfHostedRunnersForOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListSelfHostedRunnersForOrg200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListSelfHostedRunnersForRepo - List self-hosted runners for a repository
   *
   * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
  **/
  actionsListSelfHostedRunnersForRepo(
    req: operations.ActionsListSelfHostedRunnersForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListSelfHostedRunnersForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListSelfHostedRunnersForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runners", req.pathParams);
    
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
        const res: operations.ActionsListSelfHostedRunnersForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListSelfHostedRunnersForRepo200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListSelfHostedRunnersInGroupForOrg - List self-hosted runners in a group for an organization
   *
   * Lists self-hosted runners that are in a specific organization group.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
  **/
  actionsListSelfHostedRunnersInGroupForOrg(
    req: operations.ActionsListSelfHostedRunnersInGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListSelfHostedRunnersInGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListSelfHostedRunnersInGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);
    
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
        const res: operations.ActionsListSelfHostedRunnersInGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListSelfHostedRunnersInGroupForOrg200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListWorkflowRunArtifacts - List workflow run artifacts
   *
   * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-run-artifacts - API method documentation
  **/
  actionsListWorkflowRunArtifacts(
    req: operations.ActionsListWorkflowRunArtifactsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListWorkflowRunArtifactsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListWorkflowRunArtifactsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", req.pathParams);
    
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
        const res: operations.ActionsListWorkflowRunArtifactsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListWorkflowRunArtifacts200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListWorkflowRuns - List workflow runs
   *
   * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
   * 
   * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-runs - API method documentation
  **/
  actionsListWorkflowRuns(
    req: operations.ActionsListWorkflowRunsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListWorkflowRunsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListWorkflowRunsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", req.pathParams);
    
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
        const res: operations.ActionsListWorkflowRunsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListWorkflowRuns200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsListWorkflowRunsForRepo - List workflow runs for a repository
   *
   * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
   * 
   * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
  **/
  actionsListWorkflowRunsForRepo(
    req: operations.ActionsListWorkflowRunsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsListWorkflowRunsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsListWorkflowRunsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs", req.pathParams);
    
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
        const res: operations.ActionsListWorkflowRunsForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsListWorkflowRunsForRepo200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsReRunWorkflow - Re-run a workflow
   *
   * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#re-run-a-workflow - API method documentation
  **/
  actionsReRunWorkflow(
    req: operations.ActionsReRunWorkflowRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsReRunWorkflowResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsReRunWorkflowRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsReRunWorkflowResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.actionsReRunWorkflow201ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg - Remove repository access to a self-hosted runner group in an organization
   *
   * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
  **/
  actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(
    req: operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsRemoveSelectedRepoFromOrgSecret - Remove selected repository from an organization secret
   *
   * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
  **/
  actionsRemoveSelectedRepoFromOrgSecret(
    req: operations.ActionsRemoveSelectedRepoFromOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsRemoveSelectedRepoFromOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsRemoveSelectedRepoFromOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsRemoveSelectedRepoFromOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 409:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsRemoveSelfHostedRunnerFromGroupForOrg - Remove a self-hosted runner from a group for an organization
   *
   * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
  **/
  actionsRemoveSelfHostedRunnerFromGroupForOrg(
    req: operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetAllowedActionsOrganization - Set allowed actions for an organization
   *
   * Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
   * 
   * If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.
   * 
   * To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-allowed-actions-for-an-organization - API method documentation
  **/
  actionsSetAllowedActionsOrganization(
    req: operations.ActionsSetAllowedActionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetAllowedActionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetAllowedActionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/selected-actions", req.pathParams);

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
        const res: operations.ActionsSetAllowedActionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetAllowedActionsRepository - Set allowed actions for a repository
   *
   * Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
   * 
   * If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.
   * 
   * To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-allowed-actions-for-a-repository - API method documentation
  **/
  actionsSetAllowedActionsRepository(
    req: operations.ActionsSetAllowedActionsRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetAllowedActionsRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetAllowedActionsRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions/selected-actions", req.pathParams);

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
        const res: operations.ActionsSetAllowedActionsRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetGithubActionsPermissionsOrganization - Set GitHub Actions permissions for an organization
   *
   * Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
   * 
   * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-github-actions-permissions-for-an-organization - API method documentation
  **/
  actionsSetGithubActionsPermissionsOrganization(
    req: operations.ActionsSetGithubActionsPermissionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetGithubActionsPermissionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetGithubActionsPermissionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions", req.pathParams);

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
        const res: operations.ActionsSetGithubActionsPermissionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetGithubActionsPermissionsRepository - Set GitHub Actions permissions for a repository
   *
   * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.
   * 
   * If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.
   * 
   * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-github-actions-permissions-for-a-repository - API method documentation
  **/
  actionsSetGithubActionsPermissionsRepository(
    req: operations.ActionsSetGithubActionsPermissionsRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetGithubActionsPermissionsRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetGithubActionsPermissionsRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/actions/permissions", req.pathParams);

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
        const res: operations.ActionsSetGithubActionsPermissionsRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetRepoAccessToSelfHostedRunnerGroupInOrg - Set repository access for a self-hosted runner group in an organization
   *
   * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
  **/
  actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(
    req: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", req.pathParams);

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
        const res: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetSelectedReposForOrgSecret - Set selected repositories for an organization secret
   *
   * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
  **/
  actionsSetSelectedReposForOrgSecret(
    req: operations.ActionsSetSelectedReposForOrgSecretRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetSelectedReposForOrgSecretResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetSelectedReposForOrgSecretRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/secrets/{secret_name}/repositories", req.pathParams);

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
        const res: operations.ActionsSetSelectedReposForOrgSecretResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetSelectedRepositoriesEnabledGithubActionsOrganization - Set selected repositories enabled for GitHub Actions in an organization
   *
   * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
   * 
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
  **/
  actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(
    req: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/permissions/repositories", req.pathParams);

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
        const res: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsSetSelfHostedRunnersInGroupForOrg - Set self-hosted runners in a group for an organization
   *
   * Replaces the list of self-hosted runners that are part of an organization runner group.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
  **/
  actionsSetSelfHostedRunnersInGroupForOrg(
    req: operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", req.pathParams);

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
        const res: operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * actionsUpdateSelfHostedRunnerGroupForOrg - Update a self-hosted runner group for an organization
   *
   * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
   * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
  **/
  actionsUpdateSelfHostedRunnerGroupForOrg(
    req: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/actions/runner-groups/{runner_group_id}", req.pathParams);

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
        const res: operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.runnerGroupsOrg = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
