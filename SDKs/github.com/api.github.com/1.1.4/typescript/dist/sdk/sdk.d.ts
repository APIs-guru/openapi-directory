import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.github.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * actionsAddRepoAccessToSelfHostedRunnerGroupInOrg - Add repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     *
     * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsAddSelectedRepoToOrgSecret - Add selected repository to an organization secret
     *
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
    **/
    actionsAddSelectedRepoToOrgSecret(req: operations.ActionsAddSelectedRepoToOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelectedRepoToOrgSecretResponse>;
    /**
     * actionsAddSelfHostedRunnerToGroupForOrg - Add a self-hosted runner to a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     *
     * Adds a self-hosted runner to a runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
    **/
    actionsAddSelfHostedRunnerToGroupForOrg(req: operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse>;
    /**
     * actionsCancelWorkflowRun - Cancel a workflow run
     *
     * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#cancel-a-workflow-run - API method documentation
    **/
    actionsCancelWorkflowRun(req: operations.ActionsCancelWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCancelWorkflowRunResponse>;
    /**
     * actionsCreateOrUpdateEnvironmentSecret - Create or update an environment secret
     *
     * Creates or updates an environment secret with an encrypted value. Encrypt your secret using
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
     * https://docs.github.com/rest/reference/actions#create-or-update-an-environment-secret - API method documentation
    **/
    actionsCreateOrUpdateEnvironmentSecret(req: operations.ActionsCreateOrUpdateEnvironmentSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrUpdateEnvironmentSecretResponse>;
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
     * https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret - API method documentation
    **/
    actionsCreateOrUpdateOrgSecret(req: operations.ActionsCreateOrUpdateOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrUpdateOrgSecretResponse>;
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
     * https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
    **/
    actionsCreateOrUpdateRepoSecret(req: operations.ActionsCreateOrUpdateRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrUpdateRepoSecretResponse>;
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
     * https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
    **/
    actionsCreateRegistrationTokenForOrg(req: operations.ActionsCreateRegistrationTokenForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRegistrationTokenForOrgResponse>;
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
     * https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
    **/
    actionsCreateRegistrationTokenForRepo(req: operations.ActionsCreateRegistrationTokenForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRegistrationTokenForRepoResponse>;
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
     * https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
    **/
    actionsCreateRemoveTokenForOrg(req: operations.ActionsCreateRemoveTokenForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRemoveTokenForOrgResponse>;
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
     * https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
    **/
    actionsCreateRemoveTokenForRepo(req: operations.ActionsCreateRemoveTokenForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRemoveTokenForRepoResponse>;
    /**
     * actionsCreateSelfHostedRunnerGroupForOrg - Create a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Creates a new self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    actionsCreateSelfHostedRunnerGroupForOrg(req: operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse>;
    /**
     * actionsCreateWorkflowDispatch - Create a workflow dispatch event
     *
     * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
     *
     * https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
    **/
    actionsCreateWorkflowDispatch(req: operations.ActionsCreateWorkflowDispatchRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateWorkflowDispatchResponse>;
    /**
     * actionsDeleteArtifact - Delete an artifact
     *
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-an-artifact - API method documentation
    **/
    actionsDeleteArtifact(req: operations.ActionsDeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteArtifactResponse>;
    /**
     * actionsDeleteEnvironmentSecret - Delete an environment secret
     *
     * Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-an-environment-secret - API method documentation
    **/
    actionsDeleteEnvironmentSecret(req: operations.ActionsDeleteEnvironmentSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteEnvironmentSecretResponse>;
    /**
     * actionsDeleteOrgSecret - Delete an organization secret
     *
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-an-organization-secret - API method documentation
    **/
    actionsDeleteOrgSecret(req: operations.ActionsDeleteOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteOrgSecretResponse>;
    /**
     * actionsDeleteRepoSecret - Delete a repository secret
     *
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-repository-secret - API method documentation
    **/
    actionsDeleteRepoSecret(req: operations.ActionsDeleteRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteRepoSecretResponse>;
    /**
     * actionsDeleteSelfHostedRunnerFromOrg - Delete a self-hosted runner from an organization
     *
     * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
    **/
    actionsDeleteSelfHostedRunnerFromOrg(req: operations.ActionsDeleteSelfHostedRunnerFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerFromOrgResponse>;
    /**
     * actionsDeleteSelfHostedRunnerFromRepo - Delete a self-hosted runner from a repository
     *
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `repo`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
    **/
    actionsDeleteSelfHostedRunnerFromRepo(req: operations.ActionsDeleteSelfHostedRunnerFromRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerFromRepoResponse>;
    /**
     * actionsDeleteSelfHostedRunnerGroupFromOrg - Delete a self-hosted runner group from an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Deletes a self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
    **/
    actionsDeleteSelfHostedRunnerGroupFromOrg(req: operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse>;
    /**
     * actionsDeleteWorkflowRun - Delete a workflow run
     *
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
     * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
     * this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-workflow-run - API method documentation
    **/
    actionsDeleteWorkflowRun(req: operations.ActionsDeleteWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteWorkflowRunResponse>;
    /**
     * actionsDeleteWorkflowRunLogs - Delete workflow run logs
     *
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-workflow-run-logs - API method documentation
    **/
    actionsDeleteWorkflowRunLogs(req: operations.ActionsDeleteWorkflowRunLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteWorkflowRunLogsResponse>;
    /**
     * actionsDisableSelectedRepositoryGithubActionsOrganization - Disable a selected repository for GitHub Actions in an organization
     *
     * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    actionsDisableSelectedRepositoryGithubActionsOrganization(req: operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse>;
    /**
     * actionsDisableWorkflow - Disable a workflow
     *
     * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#disable-a-workflow - API method documentation
    **/
    actionsDisableWorkflow(req: operations.ActionsDisableWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDisableWorkflowResponse>;
    /**
     * actionsDownloadArtifact - Download an artifact
     *
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
     * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
     * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#download-an-artifact - API method documentation
    **/
    actionsDownloadArtifact(req: operations.ActionsDownloadArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadArtifactResponse>;
    /**
     * actionsDownloadJobLogsForWorkflowRun - Download job logs for a workflow run
     *
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
     * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
     * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
     * have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
    **/
    actionsDownloadJobLogsForWorkflowRun(req: operations.ActionsDownloadJobLogsForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadJobLogsForWorkflowRunResponse>;
    /**
     * actionsDownloadWorkflowRunLogs - Download workflow run logs
     *
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
     * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
     * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
     * the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#download-workflow-run-logs - API method documentation
    **/
    actionsDownloadWorkflowRunLogs(req: operations.ActionsDownloadWorkflowRunLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadWorkflowRunLogsResponse>;
    /**
     * actionsEnableSelectedRepositoryGithubActionsOrganization - Enable a selected repository for GitHub Actions in an organization
     *
     * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    actionsEnableSelectedRepositoryGithubActionsOrganization(req: operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse>;
    /**
     * actionsEnableWorkflow - Enable a workflow
     *
     * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#enable-a-workflow - API method documentation
    **/
    actionsEnableWorkflow(req: operations.ActionsEnableWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsEnableWorkflowResponse>;
    /**
     * actionsGetAllowedActionsOrganization - Get allowed actions for an organization
     *
     * Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization - API method documentation
    **/
    actionsGetAllowedActionsOrganization(req: operations.ActionsGetAllowedActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetAllowedActionsOrganizationResponse>;
    /**
     * actionsGetAllowedActionsRepository - Get allowed actions for a repository
     *
     * Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository - API method documentation
    **/
    actionsGetAllowedActionsRepository(req: operations.ActionsGetAllowedActionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetAllowedActionsRepositoryResponse>;
    /**
     * actionsGetArtifact - Get an artifact
     *
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-artifact - API method documentation
    **/
    actionsGetArtifact(req: operations.ActionsGetArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetArtifactResponse>;
    /**
     * actionsGetEnvironmentPublicKey - Get an environment public key
     *
     * Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-environment-public-key - API method documentation
    **/
    actionsGetEnvironmentPublicKey(req: operations.ActionsGetEnvironmentPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetEnvironmentPublicKeyResponse>;
    /**
     * actionsGetEnvironmentSecret - Get an environment secret
     *
     * Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-environment-secret - API method documentation
    **/
    actionsGetEnvironmentSecret(req: operations.ActionsGetEnvironmentSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetEnvironmentSecretResponse>;
    /**
     * actionsGetGithubActionsPermissionsOrganization - Get GitHub Actions permissions for an organization
     *
     * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization - API method documentation
    **/
    actionsGetGithubActionsPermissionsOrganization(req: operations.ActionsGetGithubActionsPermissionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsPermissionsOrganizationResponse>;
    /**
     * actionsGetGithubActionsPermissionsRepository - Get GitHub Actions permissions for a repository
     *
     * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository - API method documentation
    **/
    actionsGetGithubActionsPermissionsRepository(req: operations.ActionsGetGithubActionsPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsPermissionsRepositoryResponse>;
    /**
     * actionsGetJobForWorkflowRun - Get a job for a workflow run
     *
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
    **/
    actionsGetJobForWorkflowRun(req: operations.ActionsGetJobForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetJobForWorkflowRunResponse>;
    /**
     * actionsGetOrgPublicKey - Get an organization public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-organization-public-key - API method documentation
    **/
    actionsGetOrgPublicKey(req: operations.ActionsGetOrgPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgPublicKeyResponse>;
    /**
     * actionsGetOrgSecret - Get an organization secret
     *
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-organization-secret - API method documentation
    **/
    actionsGetOrgSecret(req: operations.ActionsGetOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgSecretResponse>;
    /**
     * actionsGetPendingDeploymentsForRun - Get pending deployments for a workflow run
     *
     * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-pending-deployments-for-a-workflow-run - API method documentation
    **/
    actionsGetPendingDeploymentsForRun(req: operations.ActionsGetPendingDeploymentsForRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetPendingDeploymentsForRunResponse>;
    /**
     * actionsGetRepoPublicKey - Get a repository public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-repository-public-key - API method documentation
    **/
    actionsGetRepoPublicKey(req: operations.ActionsGetRepoPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoPublicKeyResponse>;
    /**
     * actionsGetRepoSecret - Get a repository secret
     *
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-repository-secret - API method documentation
    **/
    actionsGetRepoSecret(req: operations.ActionsGetRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoSecretResponse>;
    /**
     * actionsGetReviewsForRun - Get the review history for a workflow run
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run - API method documentation
    **/
    actionsGetReviewsForRun(req: operations.ActionsGetReviewsForRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetReviewsForRunResponse>;
    /**
     * actionsGetSelfHostedRunnerForOrg - Get a self-hosted runner for an organization
     *
     * Gets a specific self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
    **/
    actionsGetSelfHostedRunnerForOrg(req: operations.ActionsGetSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerForOrgResponse>;
    /**
     * actionsGetSelfHostedRunnerForRepo - Get a self-hosted runner for a repository
     *
     * Gets a specific self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
    **/
    actionsGetSelfHostedRunnerForRepo(req: operations.ActionsGetSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerForRepoResponse>;
    /**
     * actionsGetSelfHostedRunnerGroupForOrg - Get a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Gets a specific self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    actionsGetSelfHostedRunnerGroupForOrg(req: operations.ActionsGetSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerGroupForOrgResponse>;
    /**
     * actionsGetWorkflow - Get a workflow
     *
     * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-workflow - API method documentation
    **/
    actionsGetWorkflow(req: operations.ActionsGetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowResponse>;
    /**
     * actionsGetWorkflowRun - Get a workflow run
     *
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-workflow-run - API method documentation
    **/
    actionsGetWorkflowRun(req: operations.ActionsGetWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowRunResponse>;
    /**
     * actionsGetWorkflowRunUsage - Get workflow run usage
     *
     * Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-workflow-run-usage - API method documentation
    **/
    actionsGetWorkflowRunUsage(req: operations.ActionsGetWorkflowRunUsageRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowRunUsageResponse>;
    /**
     * actionsGetWorkflowUsage - Get workflow usage
     *
     * Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-workflow-usage - API method documentation
    **/
    actionsGetWorkflowUsage(req: operations.ActionsGetWorkflowUsageRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowUsageResponse>;
    /**
     * actionsListArtifactsForRepo - List artifacts for a repository
     *
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
    **/
    actionsListArtifactsForRepo(req: operations.ActionsListArtifactsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListArtifactsForRepoResponse>;
    /**
     * actionsListEnvironmentSecrets - List environment secrets
     *
     * Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-environment-secrets - API method documentation
    **/
    actionsListEnvironmentSecrets(req: operations.ActionsListEnvironmentSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListEnvironmentSecretsResponse>;
    /**
     * actionsListJobsForWorkflowRun - List jobs for a workflow run
     *
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     *
     * https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
    **/
    actionsListJobsForWorkflowRun(req: operations.ActionsListJobsForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListJobsForWorkflowRunResponse>;
    /**
     * actionsListOrgSecrets - List organization secrets
     *
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-organization-secrets - API method documentation
    **/
    actionsListOrgSecrets(req: operations.ActionsListOrgSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListOrgSecretsResponse>;
    /**
     * actionsListRepoAccessToSelfHostedRunnerGroupInOrg - List repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Lists the repositories with access to a self-hosted runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsListRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsListRepoSecrets - List repository secrets
     *
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-repository-secrets - API method documentation
    **/
    actionsListRepoSecrets(req: operations.ActionsListRepoSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoSecretsResponse>;
    /**
     * actionsListRepoWorkflows - List repository workflows
     *
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-repository-workflows - API method documentation
    **/
    actionsListRepoWorkflows(req: operations.ActionsListRepoWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoWorkflowsResponse>;
    /**
     * actionsListRunnerApplicationsForOrg - List runner applications for an organization
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
    **/
    actionsListRunnerApplicationsForOrg(req: operations.ActionsListRunnerApplicationsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRunnerApplicationsForOrgResponse>;
    /**
     * actionsListRunnerApplicationsForRepo - List runner applications for a repository
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
    **/
    actionsListRunnerApplicationsForRepo(req: operations.ActionsListRunnerApplicationsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRunnerApplicationsForRepoResponse>;
    /**
     * actionsListSelectedReposForOrgSecret - List selected repositories for an organization secret
     *
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
    **/
    actionsListSelectedReposForOrgSecret(req: operations.ActionsListSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedReposForOrgSecretResponse>;
    /**
     * actionsListSelectedRepositoriesEnabledGithubActionsOrganization - List selected repositories enabled for GitHub Actions in an organization
     *
     * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    actionsListSelectedRepositoriesEnabledGithubActionsOrganization(req: operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse>;
    /**
     * actionsListSelfHostedRunnerGroupsForOrg - List self-hosted runner groups for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
    **/
    actionsListSelfHostedRunnerGroupsForOrg(req: operations.ActionsListSelfHostedRunnerGroupsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnerGroupsForOrgResponse>;
    /**
     * actionsListSelfHostedRunnersForOrg - List self-hosted runners for an organization
     *
     * Lists all self-hosted runners configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
    **/
    actionsListSelfHostedRunnersForOrg(req: operations.ActionsListSelfHostedRunnersForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersForOrgResponse>;
    /**
     * actionsListSelfHostedRunnersForRepo - List self-hosted runners for a repository
     *
     * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
    **/
    actionsListSelfHostedRunnersForRepo(req: operations.ActionsListSelfHostedRunnersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersForRepoResponse>;
    /**
     * actionsListSelfHostedRunnersInGroupForOrg - List self-hosted runners in a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Lists self-hosted runners that are in a specific organization group.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    actionsListSelfHostedRunnersInGroupForOrg(req: operations.ActionsListSelfHostedRunnersInGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersInGroupForOrgResponse>;
    /**
     * actionsListWorkflowRunArtifacts - List workflow run artifacts
     *
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts - API method documentation
    **/
    actionsListWorkflowRunArtifacts(req: operations.ActionsListWorkflowRunArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunArtifactsResponse>;
    /**
     * actionsListWorkflowRuns - List workflow runs
     *
     * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     *
     * https://docs.github.com/rest/reference/actions#list-workflow-runs - API method documentation
    **/
    actionsListWorkflowRuns(req: operations.ActionsListWorkflowRunsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunsResponse>;
    /**
     * actionsListWorkflowRunsForRepo - List workflow runs for a repository
     *
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
    **/
    actionsListWorkflowRunsForRepo(req: operations.ActionsListWorkflowRunsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunsForRepoResponse>;
    /**
     * actionsReRunWorkflow - Re-run a workflow
     *
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#re-run-a-workflow - API method documentation
    **/
    actionsReRunWorkflow(req: operations.ActionsReRunWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReRunWorkflowResponse>;
    /**
     * actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg - Remove repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     *
     * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsRemoveSelectedRepoFromOrgSecret - Remove selected repository from an organization secret
     *
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
    **/
    actionsRemoveSelectedRepoFromOrgSecret(req: operations.ActionsRemoveSelectedRepoFromOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelectedRepoFromOrgSecretResponse>;
    /**
     * actionsRemoveSelfHostedRunnerFromGroupForOrg - Remove a self-hosted runner from a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     *
     * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
    **/
    actionsRemoveSelfHostedRunnerFromGroupForOrg(req: operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse>;
    /**
     * actionsReviewPendingDeploymentsForRun - Review pending deployments for a workflow run
     *
     * Approve or reject pending deployments that are waiting on approval by a required reviewer.
     *
     * Anyone with read access to the repository contents and deployments can use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#review-pending-deployments-for-a-workflow-run - API method documentation
    **/
    actionsReviewPendingDeploymentsForRun(req: operations.ActionsReviewPendingDeploymentsForRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReviewPendingDeploymentsForRunResponse>;
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
     * https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization - API method documentation
    **/
    actionsSetAllowedActionsOrganization(req: operations.ActionsSetAllowedActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetAllowedActionsOrganizationResponse>;
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
     * https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository - API method documentation
    **/
    actionsSetAllowedActionsRepository(req: operations.ActionsSetAllowedActionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetAllowedActionsRepositoryResponse>;
    /**
     * actionsSetGithubActionsPermissionsOrganization - Set GitHub Actions permissions for an organization
     *
     * Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization - API method documentation
    **/
    actionsSetGithubActionsPermissionsOrganization(req: operations.ActionsSetGithubActionsPermissionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsPermissionsOrganizationResponse>;
    /**
     * actionsSetGithubActionsPermissionsRepository - Set GitHub Actions permissions for a repository
     *
     * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.
     *
     * If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository - API method documentation
    **/
    actionsSetGithubActionsPermissionsRepository(req: operations.ActionsSetGithubActionsPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsPermissionsRepositoryResponse>;
    /**
     * actionsSetRepoAccessToSelfHostedRunnerGroupInOrg - Set repository access for a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsSetSelectedReposForOrgSecret - Set selected repositories for an organization secret
     *
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
    **/
    actionsSetSelectedReposForOrgSecret(req: operations.ActionsSetSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedReposForOrgSecretResponse>;
    /**
     * actionsSetSelectedRepositoriesEnabledGithubActionsOrganization - Set selected repositories enabled for GitHub Actions in an organization
     *
     * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(req: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse>;
    /**
     * actionsSetSelfHostedRunnersInGroupForOrg - Set self-hosted runners in a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Replaces the list of self-hosted runners that are part of an organization runner group.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    actionsSetSelfHostedRunnersInGroupForOrg(req: operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse>;
    /**
     * actionsUpdateSelfHostedRunnerGroupForOrg - Update a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    actionsUpdateSelfHostedRunnerGroupForOrg(req: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse>;
    /**
     * activityCheckRepoIsStarredByAuthenticatedUser - Check if a repository is starred by the authenticated user
     *
     * https://docs.github.com/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user - API method documentation
    **/
    activityCheckRepoIsStarredByAuthenticatedUser(req: operations.ActivityCheckRepoIsStarredByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityCheckRepoIsStarredByAuthenticatedUserResponse>;
    /**
     * activityDeleteRepoSubscription - Delete a repository subscription
     *
     * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/rest/reference/activity#set-a-repository-subscription).
     *
     * https://docs.github.com/rest/reference/activity#delete-a-repository-subscription - API method documentation
    **/
    activityDeleteRepoSubscription(req: operations.ActivityDeleteRepoSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivityDeleteRepoSubscriptionResponse>;
    /**
     * activityDeleteThreadSubscription - Delete a thread subscription
     *
     * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
     *
     * https://docs.github.com/rest/reference/activity#delete-a-thread-subscription - API method documentation
    **/
    activityDeleteThreadSubscription(req: operations.ActivityDeleteThreadSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivityDeleteThreadSubscriptionResponse>;
    /**
     * activityGetFeeds - Get feeds
     *
     * GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
     *
     * *   **Timeline**: The GitHub global public timeline
     * *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia)
     * *   **Current user public**: The public timeline for the authenticated user
     * *   **Current user**: The private timeline for the authenticated user
     * *   **Current user actor**: The private timeline for activity created by the authenticated user
     * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
     * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
     *
     * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
     *
     * https://docs.github.com/rest/reference/activity#get-feeds - API method documentation
    **/
    activityGetFeeds(config?: AxiosRequestConfig): Promise<operations.ActivityGetFeedsResponse>;
    /**
     * activityGetRepoSubscription - Get a repository subscription
     *
     * https://docs.github.com/rest/reference/activity#get-a-repository-subscription - API method documentation
    **/
    activityGetRepoSubscription(req: operations.ActivityGetRepoSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivityGetRepoSubscriptionResponse>;
    /**
     * activityGetThread - Get a thread
     *
     * https://docs.github.com/rest/reference/activity#get-a-thread - API method documentation
    **/
    activityGetThread(req: operations.ActivityGetThreadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityGetThreadResponse>;
    /**
     * activityGetThreadSubscriptionForAuthenticatedUser - Get a thread subscription for the authenticated user
     *
     * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/reference/activity#get-a-repository-subscription).
     *
     * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
     *
     * https://docs.github.com/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user - API method documentation
    **/
    activityGetThreadSubscriptionForAuthenticatedUser(req: operations.ActivityGetThreadSubscriptionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityGetThreadSubscriptionForAuthenticatedUserResponse>;
    /**
     * activityListEventsForAuthenticatedUser - List events for the authenticated user
     *
     * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
     *
     * https://docs.github.com/rest/reference/activity#list-events-for-the-authenticated-user - API method documentation
    **/
    activityListEventsForAuthenticatedUser(req: operations.ActivityListEventsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListEventsForAuthenticatedUserResponse>;
    /**
     * activityListNotificationsForAuthenticatedUser - List notifications for the authenticated user
     *
     * List all notifications for the current user, sorted by most recently updated.
     *
     * https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user - API method documentation
    **/
    activityListNotificationsForAuthenticatedUser(req: operations.ActivityListNotificationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListNotificationsForAuthenticatedUserResponse>;
    /**
     * activityListOrgEventsForAuthenticatedUser - List organization events for the authenticated user
     *
     * This is the user's organization dashboard. You must be authenticated as the user to view this.
     *
     * https://docs.github.com/rest/reference/activity#list-organization-events-for-the-authenticated-user - API method documentation
    **/
    activityListOrgEventsForAuthenticatedUser(req: operations.ActivityListOrgEventsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListOrgEventsForAuthenticatedUserResponse>;
    /**
     * activityListPublicEvents - List public events
     *
     * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
     *
     * https://docs.github.com/rest/reference/activity#list-public-events - API method documentation
    **/
    activityListPublicEvents(req: operations.ActivityListPublicEventsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicEventsResponse>;
    /**
     * activityListPublicEventsForRepoNetwork - List public events for a network of repositories
     *
     * https://docs.github.com/rest/reference/activity#list-public-events-for-a-network-of-repositories - API method documentation
    **/
    activityListPublicEventsForRepoNetwork(req: operations.ActivityListPublicEventsForRepoNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicEventsForRepoNetworkResponse>;
    /**
     * activityListPublicEventsForUser - List public events for a user
     *
     * https://docs.github.com/rest/reference/activity#list-public-events-for-a-user - API method documentation
    **/
    activityListPublicEventsForUser(req: operations.ActivityListPublicEventsForUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicEventsForUserResponse>;
    /**
     * activityListPublicOrgEvents - List public organization events
     *
     * https://docs.github.com/rest/reference/activity#list-public-organization-events - API method documentation
    **/
    activityListPublicOrgEvents(req: operations.ActivityListPublicOrgEventsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListPublicOrgEventsResponse>;
    /**
     * activityListReceivedEventsForUser - List events received by the authenticated user
     *
     * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
     *
     * https://docs.github.com/rest/reference/activity#list-events-received-by-the-authenticated-user - API method documentation
    **/
    activityListReceivedEventsForUser(req: operations.ActivityListReceivedEventsForUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReceivedEventsForUserResponse>;
    /**
     * activityListReceivedPublicEventsForUser - List public events received by a user
     *
     * https://docs.github.com/rest/reference/activity#list-public-events-received-by-a-user - API method documentation
    **/
    activityListReceivedPublicEventsForUser(req: operations.ActivityListReceivedPublicEventsForUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReceivedPublicEventsForUserResponse>;
    /**
     * activityListRepoEvents - List repository events
     *
     * https://docs.github.com/rest/reference/activity#list-repository-events - API method documentation
    **/
    activityListRepoEvents(req: operations.ActivityListRepoEventsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListRepoEventsResponse>;
    /**
     * activityListRepoNotificationsForAuthenticatedUser - List repository notifications for the authenticated user
     *
     * List all notifications for the current user.
     *
     * https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user - API method documentation
    **/
    activityListRepoNotificationsForAuthenticatedUser(req: operations.ActivityListRepoNotificationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListRepoNotificationsForAuthenticatedUserResponse>;
    /**
     * activityListReposStarredByAuthenticatedUser - List repositories starred by the authenticated user
     *
     * Lists repositories the authenticated user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/rest/reference/activity#list-repositories-starred-by-the-authenticated-user - API method documentation
    **/
    activityListReposStarredByAuthenticatedUser(req: operations.ActivityListReposStarredByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReposStarredByAuthenticatedUserResponse>;
    /**
     * activityListReposStarredByUser - List repositories starred by a user
     *
     * Lists repositories a user has starred.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/rest/reference/activity#list-repositories-starred-by-a-user - API method documentation
    **/
    activityListReposStarredByUser(req: operations.ActivityListReposStarredByUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReposStarredByUserResponse>;
    /**
     * activityListReposWatchedByUser - List repositories watched by a user
     *
     * Lists repositories a user is watching.
     *
     * https://docs.github.com/rest/reference/activity#list-repositories-watched-by-a-user - API method documentation
    **/
    activityListReposWatchedByUser(req: operations.ActivityListReposWatchedByUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListReposWatchedByUserResponse>;
    /**
     * activityListStargazersForRepo - List stargazers
     *
     * Lists the people that have starred the repository.
     *
     * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/rest/reference/activity#list-stargazers - API method documentation
    **/
    activityListStargazersForRepo(req: operations.ActivityListStargazersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListStargazersForRepoResponse>;
    /**
     * activityListWatchedReposForAuthenticatedUser - List repositories watched by the authenticated user
     *
     * Lists repositories the authenticated user is watching.
     *
     * https://docs.github.com/rest/reference/activity#list-repositories-watched-by-the-authenticated-user - API method documentation
    **/
    activityListWatchedReposForAuthenticatedUser(req: operations.ActivityListWatchedReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListWatchedReposForAuthenticatedUserResponse>;
    /**
     * activityListWatchersForRepo - List watchers
     *
     * Lists the people watching the specified repository.
     *
     * https://docs.github.com/rest/reference/activity#list-watchers - API method documentation
    **/
    activityListWatchersForRepo(req: operations.ActivityListWatchersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActivityListWatchersForRepoResponse>;
    /**
     * activityMarkNotificationsAsRead - Mark notifications as read
     *
     * Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     *
     * https://docs.github.com/rest/reference/activity#mark-notifications-as-read - API method documentation
    **/
    activityMarkNotificationsAsRead(req: operations.ActivityMarkNotificationsAsReadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityMarkNotificationsAsReadResponse>;
    /**
     * activityMarkRepoNotificationsAsRead - Mark repository notifications as read
     *
     * Marks all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
     *
     * https://docs.github.com/rest/reference/activity#mark-repository-notifications-as-read - API method documentation
    **/
    activityMarkRepoNotificationsAsRead(req: operations.ActivityMarkRepoNotificationsAsReadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityMarkRepoNotificationsAsReadResponse>;
    /**
     * activityMarkThreadAsRead - Mark a thread as read
     *
     * https://docs.github.com/rest/reference/activity#mark-a-thread-as-read - API method documentation
    **/
    activityMarkThreadAsRead(req: operations.ActivityMarkThreadAsReadRequest, config?: AxiosRequestConfig): Promise<operations.ActivityMarkThreadAsReadResponse>;
    /**
     * activitySetRepoSubscription - Set a repository subscription
     *
     * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/rest/reference/activity#delete-a-repository-subscription) completely.
     *
     * https://docs.github.com/rest/reference/activity#set-a-repository-subscription - API method documentation
    **/
    activitySetRepoSubscription(req: operations.ActivitySetRepoSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivitySetRepoSubscriptionResponse>;
    /**
     * activitySetThreadSubscription - Set a thread subscription
     *
     * If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
     *
     * You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
     *
     * Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/rest/reference/activity#delete-a-thread-subscription) endpoint.
     *
     * https://docs.github.com/rest/reference/activity#set-a-thread-subscription - API method documentation
    **/
    activitySetThreadSubscription(req: operations.ActivitySetThreadSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivitySetThreadSubscriptionResponse>;
    /**
     * activityStarRepoForAuthenticatedUser - Star a repository for the authenticated user
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/rest/reference/activity#star-a-repository-for-the-authenticated-user - API method documentation
    **/
    activityStarRepoForAuthenticatedUser(req: operations.ActivityStarRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityStarRepoForAuthenticatedUserResponse>;
    /**
     * activityUnstarRepoForAuthenticatedUser - Unstar a repository for the authenticated user
     *
     * https://docs.github.com/rest/reference/activity#unstar-a-repository-for-the-authenticated-user - API method documentation
    **/
    activityUnstarRepoForAuthenticatedUser(req: operations.ActivityUnstarRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ActivityUnstarRepoForAuthenticatedUserResponse>;
    /**
     * appsAddRepoToInstallation - Add a repository to an app installation
     *
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation - API method documentation
    **/
    appsAddRepoToInstallation(req: operations.AppsAddRepoToInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsAddRepoToInstallationResponse>;
    /**
     * appsCheckAuthorization - Check an authorization
     *
     * **Deprecation Notice:** GitHub will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/rest/reference/apps#check-an-authorization - API method documentation
    **/
    appsCheckAuthorization(req: operations.AppsCheckAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsCheckAuthorizationResponse>;
    /**
     * appsCheckToken - Check a token
     *
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/rest/reference/apps#check-a-token - API method documentation
    **/
    appsCheckToken(req: operations.AppsCheckTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCheckTokenResponse>;
    /**
     * appsCreateContentAttachment - Create a content attachment
     *
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://docs.github.com/webhooks/event-payloads/#content_reference) to create an attachment.
     *
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/apps/using-content-attachments/)" for details about content attachments.
     *
     * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#create-a-content-attachment - API method documentation
    **/
    appsCreateContentAttachment(req: operations.AppsCreateContentAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateContentAttachmentResponse>;
    /**
     * appsCreateFromManifest - Create a GitHub App from a manifest
     *
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     *
     * https://docs.github.com/rest/reference/apps/#create-a-github-app-from-a-manifest - API method documentation
    **/
    appsCreateFromManifest(req: operations.AppsCreateFromManifestRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateFromManifestResponse>;
    /**
     * appsCreateInstallationAccessToken - Create an installation access token for an app
     *
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#create-an-installation-access-token-for-an-app - API method documentation
    **/
    appsCreateInstallationAccessToken(req: operations.AppsCreateInstallationAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateInstallationAccessTokenResponse>;
    /**
     * appsDeleteAuthorization - Delete an app authorization
     *
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     *
     * https://docs.github.com/rest/reference/apps#delete-an-app-authorization - API method documentation
    **/
    appsDeleteAuthorization(req: operations.AppsDeleteAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteAuthorizationResponse>;
    /**
     * appsDeleteInstallation - Delete an installation for the authenticated app
     *
     * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/reference/apps/#suspend-an-app-installation)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#delete-an-installation-for-the-authenticated-app - API method documentation
    **/
    appsDeleteInstallation(req: operations.AppsDeleteInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteInstallationResponse>;
    /**
     * appsDeleteToken - Delete an app token
     *
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * https://docs.github.com/rest/reference/apps#delete-an-app-token - API method documentation
    **/
    appsDeleteToken(req: operations.AppsDeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteTokenResponse>;
    /**
     * appsGetAuthenticated - Get the authenticated app
     *
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#get-the-authenticated-app - API method documentation
    **/
    appsGetAuthenticated(config?: AxiosRequestConfig): Promise<operations.AppsGetAuthenticatedResponse>;
    /**
     * appsGetBySlug - Get an app
     *
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#get-an-app - API method documentation
    **/
    appsGetBySlug(req: operations.AppsGetBySlugRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetBySlugResponse>;
    /**
     * appsGetInstallation - Get an installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#get-an-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetInstallation(req: operations.AppsGetInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetInstallationResponse>;
    /**
     * appsGetOrgInstallation - Get an organization installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#get-an-organization-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetOrgInstallation(req: operations.AppsGetOrgInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetOrgInstallationResponse>;
    /**
     * appsGetRepoInstallation - Get a repository installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#get-a-repository-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetRepoInstallation(req: operations.AppsGetRepoInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetRepoInstallationResponse>;
    /**
     * appsGetSubscriptionPlanForAccount - Get a subscription plan for an account
     *
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account - API method documentation
    **/
    appsGetSubscriptionPlanForAccount(req: operations.AppsGetSubscriptionPlanForAccountRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetSubscriptionPlanForAccountResponse>;
    /**
     * appsGetSubscriptionPlanForAccountStubbed - Get a subscription plan for an account (stubbed)
     *
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed - API method documentation
    **/
    appsGetSubscriptionPlanForAccountStubbed(req: operations.AppsGetSubscriptionPlanForAccountStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetSubscriptionPlanForAccountStubbedResponse>;
    /**
     * appsGetUserInstallation - Get a user installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#get-a-user-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetUserInstallation(req: operations.AppsGetUserInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetUserInstallationResponse>;
    /**
     * appsGetWebhookConfigForApp - Get a webhook configuration for an app
     *
     * Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#get-a-webhook-configuration-for-an-app - API method documentation
    **/
    appsGetWebhookConfigForApp(config?: AxiosRequestConfig): Promise<operations.AppsGetWebhookConfigForAppResponse>;
    /**
     * appsListAccountsForPlan - List accounts for a plan
     *
     * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan - API method documentation
    **/
    appsListAccountsForPlan(req: operations.AppsListAccountsForPlanRequest, config?: AxiosRequestConfig): Promise<operations.AppsListAccountsForPlanResponse>;
    /**
     * appsListAccountsForPlanStubbed - List accounts for a plan (stubbed)
     *
     * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed - API method documentation
    **/
    appsListAccountsForPlanStubbed(req: operations.AppsListAccountsForPlanStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsListAccountsForPlanStubbedResponse>;
    /**
     * appsListInstallationReposForAuthenticatedUser - List repositories accessible to the user access token
     *
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     *
     * https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token - API method documentation
    **/
    appsListInstallationReposForAuthenticatedUser(req: operations.AppsListInstallationReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationReposForAuthenticatedUserResponse>;
    /**
     * appsListInstallations - List installations for the authenticated app
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     *
     * https://docs.github.com/rest/reference/apps/#list-installations-for-the-authenticated-app - API method documentation
    **/
    appsListInstallations(req: operations.AppsListInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsResponse>;
    /**
     * appsListInstallationsForAuthenticatedUser - List app installations accessible to the user access token
     *
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     *
     * https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token - API method documentation
    **/
    appsListInstallationsForAuthenticatedUser(req: operations.AppsListInstallationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsForAuthenticatedUserResponse>;
    /**
     * appsListPlans - List plans
     *
     * Lists all plans that are part of your GitHub Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#list-plans - API method documentation
    **/
    appsListPlans(req: operations.AppsListPlansRequest, config?: AxiosRequestConfig): Promise<operations.AppsListPlansResponse>;
    /**
     * appsListPlansStubbed - List plans (stubbed)
     *
     * Lists all plans that are part of your GitHub Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#list-plans-stubbed - API method documentation
    **/
    appsListPlansStubbed(req: operations.AppsListPlansStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsListPlansStubbedResponse>;
    /**
     * appsListReposAccessibleToInstallation - List repositories accessible to the app installation
     *
     * List repositories that an app installation can access.
     *
     * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation - API method documentation
    **/
    appsListReposAccessibleToInstallation(req: operations.AppsListReposAccessibleToInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsListReposAccessibleToInstallationResponse>;
    /**
     * appsListSubscriptionsForAuthenticatedUser - List subscriptions for the authenticated user
     *
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     *
     * https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user - API method documentation
    **/
    appsListSubscriptionsForAuthenticatedUser(req: operations.AppsListSubscriptionsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListSubscriptionsForAuthenticatedUserResponse>;
    /**
     * appsListSubscriptionsForAuthenticatedUserStubbed - List subscriptions for the authenticated user (stubbed)
     *
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).
     *
     * https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed - API method documentation
    **/
    appsListSubscriptionsForAuthenticatedUserStubbed(req: operations.AppsListSubscriptionsForAuthenticatedUserStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsListSubscriptionsForAuthenticatedUserStubbedResponse>;
    /**
     * appsRemoveRepoFromInstallation - Remove a repository from an app installation
     *
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation - API method documentation
    **/
    appsRemoveRepoFromInstallation(req: operations.AppsRemoveRepoFromInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsRemoveRepoFromInstallationResponse>;
    /**
     * appsResetAuthorization - Reset an authorization
     *
     * **Deprecation Notice:** GitHub will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/rest/reference/apps#reset-an-authorization - API method documentation
    **/
    appsResetAuthorization(req: operations.AppsResetAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsResetAuthorizationResponse>;
    /**
     * appsResetToken - Reset a token
     *
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/rest/reference/apps#reset-a-token - API method documentation
    **/
    appsResetToken(req: operations.AppsResetTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsResetTokenResponse>;
    /**
     * appsRevokeAuthorizationForApplication - Revoke an authorization for an application
     *
     * **Deprecation Notice:** GitHub will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * https://docs.github.com/rest/reference/apps#revoke-an-authorization-for-an-application - API method documentation
    **/
    appsRevokeAuthorizationForApplication(req: operations.AppsRevokeAuthorizationForApplicationRequest, config?: AxiosRequestConfig): Promise<operations.AppsRevokeAuthorizationForApplicationResponse>;
    /**
     * appsRevokeGrantForApplication - Revoke a grant for an application
     *
     * **Deprecation Notice:** GitHub will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
     *
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.
     *
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub](https://github.com/settings/applications#authorized).
     *
     * https://docs.github.com/rest/reference/apps#revoke-a-grant-for-an-application - API method documentation
    **/
    appsRevokeGrantForApplication(req: operations.AppsRevokeGrantForApplicationRequest, config?: AxiosRequestConfig): Promise<operations.AppsRevokeGrantForApplicationResponse>;
    /**
     * appsRevokeInstallationAccessToken - Revoke an installation access token
     *
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     *
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
     *
     * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token - API method documentation
    **/
    appsRevokeInstallationAccessToken(config?: AxiosRequestConfig): Promise<operations.AppsRevokeInstallationAccessTokenResponse>;
    /**
     * appsScopeToken - Create a scoped access token
     *
     * Exchanges a non-repository scoped user-to-server OAuth access token for a repository scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * https://docs.github.com/rest/reference/apps#create-a-scoped-access-token - API method documentation
    **/
    appsScopeToken(req: operations.AppsScopeTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsScopeTokenResponse>;
    /**
     * appsSuspendInstallation - Suspend an app installation
     *
     * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#suspend-an-app-installation - API method documentation
    **/
    appsSuspendInstallation(req: operations.AppsSuspendInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsSuspendInstallationResponse>;
    /**
     * appsUnsuspendInstallation - Unsuspend an app installation
     *
     * Removes a GitHub App installation suspension.
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps/#unsuspend-an-app-installation - API method documentation
    **/
    appsUnsuspendInstallation(req: operations.AppsUnsuspendInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsUnsuspendInstallationResponse>;
    /**
     * appsUpdateWebhookConfigForApp - Update a webhook configuration for an app
     *
     * Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/rest/reference/apps#update-a-webhook-configuration-for-an-app - API method documentation
    **/
    appsUpdateWebhookConfigForApp(req: operations.AppsUpdateWebhookConfigForAppRequest, config?: AxiosRequestConfig): Promise<operations.AppsUpdateWebhookConfigForAppResponse>;
    /**
     * auditLogGetAuditLog - Get the audit log for an enterprise
     *
     * **Note:** The audit log REST API is currently in beta and is subject to change.
     *
     * Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise - API method documentation
    **/
    auditLogGetAuditLog(req: operations.AuditLogGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.AuditLogGetAuditLogResponse>;
    /**
     * billingGetGithubActionsBillingGhe - Get GitHub Actions billing for an enterprise
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-enterprise - API method documentation
    **/
    billingGetGithubActionsBillingGhe(req: operations.BillingGetGithubActionsBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingGheResponse>;
    /**
     * billingGetGithubActionsBillingOrg - Get GitHub Actions billing for an organization
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-organization - API method documentation
    **/
    billingGetGithubActionsBillingOrg(req: operations.BillingGetGithubActionsBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingOrgResponse>;
    /**
     * billingGetGithubActionsBillingUser - Get GitHub Actions billing for a user
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-a-user - API method documentation
    **/
    billingGetGithubActionsBillingUser(req: operations.BillingGetGithubActionsBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingUserResponse>;
    /**
     * billingGetGithubPackagesBillingGhe - Get GitHub Packages billing for an enterprise
     *
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-enterprise - API method documentation
    **/
    billingGetGithubPackagesBillingGhe(req: operations.BillingGetGithubPackagesBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingGheResponse>;
    /**
     * billingGetGithubPackagesBillingOrg - Get GitHub Packages billing for an organization
     *
     * Gets the free and paid storage usued for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-organization - API method documentation
    **/
    billingGetGithubPackagesBillingOrg(req: operations.BillingGetGithubPackagesBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingOrgResponse>;
    /**
     * billingGetGithubPackagesBillingUser - Get GitHub Packages billing for a user
     *
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-a-user - API method documentation
    **/
    billingGetGithubPackagesBillingUser(req: operations.BillingGetGithubPackagesBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingUserResponse>;
    /**
     * billingGetSharedStorageBillingGhe - Get shared storage billing for an enterprise
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-enterprise - API method documentation
    **/
    billingGetSharedStorageBillingGhe(req: operations.BillingGetSharedStorageBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingGheResponse>;
    /**
     * billingGetSharedStorageBillingOrg - Get shared storage billing for an organization
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-organization - API method documentation
    **/
    billingGetSharedStorageBillingOrg(req: operations.BillingGetSharedStorageBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingOrgResponse>;
    /**
     * billingGetSharedStorageBillingUser - Get shared storage billing for a user
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-a-user - API method documentation
    **/
    billingGetSharedStorageBillingUser(req: operations.BillingGetSharedStorageBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingUserResponse>;
    /**
     * checksCreate - Create a check run
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
     *
     * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
     *
     * https://docs.github.com/rest/reference/checks#create-a-check-run - API method documentation
    **/
    checksCreate(req: operations.ChecksCreateRequest, config?: AxiosRequestConfig): Promise<operations.ChecksCreateResponse>;
    /**
     * checksCreateSuite - Create a check suite
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
     *
     * https://docs.github.com/rest/reference/checks#create-a-check-suite - API method documentation
    **/
    checksCreateSuite(req: operations.ChecksCreateSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksCreateSuiteResponse>;
    /**
     * checksGet - Get a check run
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     *
     * https://docs.github.com/rest/reference/checks#get-a-check-run - API method documentation
    **/
    checksGet(req: operations.ChecksGetRequest, config?: AxiosRequestConfig): Promise<operations.ChecksGetResponse>;
    /**
     * checksGetSuite - Get a check suite
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     *
     * https://docs.github.com/rest/reference/checks#get-a-check-suite - API method documentation
    **/
    checksGetSuite(req: operations.ChecksGetSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksGetSuiteResponse>;
    /**
     * checksListAnnotations - List check run annotations
     *
     * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
     *
     * https://docs.github.com/rest/reference/checks#list-check-run-annotations - API method documentation
    **/
    checksListAnnotations(req: operations.ChecksListAnnotationsRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListAnnotationsResponse>;
    /**
     * checksListForRef - List check runs for a Git reference
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     *
     * https://docs.github.com/rest/reference/checks#list-check-runs-for-a-git-reference - API method documentation
    **/
    checksListForRef(req: operations.ChecksListForRefRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListForRefResponse>;
    /**
     * checksListForSuite - List check runs in a check suite
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
     *
     * https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite - API method documentation
    **/
    checksListForSuite(req: operations.ChecksListForSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListForSuiteResponse>;
    /**
     * checksListSuitesForRef - List check suites for a Git reference
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
     *
     * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
     *
     * https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference - API method documentation
    **/
    checksListSuitesForRef(req: operations.ChecksListSuitesForRefRequest, config?: AxiosRequestConfig): Promise<operations.ChecksListSuitesForRefResponse>;
    /**
     * checksRerequestSuite - Rerequest a check suite
     *
     * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
     *
     * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
     *
     * https://docs.github.com/rest/reference/checks#rerequest-a-check-suite - API method documentation
    **/
    checksRerequestSuite(req: operations.ChecksRerequestSuiteRequest, config?: AxiosRequestConfig): Promise<operations.ChecksRerequestSuiteResponse>;
    /**
     * checksSetSuitesPreferences - Update repository preferences for check suites
     *
     * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
     *
     * https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites - API method documentation
    **/
    checksSetSuitesPreferences(req: operations.ChecksSetSuitesPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.ChecksSetSuitesPreferencesResponse>;
    /**
     * checksUpdate - Update a check run
     *
     * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
     *
     * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
     *
     * https://docs.github.com/rest/reference/checks#update-a-check-run - API method documentation
    **/
    checksUpdate(req: operations.ChecksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ChecksUpdateResponse>;
    /**
     * codeScanningDeleteAnalysis - Delete a code scanning analysis from a repository
     *
     * Deletes a specified code scanning analysis from a repository. For
     * private repositories, you must use an access token with the `repo` scope. For public repositories,
     * you must use an access token with `public_repo` and `repo:security_events` scopes.
     * GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * You can delete one analysis at a time.
     * To delete a series of analyses, start with the most recent analysis and work backwards.
     * Conceptually, the process is similar to the undo function in a text editor.
     *
     * When you list the analyses for a repository,
     * one or more will be identified as deletable in the response:
     *
     * ```
     * "deletable": true
     * ```
     *
     * An analysis is deletable when it's the most recent in a set of analyses.
     * Typically, a repository will have multiple sets of analyses
     * for each enabled code scanning tool,
     * where a set is determined by a unique combination of analysis values:
     *
     * * `ref`
     * * `tool`
     * * `analysis_key`
     * * `environment`
     *
     * If you attempt to delete an analysis that is not the most recent in a set,
     * you'll get a 400 response with the message:
     *
     * ```
     * Analysis specified is not deletable.
     * ```
     *
     * The response from a successful `DELETE` operation provides you with
     * two alternative URLs for deleting the next analysis in the set
     * (see the example default response below).
     * Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
     * in the set. This is a useful option if you want to preserve at least one analysis
     * for the specified tool in your repository.
     * Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
     * When you delete the last analysis in a set the value of `next_analysis_url` and `confirm_delete_url`
     * in the 200 response is `null`.
     *
     * As an example of the deletion process,
     * let's imagine that you added a workflow that configured a particular code scanning tool
     * to analyze the code in a repository. This tool has added 15 analyses:
     * 10 on the default branch, and another 5 on a topic branch.
     * You therefore have two separate sets of analyses for this tool.
     * You've now decided that you want to remove all of the analyses for the tool.
     * To do this you must make 15 separate deletion requests.
     * To start, you must find the deletable analysis for one of the sets,
     * step through deleting the analyses in that set,
     * and then repeat the process for the second set.
     * The procedure therefore consists of a nested loop:
     *
     * **Outer loop**:
     * * List the analyses for the repository, filtered by tool.
     * * Parse this list to find a deletable analysis. If found:
     *
     *   **Inner loop**:
     *   * Delete the identified analysis.
     *   * Parse the response for the value of `next_analysis_url` and, if found, use this in the next iteration.
     *
     * The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `next_analysis_url` value. Alternatively, you could use the `confirm_delete_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.
     *
     * https://docs.github.com/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository - API method documentation
    **/
    codeScanningDeleteAnalysis(req: operations.CodeScanningDeleteAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningDeleteAnalysisResponse>;
    /**
     * codeScanningGetAlert - Get a code scanning alert
     *
     * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * **Deprecation notice**:
     * The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
     *
     * https://docs.github.com/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
    **/
    codeScanningGetAlert(req: operations.CodeScanningGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningGetAlertResponse>;
    /**
     * codeScanningGetAnalysis - Get a code scanning analysis for a repository
     *
     * Gets a specified code scanning analysis for a repository.
     * You must use an access token with the `security_events` scope to use this endpoint.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * The default JSON response contains fields that describe the analysis.
     * This includes the Git reference and commit SHA to which the analysis relates,
     * the datetime of the analysis, the name of the code scanning tool,
     * and the number of alerts.
     *
     * The `rules_count` field in the default response give the number of rules
     * that were run in the analysis.
     * For very old analyses this data is not available,
     * and `0` is returned in this field.
     *
     * If you use the Accept header `application/sarif+json`,
     * the response contains the analysis data that was uploaded.
     * This is formatted as
     * [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).
     * For an example response, see "[Custom media type for code scanning](#custom-media-type-for-code-scanning)."
     *
     * **Deprecation notice**:
     * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
     *
     * https://docs.github.com/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository - API method documentation
    **/
    codeScanningGetAnalysis(req: operations.CodeScanningGetAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningGetAnalysisResponse>;
    /**
     * codeScanningGetSarif - Get information about a SARIF upload
     *
     * Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/code-scanning#get-information-about-a-sarif-upload - API method documentation
    **/
    codeScanningGetSarif(req: operations.CodeScanningGetSarifRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningGetSarifResponse>;
    /**
     * codeScanningListAlertsForRepo - List code scanning alerts for a repository
     *
     * Lists all open code scanning alerts for the default branch (usually `main`
     * or `master`). You must use an access token with the `security_events` scope to use
     * this endpoint. GitHub Apps must have the `security_events` read permission to use
     * this endpoint.
     *
     * The response includes a `most_recent_instance` object.
     * This provides details of the most recent instance of this alert
     * for the default branch or for the specified Git reference
     * (if you used `ref` in the request).
     *
     * https://docs.github.com/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
    **/
    codeScanningListAlertsForRepo(req: operations.CodeScanningListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningListAlertsForRepoResponse>;
    /**
     * codeScanningListAlertsInstances - List instances of a code scanning alert
     *
     * Lists all instances of the specified code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert - API method documentation
    **/
    codeScanningListAlertsInstances(req: operations.CodeScanningListAlertsInstancesRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningListAlertsInstancesResponse>;
    /**
     * codeScanningListRecentAnalyses - List code scanning analyses for a repository
     *
     * Lists the details of all code scanning analyses for a repository,
     * starting with the most recent.
     * The response is paginated and you can use the `page` and `per_page` parameters
     * to list the analyses you're interested in.
     * By default 30 analyses are listed per page.
     *
     * The `rules_count` field in the response give the number of rules
     * that were run in the analysis.
     * For very old analyses this data is not available,
     * and `0` is returned in this field.
     *
     * You must use an access token with the `security_events` scope to use this endpoint.
     * GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * **Deprecation notice**:
     * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
     *
     * https://docs.github.com/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
    **/
    codeScanningListRecentAnalyses(req: operations.CodeScanningListRecentAnalysesRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningListRecentAnalysesResponse>;
    /**
     * codeScanningUpdateAlert - Update a code scanning alert
     *
     * Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
    **/
    codeScanningUpdateAlert(req: operations.CodeScanningUpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningUpdateAlertResponse>;
    /**
     * codeScanningUploadSarif - Upload an analysis as SARIF data
     *
     * Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * There are two places where you can upload code scanning results.
     *  - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."
     *  - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
     *
     * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
     *
     * ```
     * gzip -c analysis-data.sarif | base64
     * ```
     *
     * SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
     *
     * The `202 Accepted`, response includes an `id` value.
     * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
     * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
     *
     * https://docs.github.com/rest/reference/code-scanning#upload-an-analysis-as-sarif-data - API method documentation
    **/
    codeScanningUploadSarif(req: operations.CodeScanningUploadSarifRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningUploadSarifResponse>;
    /**
     * codesOfConductGetAllCodesOfConduct - Get all codes of conduct
     *
     * https://docs.github.com/rest/reference/codes_of_conduct/#get-all-codes-of-conduct - API method documentation
    **/
    codesOfConductGetAllCodesOfConduct(config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetAllCodesOfConductResponse>;
    /**
     * codesOfConductGetConductCode - Get a code of conduct
     *
     * https://docs.github.com/rest/reference/codes_of_conduct/#get-a-code-of-conduct - API method documentation
    **/
    codesOfConductGetConductCode(req: operations.CodesOfConductGetConductCodeRequest, config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetConductCodeResponse>;
    /**
     * codesOfConductGetForRepo - Get the code of conduct for a repository
     *
     * Returns the contents of the repository's code of conduct file, if one is detected.
     *
     * A code of conduct is detected if there is a file named `CODE_OF_CONDUCT` in the root directory of the repository. GitHub detects which code of conduct it is using fuzzy matching.
     *
     * https://docs.github.com/rest/reference/codes_of_conduct/#get-the-code-of-conduct-for-a-repository - API method documentation
    **/
    codesOfConductGetForRepo(req: operations.CodesOfConductGetForRepoRequest, config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetForRepoResponse>;
    /**
     * emojisGet - Get emojis
     *
     * Lists all the emojis available to use on GitHub.
     *
     * https://docs.github.com/rest/reference/emojis/#get-emojis - API method documentation
    **/
    emojisGet(config?: AxiosRequestConfig): Promise<operations.EmojisGetResponse>;
    /**
     * enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
     *
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
     *
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateRegistrationTokenForEnterprise(req: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
     *
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateRemoveTokenForEnterprise(req: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
     *
     * Creates a new self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteScimGroupFromEnterprise - Delete a SCIM group from an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteScimGroupFromEnterprise(req: operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
     *
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
     *
     * Deletes a self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteUserFromEnterprise - Delete a SCIM user from an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteUserFromEnterprise(req: operations.EnterpriseAdminDeleteUserFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteUserFromEnterpriseResponse>;
    /**
     * enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
     *
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
     *
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
     *
     * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetAllowedActionsEnterprise(req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
     *
     * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetProvisioningInformationForEnterpriseGroup - Get SCIM provisioning information for an enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group - API method documentation
    **/
    enterpriseAdminGetProvisioningInformationForEnterpriseGroup(req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse>;
    /**
     * enterpriseAdminGetProvisioningInformationForEnterpriseUser - Get SCIM provisioning information for an enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user - API method documentation
    **/
    enterpriseAdminGetProvisioningInformationForEnterpriseUser(req: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse>;
    /**
     * enterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
     *
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse>;
    /**
     * enterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
     *
     * Gets a specific self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
     *
     * Lists the organizations with access to a self-hosted runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
    **/
    enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminListProvisionedGroupsEnterprise - List provisioned SCIM groups for an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListProvisionedGroupsEnterprise(req: operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse>;
    /**
     * enterpriseAdminListProvisionedIdentitiesEnterprise - List SCIM provisioned identities for an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
     *
     * When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
     *   - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
     *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
     *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
     *
     * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
     *
     * 1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
     *
     * 1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
     *
     * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
     *    - If the user signs in, their GitHub account is linked to this entry.
     *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListProvisionedIdentitiesEnterprise(req: operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse>;
    /**
     * enterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListRunnerApplicationsForEnterprise(req: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
     *
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
     *
     * Lists all self-hosted runner groups for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
     *
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnersForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
     *
     * Lists the self-hosted runners that are in a specific enterprise group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminProvisionAndInviteEnterpriseGroup - Provision a SCIM enterprise group and invite users
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users - API method documentation
    **/
    enterpriseAdminProvisionAndInviteEnterpriseGroup(req: operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse>;
    /**
     * enterpriseAdminProvisionAndInviteEnterpriseUser - Provision and invite a SCIM enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Provision enterprise membership for a user, and send organization invitation emails to the email address.
     *
     * You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user - API method documentation
    **/
    enterpriseAdminProvisionAndInviteEnterpriseUser(req: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse>;
    /**
     * enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
     *
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
     *
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(req: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
     *
     * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetAllowedActionsEnterprise(req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
     *
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetInformationForProvisionedEnterpriseGroup - Set SCIM information for a provisioned enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group - API method documentation
    **/
    enterpriseAdminSetInformationForProvisionedEnterpriseGroup(req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse>;
    /**
     * enterpriseAdminSetInformationForProvisionedEnterpriseUser - Set SCIM information for a provisioned enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
     *
     * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
     *
     * **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user - API method documentation
    **/
    enterpriseAdminSetInformationForProvisionedEnterpriseUser(req: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse>;
    /**
     * enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
     *
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
     *
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminUpdateAttributeForEnterpriseGroup - Update an attribute for a SCIM enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group - API method documentation
    **/
    enterpriseAdminUpdateAttributeForEnterpriseGroup(req: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse>;
    /**
     * enterpriseAdminUpdateAttributeForEnterpriseUser - Update an attribute for a SCIM enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
     *
     * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
     *
     * ```
     * {
     *   "Operations":[{
     *     "op":"replace",
     *     "value":{
     *       "active":false
     *     }
     *   }]
     * }
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user - API method documentation
    **/
    enterpriseAdminUpdateAttributeForEnterpriseUser(req: operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse>;
    /**
     * enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * gistsCheckIsStarred - Check if a gist is starred
     *
     * https://docs.github.com/rest/reference/gists/#check-if-a-gist-is-starred - API method documentation
    **/
    gistsCheckIsStarred(req: operations.GistsCheckIsStarredRequest, config?: AxiosRequestConfig): Promise<operations.GistsCheckIsStarredResponse>;
    /**
     * gistsCreate - Create a gist
     *
     * Allows you to add a new gist with one or more files.
     *
     * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
     *
     * https://docs.github.com/rest/reference/gists/#create-a-gist - API method documentation
    **/
    gistsCreate(req: operations.GistsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GistsCreateResponse>;
    /**
     * gistsCreateComment - Create a gist comment
     *
     * https://docs.github.com/rest/reference/gists#create-a-gist-comment - API method documentation
    **/
    gistsCreateComment(req: operations.GistsCreateCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsCreateCommentResponse>;
    /**
     * gistsDelete - Delete a gist
     *
     * https://docs.github.com/rest/reference/gists/#delete-a-gist - API method documentation
    **/
    gistsDelete(req: operations.GistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GistsDeleteResponse>;
    /**
     * gistsDeleteComment - Delete a gist comment
     *
     * https://docs.github.com/rest/reference/gists#delete-a-gist-comment - API method documentation
    **/
    gistsDeleteComment(req: operations.GistsDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsDeleteCommentResponse>;
    /**
     * gistsFork - Fork a gist
     *
     * **Note**: This was previously `/gists/:gist_id/fork`.
     *
     * https://docs.github.com/rest/reference/gists/#fork-a-gist - API method documentation
    **/
    gistsFork(req: operations.GistsForkRequest, config?: AxiosRequestConfig): Promise<operations.GistsForkResponse>;
    /**
     * gistsGet - Get a gist
     *
     * https://docs.github.com/rest/reference/gists/#get-a-gist - API method documentation
    **/
    gistsGet(req: operations.GistsGetRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetResponse>;
    /**
     * gistsGetComment - Get a gist comment
     *
     * https://docs.github.com/rest/reference/gists#get-a-gist-comment - API method documentation
    **/
    gistsGetComment(req: operations.GistsGetCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetCommentResponse>;
    /**
     * gistsGetRevision - Get a gist revision
     *
     * https://docs.github.com/rest/reference/gists/#get-a-gist-revision - API method documentation
    **/
    gistsGetRevision(req: operations.GistsGetRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GistsGetRevisionResponse>;
    /**
     * gistsList - List gists for the authenticated user
     *
     * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
     *
     * https://docs.github.com/rest/reference/gists/#list-gists-for-the-authenticated-user - API method documentation
    **/
    gistsList(req: operations.GistsListRequest, config?: AxiosRequestConfig): Promise<operations.GistsListResponse>;
    /**
     * gistsListComments - List gist comments
     *
     * https://docs.github.com/rest/reference/gists#list-gist-comments - API method documentation
    **/
    gistsListComments(req: operations.GistsListCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GistsListCommentsResponse>;
    /**
     * gistsListCommits - List gist commits
     *
     * https://docs.github.com/rest/reference/gists/#list-gist-commits - API method documentation
    **/
    gistsListCommits(req: operations.GistsListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GistsListCommitsResponse>;
    /**
     * gistsListForUser - List gists for a user
     *
     * Lists public gists for the specified user:
     *
     * https://docs.github.com/rest/reference/gists/#list-gists-for-a-user - API method documentation
    **/
    gistsListForUser(req: operations.GistsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GistsListForUserResponse>;
    /**
     * gistsListForks - List gist forks
     *
     * https://docs.github.com/rest/reference/gists/#list-gist-forks - API method documentation
    **/
    gistsListForks(req: operations.GistsListForksRequest, config?: AxiosRequestConfig): Promise<operations.GistsListForksResponse>;
    /**
     * gistsListPublic - List public gists
     *
     * List public gists sorted by most recently updated to least recently updated.
     *
     * Note: With [pagination](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
     *
     * https://docs.github.com/rest/reference/gists/#list-public-gists - API method documentation
    **/
    gistsListPublic(req: operations.GistsListPublicRequest, config?: AxiosRequestConfig): Promise<operations.GistsListPublicResponse>;
    /**
     * gistsListStarred - List starred gists
     *
     * List the authenticated user's starred gists:
     *
     * https://docs.github.com/rest/reference/gists/#list-starred-gists - API method documentation
    **/
    gistsListStarred(req: operations.GistsListStarredRequest, config?: AxiosRequestConfig): Promise<operations.GistsListStarredResponse>;
    /**
     * gistsStar - Star a gist
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/rest/reference/gists/#star-a-gist - API method documentation
    **/
    gistsStar(req: operations.GistsStarRequest, config?: AxiosRequestConfig): Promise<operations.GistsStarResponse>;
    /**
     * gistsUnstar - Unstar a gist
     *
     * https://docs.github.com/rest/reference/gists/#unstar-a-gist - API method documentation
    **/
    gistsUnstar(req: operations.GistsUnstarRequest, config?: AxiosRequestConfig): Promise<operations.GistsUnstarResponse>;
    /**
     * gistsUpdate - Update a gist
     *
     * Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
     *
     * https://docs.github.com/rest/reference/gists/#update-a-gist - API method documentation
    **/
    gistsUpdate(req: operations.GistsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GistsUpdateResponse>;
    /**
     * gistsUpdateComment - Update a gist comment
     *
     * https://docs.github.com/rest/reference/gists#update-a-gist-comment - API method documentation
    **/
    gistsUpdateComment(req: operations.GistsUpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.GistsUpdateCommentResponse>;
    /**
     * gitCreateBlob - Create a blob
     *
     * https://docs.github.com/rest/reference/git#create-a-blob - API method documentation
    **/
    gitCreateBlob(req: operations.GitCreateBlobRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateBlobResponse>;
    /**
     * gitCreateCommit - Create a commit
     *
     * Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/git#create-a-commit - API method documentation
    **/
    gitCreateCommit(req: operations.GitCreateCommitRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateCommitResponse>;
    /**
     * gitCreateRef - Create a reference
     *
     * Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.
     *
     * https://docs.github.com/rest/reference/git#create-a-reference - API method documentation
    **/
    gitCreateRef(req: operations.GitCreateRefRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateRefResponse>;
    /**
     * gitCreateTag - Create a tag object
     *
     * Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/git#create-a-tag-object - API method documentation
    **/
    gitCreateTag(req: operations.GitCreateTagRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateTagResponse>;
    /**
     * gitCreateTree - Create a tree
     *
     * The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.
     *
     * If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/reference/git#update-a-reference)."
     *
     * https://docs.github.com/rest/reference/git#create-a-tree - API method documentation
    **/
    gitCreateTree(req: operations.GitCreateTreeRequest, config?: AxiosRequestConfig): Promise<operations.GitCreateTreeResponse>;
    /**
     * gitDeleteRef - Delete a reference
     *
     * https://docs.github.com/rest/reference/git#delete-a-reference - API method documentation
    **/
    gitDeleteRef(req: operations.GitDeleteRefRequest, config?: AxiosRequestConfig): Promise<operations.GitDeleteRefResponse>;
    /**
     * gitGetBlob - Get a blob
     *
     * The `content` in the response will always be Base64 encoded.
     *
     * _Note_: This API supports blobs up to 100 megabytes in size.
     *
     * https://docs.github.com/rest/reference/git#get-a-blob - API method documentation
    **/
    gitGetBlob(req: operations.GitGetBlobRequest, config?: AxiosRequestConfig): Promise<operations.GitGetBlobResponse>;
    /**
     * gitGetCommit - Get a commit
     *
     * Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/git#get-a-commit - API method documentation
    **/
    gitGetCommit(req: operations.GitGetCommitRequest, config?: AxiosRequestConfig): Promise<operations.GitGetCommitResponse>;
    /**
     * gitGetRef - Get a reference
     *
     * Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * https://docs.github.com/rest/reference/git#get-a-reference - API method documentation
    **/
    gitGetRef(req: operations.GitGetRefRequest, config?: AxiosRequestConfig): Promise<operations.GitGetRefResponse>;
    /**
     * gitGetTag - Get a tag
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/git#get-a-tag - API method documentation
    **/
    gitGetTag(req: operations.GitGetTagRequest, config?: AxiosRequestConfig): Promise<operations.GitGetTagResponse>;
    /**
     * gitGetTree - Get a tree
     *
     * Returns a single tree using the SHA1 value for that tree.
     *
     * If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.
     *
     * https://docs.github.com/rest/reference/git#get-a-tree - API method documentation
    **/
    gitGetTree(req: operations.GitGetTreeRequest, config?: AxiosRequestConfig): Promise<operations.GitGetTreeResponse>;
    /**
     * gitListMatchingRefs - List matching references
     *
     * Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.
     *
     * When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.
     *
     * **Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.
     *
     * https://docs.github.com/rest/reference/git#list-matching-references - API method documentation
    **/
    gitListMatchingRefs(req: operations.GitListMatchingRefsRequest, config?: AxiosRequestConfig): Promise<operations.GitListMatchingRefsResponse>;
    /**
     * gitUpdateRef - Update a reference
     *
     * https://docs.github.com/rest/reference/git#update-a-reference - API method documentation
    **/
    gitUpdateRef(req: operations.GitUpdateRefRequest, config?: AxiosRequestConfig): Promise<operations.GitUpdateRefResponse>;
    /**
     * gitignoreGetAllTemplates - Get all gitignore templates
     *
     * List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user).
     *
     * https://docs.github.com/rest/reference/gitignore/#get-all-gitignore-templates - API method documentation
    **/
    gitignoreGetAllTemplates(config?: AxiosRequestConfig): Promise<operations.GitignoreGetAllTemplatesResponse>;
    /**
     * gitignoreGetTemplate - Get a gitignore template
     *
     * The API also allows fetching the source of a single template.
     * Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.
     *
     * https://docs.github.com/rest/reference/gitignore/#get-a-gitignore-template - API method documentation
    **/
    gitignoreGetTemplate(req: operations.GitignoreGetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GitignoreGetTemplateResponse>;
    /**
     * interactionsGetRestrictionsForAuthenticatedUser - Get interaction restrictions for your public repositories
     *
     * Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories - API method documentation
    **/
    interactionsGetRestrictionsForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForAuthenticatedUserResponse>;
    /**
     * interactionsGetRestrictionsForOrg - Get interaction restrictions for an organization
     *
     * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization - API method documentation
    **/
    interactionsGetRestrictionsForOrg(req: operations.InteractionsGetRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForOrgResponse>;
    /**
     * interactionsGetRestrictionsForRepo - Get interaction restrictions for a repository
     *
     * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository - API method documentation
    **/
    interactionsGetRestrictionsForRepo(req: operations.InteractionsGetRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForRepoResponse>;
    /**
     * interactionsRemoveRestrictionsForAuthenticatedUser - Remove interaction restrictions from your public repositories
     *
     * Removes any interaction restrictions from your public repositories.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories - API method documentation
    **/
    interactionsRemoveRestrictionsForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse>;
    /**
     * interactionsRemoveRestrictionsForOrg - Remove interaction restrictions for an organization
     *
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization - API method documentation
    **/
    interactionsRemoveRestrictionsForOrg(req: operations.InteractionsRemoveRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForOrgResponse>;
    /**
     * interactionsRemoveRestrictionsForRepo - Remove interaction restrictions for a repository
     *
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository - API method documentation
    **/
    interactionsRemoveRestrictionsForRepo(req: operations.InteractionsRemoveRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForRepoResponse>;
    /**
     * interactionsSetRestrictionsForAuthenticatedUser - Set interaction restrictions for your public repositories
     *
     * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories - API method documentation
    **/
    interactionsSetRestrictionsForAuthenticatedUser(req: operations.InteractionsSetRestrictionsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForAuthenticatedUserResponse>;
    /**
     * interactionsSetRestrictionsForOrg - Set interaction restrictions for an organization
     *
     * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization - API method documentation
    **/
    interactionsSetRestrictionsForOrg(req: operations.InteractionsSetRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForOrgResponse>;
    /**
     * interactionsSetRestrictionsForRepo - Set interaction restrictions for a repository
     *
     * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository - API method documentation
    **/
    interactionsSetRestrictionsForRepo(req: operations.InteractionsSetRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForRepoResponse>;
    /**
     * issuesAddAssignees - Add assignees to an issue
     *
     * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
     *
     * https://docs.github.com/rest/reference/issues#add-assignees-to-an-issue - API method documentation
    **/
    issuesAddAssignees(req: operations.IssuesAddAssigneesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesAddAssigneesResponse>;
    /**
     * issuesAddLabels - Add labels to an issue
     *
     * https://docs.github.com/rest/reference/issues#add-labels-to-an-issue - API method documentation
    **/
    issuesAddLabels(req: operations.IssuesAddLabelsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesAddLabelsResponse>;
    /**
     * issuesCheckUserCanBeAssigned - Check if a user can be assigned
     *
     * Checks if a user has permission to be assigned to an issue in this repository.
     *
     * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
     *
     * Otherwise a `404` status code is returned.
     *
     * https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned - API method documentation
    **/
    issuesCheckUserCanBeAssigned(req: operations.IssuesCheckUserCanBeAssignedRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCheckUserCanBeAssignedResponse>;
    /**
     * issuesCreate - Create an issue
     *
     * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/issues/#create-an-issue - API method documentation
    **/
    issuesCreate(req: operations.IssuesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateResponse>;
    /**
     * issuesCreateComment - Create an issue comment
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/issues#create-an-issue-comment - API method documentation
    **/
    issuesCreateComment(req: operations.IssuesCreateCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateCommentResponse>;
    /**
     * issuesCreateLabel - Create a label
     *
     * https://docs.github.com/rest/reference/issues#create-a-label - API method documentation
    **/
    issuesCreateLabel(req: operations.IssuesCreateLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateLabelResponse>;
    /**
     * issuesCreateMilestone - Create a milestone
     *
     * https://docs.github.com/rest/reference/issues#create-a-milestone - API method documentation
    **/
    issuesCreateMilestone(req: operations.IssuesCreateMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateMilestoneResponse>;
    /**
     * issuesDeleteComment - Delete an issue comment
     *
     * https://docs.github.com/rest/reference/issues#delete-an-issue-comment - API method documentation
    **/
    issuesDeleteComment(req: operations.IssuesDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesDeleteCommentResponse>;
    /**
     * issuesDeleteLabel - Delete a label
     *
     * https://docs.github.com/rest/reference/issues#delete-a-label - API method documentation
    **/
    issuesDeleteLabel(req: operations.IssuesDeleteLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesDeleteLabelResponse>;
    /**
     * issuesDeleteMilestone - Delete a milestone
     *
     * https://docs.github.com/rest/reference/issues#delete-a-milestone - API method documentation
    **/
    issuesDeleteMilestone(req: operations.IssuesDeleteMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesDeleteMilestoneResponse>;
    /**
     * issuesGet - Get an issue
     *
     * The API returns a [`301 Moved Permanently` status](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
     * [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
     * the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
     * returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
     * access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
     * to the [`issues`](https://docs.github.com/webhooks/event-payloads/#issues) webhook.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/rest/reference/issues/#get-an-issue - API method documentation
    **/
    issuesGet(req: operations.IssuesGetRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetResponse>;
    /**
     * issuesGetComment - Get an issue comment
     *
     * https://docs.github.com/rest/reference/issues#get-an-issue-comment - API method documentation
    **/
    issuesGetComment(req: operations.IssuesGetCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetCommentResponse>;
    /**
     * issuesGetEvent - Get an issue event
     *
     * https://docs.github.com/rest/reference/issues#get-an-issue-event - API method documentation
    **/
    issuesGetEvent(req: operations.IssuesGetEventRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetEventResponse>;
    /**
     * issuesGetLabel - Get a label
     *
     * https://docs.github.com/rest/reference/issues#get-a-label - API method documentation
    **/
    issuesGetLabel(req: operations.IssuesGetLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetLabelResponse>;
    /**
     * issuesGetMilestone - Get a milestone
     *
     * https://docs.github.com/rest/reference/issues#get-a-milestone - API method documentation
    **/
    issuesGetMilestone(req: operations.IssuesGetMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetMilestoneResponse>;
    /**
     * issuesList - List issues assigned to the authenticated user
     *
     * List issues assigned to the authenticated user across all visible repositories including owned repositories, member
     * repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
     * necessarily assigned to you.
     *
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/rest/reference/issues/#list-issues-assigned-to-the-authenticated-user - API method documentation
    **/
    issuesList(req: operations.IssuesListRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListResponse>;
    /**
     * issuesListAssignees - List assignees
     *
     * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
     *
     * https://docs.github.com/rest/reference/issues#list-assignees - API method documentation
    **/
    issuesListAssignees(req: operations.IssuesListAssigneesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListAssigneesResponse>;
    /**
     * issuesListComments - List issue comments
     *
     * Issue Comments are ordered by ascending ID.
     *
     * https://docs.github.com/rest/reference/issues#list-issue-comments - API method documentation
    **/
    issuesListComments(req: operations.IssuesListCommentsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListCommentsResponse>;
    /**
     * issuesListCommentsForRepo - List issue comments for a repository
     *
     * By default, Issue Comments are ordered by ascending ID.
     *
     * https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository - API method documentation
    **/
    issuesListCommentsForRepo(req: operations.IssuesListCommentsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListCommentsForRepoResponse>;
    /**
     * issuesListEvents - List issue events
     *
     * https://docs.github.com/rest/reference/issues#list-issue-events - API method documentation
    **/
    issuesListEvents(req: operations.IssuesListEventsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListEventsResponse>;
    /**
     * issuesListEventsForRepo - List issue events for a repository
     *
     * https://docs.github.com/rest/reference/issues#list-issue-events-for-a-repository - API method documentation
    **/
    issuesListEventsForRepo(req: operations.IssuesListEventsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListEventsForRepoResponse>;
    /**
     * issuesListEventsForTimeline - List timeline events for an issue
     *
     * https://docs.github.com/rest/reference/issues#list-timeline-events-for-an-issue - API method documentation
    **/
    issuesListEventsForTimeline(req: operations.IssuesListEventsForTimelineRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListEventsForTimelineResponse>;
    /**
     * issuesListForAuthenticatedUser - List user account issues assigned to the authenticated user
     *
     * List issues across owned and member repositories assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/rest/reference/issues/#list-user-account-issues-assigned-to-the-authenticated-user - API method documentation
    **/
    issuesListForAuthenticatedUser(req: operations.IssuesListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListForAuthenticatedUserResponse>;
    /**
     * issuesListForOrg - List organization issues assigned to the authenticated user
     *
     * List issues in an organization assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/rest/reference/issues/#list-organization-issues-assigned-to-the-authenticated-user - API method documentation
    **/
    issuesListForOrg(req: operations.IssuesListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListForOrgResponse>;
    /**
     * issuesListForRepo - List repository issues
     *
     * List issues in a repository.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/rest/reference/issues/#list-repository-issues - API method documentation
    **/
    issuesListForRepo(req: operations.IssuesListForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListForRepoResponse>;
    /**
     * issuesListLabelsForMilestone - List labels for issues in a milestone
     *
     * https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone - API method documentation
    **/
    issuesListLabelsForMilestone(req: operations.IssuesListLabelsForMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListLabelsForMilestoneResponse>;
    /**
     * issuesListLabelsForRepo - List labels for a repository
     *
     * https://docs.github.com/rest/reference/issues#list-labels-for-a-repository - API method documentation
    **/
    issuesListLabelsForRepo(req: operations.IssuesListLabelsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListLabelsForRepoResponse>;
    /**
     * issuesListLabelsOnIssue - List labels for an issue
     *
     * https://docs.github.com/rest/reference/issues#list-labels-for-an-issue - API method documentation
    **/
    issuesListLabelsOnIssue(req: operations.IssuesListLabelsOnIssueRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListLabelsOnIssueResponse>;
    /**
     * issuesListMilestones - List milestones
     *
     * https://docs.github.com/rest/reference/issues#list-milestones - API method documentation
    **/
    issuesListMilestones(req: operations.IssuesListMilestonesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListMilestonesResponse>;
    /**
     * issuesLock - Lock an issue
     *
     * Users with push access can lock an issue or pull request's conversation.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/rest/reference/issues/#lock-an-issue - API method documentation
    **/
    issuesLock(req: operations.IssuesLockRequest, config?: AxiosRequestConfig): Promise<operations.IssuesLockResponse>;
    /**
     * issuesRemoveAllLabels - Remove all labels from an issue
     *
     * https://docs.github.com/rest/reference/issues#remove-all-labels-from-an-issue - API method documentation
    **/
    issuesRemoveAllLabels(req: operations.IssuesRemoveAllLabelsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesRemoveAllLabelsResponse>;
    /**
     * issuesRemoveAssignees - Remove assignees from an issue
     *
     * Removes one or more assignees from an issue.
     *
     * https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue - API method documentation
    **/
    issuesRemoveAssignees(req: operations.IssuesRemoveAssigneesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesRemoveAssigneesResponse>;
    /**
     * issuesRemoveLabel - Remove a label from an issue
     *
     * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
     *
     * https://docs.github.com/rest/reference/issues#remove-a-label-from-an-issue - API method documentation
    **/
    issuesRemoveLabel(req: operations.IssuesRemoveLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesRemoveLabelResponse>;
    /**
     * issuesSetLabels - Set labels for an issue
     *
     * Removes any previous labels and sets the new labels for an issue.
     *
     * https://docs.github.com/rest/reference/issues#set-labels-for-an-issue - API method documentation
    **/
    issuesSetLabels(req: operations.IssuesSetLabelsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesSetLabelsResponse>;
    /**
     * issuesUnlock - Unlock an issue
     *
     * Users with push access can unlock an issue's conversation.
     *
     * https://docs.github.com/rest/reference/issues/#unlock-an-issue - API method documentation
    **/
    issuesUnlock(req: operations.IssuesUnlockRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUnlockResponse>;
    /**
     * issuesUpdate - Update an issue
     *
     * Issue owners and users with push access can edit an issue.
     *
     * https://docs.github.com/rest/reference/issues/#update-an-issue - API method documentation
    **/
    issuesUpdate(req: operations.IssuesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateResponse>;
    /**
     * issuesUpdateComment - Update an issue comment
     *
     * https://docs.github.com/rest/reference/issues#update-an-issue-comment - API method documentation
    **/
    issuesUpdateComment(req: operations.IssuesUpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateCommentResponse>;
    /**
     * issuesUpdateLabel - Update a label
     *
     * https://docs.github.com/rest/reference/issues#update-a-label - API method documentation
    **/
    issuesUpdateLabel(req: operations.IssuesUpdateLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateLabelResponse>;
    /**
     * issuesUpdateMilestone - Update a milestone
     *
     * https://docs.github.com/rest/reference/issues#update-a-milestone - API method documentation
    **/
    issuesUpdateMilestone(req: operations.IssuesUpdateMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateMilestoneResponse>;
    /**
     * licensesGet - Get a license
     *
     * https://docs.github.com/rest/reference/licenses/#get-a-license - API method documentation
    **/
    licensesGet(req: operations.LicensesGetRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetResponse>;
    /**
     * licensesGetAllCommonlyUsed - Get all commonly used licenses
     *
     * https://docs.github.com/rest/reference/licenses/#get-all-commonly-used-licenses - API method documentation
    **/
    licensesGetAllCommonlyUsed(req: operations.LicensesGetAllCommonlyUsedRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetAllCommonlyUsedResponse>;
    /**
     * licensesGetForRepo - Get the license for a repository
     *
     * This method returns the contents of the repository's license file, if one is detected.
     *
     * Similar to [Get repository content](https://docs.github.com/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
     *
     * https://docs.github.com/rest/reference/licenses/#get-the-license-for-a-repository - API method documentation
    **/
    licensesGetForRepo(req: operations.LicensesGetForRepoRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetForRepoResponse>;
    /**
     * markdownRender - Render a Markdown document
     *
     * https://docs.github.com/rest/reference/markdown/#render-a-markdown-document - API method documentation
    **/
    markdownRender(req: operations.MarkdownRenderRequest, config?: AxiosRequestConfig): Promise<operations.MarkdownRenderResponse>;
    /**
     * markdownRenderRaw - Render a Markdown document in raw mode
     *
     * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
     *
     * https://docs.github.com/rest/reference/markdown/#render-a-markdown-document-in-raw-mode - API method documentation
    **/
    markdownRenderRaw(req: operations.MarkdownRenderRawRequest, config?: AxiosRequestConfig): Promise<operations.MarkdownRenderRawResponse>;
    /**
     * metaGet - Get GitHub meta information
     *
     * Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."
     *
     * **Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses.
     *
     * https://docs.github.com/rest/reference/meta/#get-github-meta-information - API method documentation
    **/
    metaGet(config?: AxiosRequestConfig): Promise<operations.MetaGetResponse>;
    /**
     * metaGetOctocat - Get Octocat
     *
     * Get the octocat as ASCII art
    **/
    metaGetOctocat(req: operations.MetaGetOctocatRequest, config?: AxiosRequestConfig): Promise<operations.MetaGetOctocatResponse>;
    /**
     * metaGetZen - Get the Zen of GitHub
     *
     * Get a random sentence from the Zen of GitHub
    **/
    metaGetZen(config?: AxiosRequestConfig): Promise<operations.MetaGetZenResponse>;
    /**
     * metaRoot - GitHub API Root
     *
     * Get Hypermedia links to resources accessible in GitHub's REST API
    **/
    metaRoot(config?: AxiosRequestConfig): Promise<operations.MetaRootResponse>;
    /**
     * migrationsCancelImport - Cancel an import
     *
     * Stop an import for a repository.
     *
     * https://docs.github.com/rest/reference/migrations#cancel-an-import - API method documentation
    **/
    migrationsCancelImport(req: operations.MigrationsCancelImportRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsCancelImportResponse>;
    /**
     * migrationsDeleteArchiveForAuthenticatedUser - Delete a user migration archive
     *
     * Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/reference/migrations#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
     *
     * https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive - API method documentation
    **/
    migrationsDeleteArchiveForAuthenticatedUser(req: operations.MigrationsDeleteArchiveForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsDeleteArchiveForAuthenticatedUserResponse>;
    /**
     * migrationsDeleteArchiveForOrg - Delete an organization migration archive
     *
     * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
     *
     * https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive - API method documentation
    **/
    migrationsDeleteArchiveForOrg(req: operations.MigrationsDeleteArchiveForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsDeleteArchiveForOrgResponse>;
    /**
     * migrationsDownloadArchiveForOrg - Download an organization migration archive
     *
     * Fetches the URL to a migration archive.
     *
     * https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive - API method documentation
    **/
    migrationsDownloadArchiveForOrg(req: operations.MigrationsDownloadArchiveForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsDownloadArchiveForOrgResponse>;
    /**
     * migrationsGetArchiveForAuthenticatedUser - Download a user migration archive
     *
     * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
     *
     * *   attachments
     * *   bases
     * *   commit\_comments
     * *   issue\_comments
     * *   issue\_events
     * *   issues
     * *   milestones
     * *   organizations
     * *   projects
     * *   protected\_branches
     * *   pull\_request\_reviews
     * *   pull\_requests
     * *   releases
     * *   repositories
     * *   review\_comments
     * *   schema
     * *   users
     *
     * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
     *
     * https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive - API method documentation
    **/
    migrationsGetArchiveForAuthenticatedUser(req: operations.MigrationsGetArchiveForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetArchiveForAuthenticatedUserResponse>;
    /**
     * migrationsGetCommitAuthors - Get commit authors
     *
     * Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
     *
     * This endpoint and the [Map a commit author](https://docs.github.com/rest/reference/migrations#map-a-commit-author) endpoint allow you to provide correct Git author information.
     *
     * https://docs.github.com/rest/reference/migrations#get-commit-authors - API method documentation
    **/
    migrationsGetCommitAuthors(req: operations.MigrationsGetCommitAuthorsRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetCommitAuthorsResponse>;
    /**
     * migrationsGetImportStatus - Get an import status
     *
     * View the progress of an import.
     *
     * **Import status**
     *
     * This section includes details about the possible values of the `status` field of the Import Progress response.
     *
     * An import that does not have errors will progress through these steps:
     *
     * *   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
     * *   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
     * *   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
     * *   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
     * *   `complete` - the import is complete, and the repository is ready on GitHub.
     *
     * If there are problems, you will see one of these in the `status` field:
     *
     * *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
     * *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
     * *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
     * *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/reference/migrations#cancel-an-import) and [retry](https://docs.github.com/rest/reference/migrations#start-an-import) with the correct URL.
     * *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
     *
     * **The project_choices field**
     *
     * When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
     *
     * **Git LFS related fields**
     *
     * This section includes details about Git LFS related fields that may be present in the Import Progress response.
     *
     * *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
     * *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
     * *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
     * *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.
     *
     * https://docs.github.com/rest/reference/migrations#get-an-import-status - API method documentation
    **/
    migrationsGetImportStatus(req: operations.MigrationsGetImportStatusRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetImportStatusResponse>;
    /**
     * migrationsGetLargeFiles - Get large files
     *
     * List files larger than 100MB found during the import
     *
     * https://docs.github.com/rest/reference/migrations#get-large-files - API method documentation
    **/
    migrationsGetLargeFiles(req: operations.MigrationsGetLargeFilesRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetLargeFilesResponse>;
    /**
     * migrationsGetStatusForAuthenticatedUser - Get a user migration status
     *
     * Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
     *
     * *   `pending` - the migration hasn't started yet.
     * *   `exporting` - the migration is in progress.
     * *   `exported` - the migration finished successfully.
     * *   `failed` - the migration failed.
     *
     * Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).
     *
     * https://docs.github.com/rest/reference/migrations#get-a-user-migration-status - API method documentation
    **/
    migrationsGetStatusForAuthenticatedUser(req: operations.MigrationsGetStatusForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetStatusForAuthenticatedUserResponse>;
    /**
     * migrationsGetStatusForOrg - Get an organization migration status
     *
     * Fetches the status of a migration.
     *
     * The `state` of a migration can be one of the following values:
     *
     * *   `pending`, which means the migration hasn't started yet.
     * *   `exporting`, which means the migration is in progress.
     * *   `exported`, which means the migration finished successfully.
     * *   `failed`, which means the migration failed.
     *
     * https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status - API method documentation
    **/
    migrationsGetStatusForOrg(req: operations.MigrationsGetStatusForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetStatusForOrgResponse>;
    /**
     * migrationsListForAuthenticatedUser - List user migrations
     *
     * Lists all migrations a user has started.
     *
     * https://docs.github.com/rest/reference/migrations#list-user-migrations - API method documentation
    **/
    migrationsListForAuthenticatedUser(req: operations.MigrationsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListForAuthenticatedUserResponse>;
    /**
     * migrationsListForOrg - List organization migrations
     *
     * Lists the most recent migrations.
     *
     * https://docs.github.com/rest/reference/migrations#list-organization-migrations - API method documentation
    **/
    migrationsListForOrg(req: operations.MigrationsListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListForOrgResponse>;
    /**
     * migrationsListReposForOrg - List repositories in an organization migration
     *
     * List all the repositories for this organization migration.
     *
     * https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration - API method documentation
    **/
    migrationsListReposForOrg(req: operations.MigrationsListReposForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListReposForOrgResponse>;
    /**
     * migrationsListReposForUser - List repositories for a user migration
     *
     * Lists all the repositories for this user migration.
     *
     * https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration - API method documentation
    **/
    migrationsListReposForUser(req: operations.MigrationsListReposForUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListReposForUserResponse>;
    /**
     * migrationsMapCommitAuthor - Map a commit author
     *
     * Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
     *
     * https://docs.github.com/rest/reference/migrations#map-a-commit-author - API method documentation
    **/
    migrationsMapCommitAuthor(req: operations.MigrationsMapCommitAuthorRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsMapCommitAuthorResponse>;
    /**
     * migrationsSetLfsPreference - Update Git LFS preference
     *
     * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
     *
     * https://docs.github.com/rest/reference/migrations#update-git-lfs-preference - API method documentation
    **/
    migrationsSetLfsPreference(req: operations.MigrationsSetLfsPreferenceRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsSetLfsPreferenceResponse>;
    /**
     * migrationsStartForAuthenticatedUser - Start a user migration
     *
     * Initiates the generation of a user migration archive.
     *
     * https://docs.github.com/rest/reference/migrations#start-a-user-migration - API method documentation
    **/
    migrationsStartForAuthenticatedUser(req: operations.MigrationsStartForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsStartForAuthenticatedUserResponse>;
    /**
     * migrationsStartForOrg - Start an organization migration
     *
     * Initiates the generation of a migration archive.
     *
     * https://docs.github.com/rest/reference/migrations#start-an-organization-migration - API method documentation
    **/
    migrationsStartForOrg(req: operations.MigrationsStartForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsStartForOrgResponse>;
    /**
     * migrationsStartImport - Start an import
     *
     * Start a source import to a GitHub repository using GitHub Importer.
     *
     * https://docs.github.com/rest/reference/migrations#start-an-import - API method documentation
    **/
    migrationsStartImport(req: operations.MigrationsStartImportRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsStartImportResponse>;
    /**
     * migrationsUnlockRepoForAuthenticatedUser - Unlock a user repository
     *
     * Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
     *
     * https://docs.github.com/rest/reference/migrations#unlock-a-user-repository - API method documentation
    **/
    migrationsUnlockRepoForAuthenticatedUser(req: operations.MigrationsUnlockRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsUnlockRepoForAuthenticatedUserResponse>;
    /**
     * migrationsUnlockRepoForOrg - Unlock an organization repository
     *
     * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
     *
     * https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository - API method documentation
    **/
    migrationsUnlockRepoForOrg(req: operations.MigrationsUnlockRepoForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsUnlockRepoForOrgResponse>;
    /**
     * migrationsUpdateImport - Update an import
     *
     * An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
     * request. If no parameters are provided, the import will be restarted.
     *
     * https://docs.github.com/rest/reference/migrations#update-an-import - API method documentation
    **/
    migrationsUpdateImport(req: operations.MigrationsUpdateImportRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsUpdateImportResponse>;
    /**
     * oauthAuthorizationsCreateAuthorization - Create a new authorization
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * **Warning:** Apps must use the [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
     *
     * Creates OAuth tokens using [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
     *
     * To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.
     *
     * You can also create tokens on GitHub from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).
     *
     * Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#create-a-new-authorization - API method documentation
    **/
    oauthAuthorizationsCreateAuthorization(req: operations.OauthAuthorizationsCreateAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsCreateAuthorizationResponse>;
    /**
     * oauthAuthorizationsDeleteAuthorization - Delete an authorization
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#delete-an-authorization - API method documentation
    **/
    oauthAuthorizationsDeleteAuthorization(req: operations.OauthAuthorizationsDeleteAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsDeleteAuthorizationResponse>;
    /**
     * oauthAuthorizationsDeleteGrant - Delete a grant
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#delete-a-grant - API method documentation
    **/
    oauthAuthorizationsDeleteGrant(req: operations.OauthAuthorizationsDeleteGrantRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsDeleteGrantResponse>;
    /**
     * oauthAuthorizationsGetAuthorization - Get a single authorization
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#get-a-single-authorization - API method documentation
    **/
    oauthAuthorizationsGetAuthorization(req: operations.OauthAuthorizationsGetAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetAuthorizationResponse>;
    /**
     * oauthAuthorizationsGetGrant - Get a single grant
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#get-a-single-grant - API method documentation
    **/
    oauthAuthorizationsGetGrant(req: operations.OauthAuthorizationsGetGrantRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetGrantResponse>;
    /**
     * oauthAuthorizationsGetOrCreateAuthorizationForApp - Get-or-create an authorization for a specific app
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * **Warning:** Apps must use the [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
     *
     * Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
     *
     * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app - API method documentation
    **/
    oauthAuthorizationsGetOrCreateAuthorizationForApp(req: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse>;
    /**
     * oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint - Get-or-create an authorization for a specific app and fingerprint
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * **Warning:** Apps must use the [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
     *
     * This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
     *
     * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint - API method documentation
    **/
    oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(req: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse>;
    /**
     * oauthAuthorizationsListAuthorizations - List your authorizations
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#list-your-authorizations - API method documentation
    **/
    oauthAuthorizationsListAuthorizations(req: operations.OauthAuthorizationsListAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsListAuthorizationsResponse>;
    /**
     * oauthAuthorizationsListGrants - List your grants
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#list-your-grants - API method documentation
    **/
    oauthAuthorizationsListGrants(req: operations.OauthAuthorizationsListGrantsRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsListGrantsResponse>;
    /**
     * oauthAuthorizationsUpdateAuthorization - Update an existing authorization
     *
     * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
     *
     * You can only send one of these scope keys at a time.
     *
     * https://docs.github.com/rest/reference/oauth-authorizations#update-an-existing-authorization - API method documentation
    **/
    oauthAuthorizationsUpdateAuthorization(req: operations.OauthAuthorizationsUpdateAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsUpdateAuthorizationResponse>;
    /**
     * orgsBlockUser - Block a user from an organization
     *
     * https://docs.github.com/rest/reference/orgs#block-a-user-from-an-organization - API method documentation
    **/
    orgsBlockUser(req: operations.OrgsBlockUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsBlockUserResponse>;
    /**
     * orgsCancelInvitation - Cancel an organization invitation
     *
     * Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications).
     *
     * https://docs.github.com/rest/reference/orgs#cancel-an-organization-invitation - API method documentation
    **/
    orgsCancelInvitation(req: operations.OrgsCancelInvitationRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCancelInvitationResponse>;
    /**
     * orgsCheckBlockedUser - Check if a user is blocked by an organization
     *
     * https://docs.github.com/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization - API method documentation
    **/
    orgsCheckBlockedUser(req: operations.OrgsCheckBlockedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckBlockedUserResponse>;
    /**
     * orgsCheckMembershipForUser - Check organization membership for a user
     *
     * Check if a user is, publicly or privately, a member of the organization.
     *
     * https://docs.github.com/rest/reference/orgs#check-organization-membership-for-a-user - API method documentation
    **/
    orgsCheckMembershipForUser(req: operations.OrgsCheckMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckMembershipForUserResponse>;
    /**
     * orgsCheckPublicMembershipForUser - Check public organization membership for a user
     *
     * https://docs.github.com/rest/reference/orgs#check-public-organization-membership-for-a-user - API method documentation
    **/
    orgsCheckPublicMembershipForUser(req: operations.OrgsCheckPublicMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckPublicMembershipForUserResponse>;
    /**
     * orgsConvertMemberToOutsideCollaborator - Convert an organization member to outside collaborator
     *
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".
     *
     * https://docs.github.com/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator - API method documentation
    **/
    orgsConvertMemberToOutsideCollaborator(req: operations.OrgsConvertMemberToOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsConvertMemberToOutsideCollaboratorResponse>;
    /**
     * orgsCreateInvitation - Create an organization invitation
     *
     * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/orgs#create-an-organization-invitation - API method documentation
    **/
    orgsCreateInvitation(req: operations.OrgsCreateInvitationRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateInvitationResponse>;
    /**
     * orgsCreateWebhook - Create an organization webhook
     *
     * Here's how you can create a hook that posts payloads in JSON format:
     *
     * https://docs.github.com/rest/reference/orgs#create-an-organization-webhook - API method documentation
    **/
    orgsCreateWebhook(req: operations.OrgsCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateWebhookResponse>;
    /**
     * orgsDeleteWebhook - Delete an organization webhook
     *
     * https://docs.github.com/rest/reference/orgs#delete-an-organization-webhook - API method documentation
    **/
    orgsDeleteWebhook(req: operations.OrgsDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsDeleteWebhookResponse>;
    /**
     * orgsGet - Get an organization
     *
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub plan information' below."
     *
     * https://docs.github.com/rest/reference/orgs/#get-an-organization - API method documentation
    **/
    orgsGet(req: operations.OrgsGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetResponse>;
    /**
     * orgsGetAuditLog - Get the audit log for an organization
     *
     * **Note:** The audit log REST API is currently in beta and is subject to change.
     *
     * Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)."
     *
     * To use this endpoint, you must be an organization owner, and you must use an access token with the `admin:org` scope. GitHub Apps must have the `organization_administration` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/orgs#get-the-audit-log-for-an-organization - API method documentation
    **/
    orgsGetAuditLog(req: operations.OrgsGetAuditLogRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetAuditLogResponse>;
    /**
     * orgsGetMembershipForAuthenticatedUser - Get an organization membership for the authenticated user
     *
     * https://docs.github.com/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsGetMembershipForAuthenticatedUser(req: operations.OrgsGetMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForAuthenticatedUserResponse>;
    /**
     * orgsGetMembershipForUser - Get organization membership for a user
     *
     * In order to get a user's membership with an organization, the authenticated user must be an organization member.
     *
     * https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user - API method documentation
    **/
    orgsGetMembershipForUser(req: operations.OrgsGetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForUserResponse>;
    /**
     * orgsGetWebhook - Get an organization webhook
     *
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
     *
     * https://docs.github.com/rest/reference/orgs#get-an-organization-webhook - API method documentation
    **/
    orgsGetWebhook(req: operations.OrgsGetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookResponse>;
    /**
     * orgsGetWebhookConfigForOrg - Get a webhook configuration for an organization
     *
     * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.
     *
     * https://docs.github.com/rest/reference/orgs#get-a-webhook-configuration-for-an-organization - API method documentation
    **/
    orgsGetWebhookConfigForOrg(req: operations.OrgsGetWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookConfigForOrgResponse>;
    /**
     * orgsList - List organizations
     *
     * Lists all organizations, in the order that they were created on GitHub.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
     *
     * https://docs.github.com/rest/reference/orgs/#list-organizations - API method documentation
    **/
    orgsList(req: operations.OrgsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListResponse>;
    /**
     * orgsListAppInstallations - List app installations for an organization
     *
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/orgs/#list-app-installations-for-an-organization - API method documentation
    **/
    orgsListAppInstallations(req: operations.OrgsListAppInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListAppInstallationsResponse>;
    /**
     * orgsListBlockedUsers - List users blocked by an organization
     *
     * List the users blocked by an organization.
     *
     * https://docs.github.com/rest/reference/orgs#list-users-blocked-by-an-organization - API method documentation
    **/
    orgsListBlockedUsers(req: operations.OrgsListBlockedUsersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListBlockedUsersResponse>;
    /**
     * orgsListFailedInvitations - List failed organization invitations
     *
     * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
     *
     * https://docs.github.com/rest/reference/orgs#list-failed-organization-invitations - API method documentation
    **/
    orgsListFailedInvitations(req: operations.OrgsListFailedInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListFailedInvitationsResponse>;
    /**
     * orgsListForAuthenticatedUser - List organizations for the authenticated user
     *
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     *
     * https://docs.github.com/rest/reference/orgs/#list-organizations-for-the-authenticated-user - API method documentation
    **/
    orgsListForAuthenticatedUser(req: operations.OrgsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForAuthenticatedUserResponse>;
    /**
     * orgsListForUser - List organizations for a user
     *
     * List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
     *
     * https://docs.github.com/rest/reference/orgs/#list-organizations-for-a-user - API method documentation
    **/
    orgsListForUser(req: operations.OrgsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForUserResponse>;
    /**
     * orgsListInvitationTeams - List organization invitation teams
     *
     * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
     *
     * https://docs.github.com/rest/reference/orgs#list-organization-invitation-teams - API method documentation
    **/
    orgsListInvitationTeams(req: operations.OrgsListInvitationTeamsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListInvitationTeamsResponse>;
    /**
     * orgsListMembers - List organization members
     *
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     *
     * https://docs.github.com/rest/reference/orgs#list-organization-members - API method documentation
    **/
    orgsListMembers(req: operations.OrgsListMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembersResponse>;
    /**
     * orgsListMembershipsForAuthenticatedUser - List organization memberships for the authenticated user
     *
     * https://docs.github.com/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user - API method documentation
    **/
    orgsListMembershipsForAuthenticatedUser(req: operations.OrgsListMembershipsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembershipsForAuthenticatedUserResponse>;
    /**
     * orgsListOutsideCollaborators - List outside collaborators for an organization
     *
     * List all users who are outside collaborators of an organization.
     *
     * https://docs.github.com/rest/reference/orgs#list-outside-collaborators-for-an-organization - API method documentation
    **/
    orgsListOutsideCollaborators(req: operations.OrgsListOutsideCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListOutsideCollaboratorsResponse>;
    /**
     * orgsListPendingInvitations - List pending organization invitations
     *
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     *
     * https://docs.github.com/rest/reference/orgs#list-pending-organization-invitations - API method documentation
    **/
    orgsListPendingInvitations(req: operations.OrgsListPendingInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListPendingInvitationsResponse>;
    /**
     * orgsListPublicMembers - List public organization members
     *
     * Members of an organization can choose to have their membership publicized or not.
     *
     * https://docs.github.com/rest/reference/orgs#list-public-organization-members - API method documentation
    **/
    orgsListPublicMembers(req: operations.OrgsListPublicMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListPublicMembersResponse>;
    /**
     * orgsListSamlSsoAuthorizations - List SAML SSO authorizations for an organization
     *
     * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).
     *
     * An authenticated organization owner with the `read:org` scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://help.github.com/en/articles/about-authentication-with-saml-single-sign-on).
     *
     * https://docs.github.com/rest/reference/orgs/#list-saml-sso-authorizations-for-an-organization - API method documentation
    **/
    orgsListSamlSsoAuthorizations(req: operations.OrgsListSamlSsoAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListSamlSsoAuthorizationsResponse>;
    /**
     * orgsListWebhooks - List organization webhooks
     *
     * https://docs.github.com/rest/reference/orgs#list-organization-webhooks - API method documentation
    **/
    orgsListWebhooks(req: operations.OrgsListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhooksResponse>;
    /**
     * orgsPingWebhook - Ping an organization webhook
     *
     * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
     *
     * https://docs.github.com/rest/reference/orgs#ping-an-organization-webhook - API method documentation
    **/
    orgsPingWebhook(req: operations.OrgsPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsPingWebhookResponse>;
    /**
     * orgsRemoveMember - Remove an organization member
     *
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     *
     * https://docs.github.com/rest/reference/orgs#remove-an-organization-member - API method documentation
    **/
    orgsRemoveMember(req: operations.OrgsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMemberResponse>;
    /**
     * orgsRemoveMembershipForUser - Remove organization membership for a user
     *
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     *
     * https://docs.github.com/rest/reference/orgs#remove-organization-membership-for-a-user - API method documentation
    **/
    orgsRemoveMembershipForUser(req: operations.OrgsRemoveMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMembershipForUserResponse>;
    /**
     * orgsRemoveOutsideCollaborator - Remove outside collaborator from an organization
     *
     * Removing a user from this list will remove them from all the organization's repositories.
     *
     * https://docs.github.com/rest/reference/orgs#remove-outside-collaborator-from-an-organization - API method documentation
    **/
    orgsRemoveOutsideCollaborator(req: operations.OrgsRemoveOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveOutsideCollaboratorResponse>;
    /**
     * orgsRemovePublicMembershipForAuthenticatedUser - Remove public organization membership for the authenticated user
     *
     * https://docs.github.com/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsRemovePublicMembershipForAuthenticatedUser(req: operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse>;
    /**
     * orgsRemoveSamlSsoAuthorization - Remove a SAML SSO authorization for an organization
     *
     * Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).
     *
     * An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.
     *
     * https://docs.github.com/rest/reference/orgs/#remove-a-saml-sso-authorization-for-an-organization - API method documentation
    **/
    orgsRemoveSamlSsoAuthorization(req: operations.OrgsRemoveSamlSsoAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveSamlSsoAuthorizationResponse>;
    /**
     * orgsSetMembershipForUser - Set organization membership for a user
     *
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     *
     * https://docs.github.com/rest/reference/orgs#set-organization-membership-for-a-user - API method documentation
    **/
    orgsSetMembershipForUser(req: operations.OrgsSetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetMembershipForUserResponse>;
    /**
     * orgsSetPublicMembershipForAuthenticatedUser - Set public organization membership for the authenticated user
     *
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsSetPublicMembershipForAuthenticatedUser(req: operations.OrgsSetPublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetPublicMembershipForAuthenticatedUserResponse>;
    /**
     * orgsUnblockUser - Unblock a user from an organization
     *
     * https://docs.github.com/rest/reference/orgs#unblock-a-user-from-an-organization - API method documentation
    **/
    orgsUnblockUser(req: operations.OrgsUnblockUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUnblockUserResponse>;
    /**
     * orgsUpdate - Update an organization
     *
     * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     *
     * https://docs.github.com/rest/reference/orgs/#update-an-organization - API method documentation
    **/
    orgsUpdate(req: operations.OrgsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateResponse>;
    /**
     * orgsUpdateMembershipForAuthenticatedUser - Update an organization membership for the authenticated user
     *
     * https://docs.github.com/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsUpdateMembershipForAuthenticatedUser(req: operations.OrgsUpdateMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateMembershipForAuthenticatedUserResponse>;
    /**
     * orgsUpdateWebhook - Update an organization webhook
     *
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
     *
     * https://docs.github.com/rest/reference/orgs#update-an-organization-webhook - API method documentation
    **/
    orgsUpdateWebhook(req: operations.OrgsUpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookResponse>;
    /**
     * orgsUpdateWebhookConfigForOrg - Update a webhook configuration for an organization
     *
     * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."
     *
     * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
     *
     * https://docs.github.com/rest/reference/orgs#update-a-webhook-configuration-for-an-organization - API method documentation
    **/
    orgsUpdateWebhookConfigForOrg(req: operations.OrgsUpdateWebhookConfigForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookConfigForOrgResponse>;
    /**
     * packagesDeletePackageForAuthenticatedUser - Delete a package for the authenticated user
     *
     * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user - API method documentation
    **/
    packagesDeletePackageForAuthenticatedUser(req: operations.PackagesDeletePackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForAuthenticatedUserResponse>;
    /**
     * packagesDeletePackageForOrg - Delete a package for an organization
     *
     * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization - API method documentation
    **/
    packagesDeletePackageForOrg(req: operations.PackagesDeletePackageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForOrgResponse>;
    /**
     * packagesDeletePackageVersionForAuthenticatedUser - Delete a package version for the authenticated user
     *
     * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user - API method documentation
    **/
    packagesDeletePackageVersionForAuthenticatedUser(req: operations.PackagesDeletePackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForAuthenticatedUserResponse>;
    /**
     * packagesDeletePackageVersionForOrg - Delete package version for an organization
     *
     * Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization - API method documentation
    **/
    packagesDeletePackageVersionForOrg(req: operations.PackagesDeletePackageVersionForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForOrgResponse>;
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser - Get all package versions for a package owned by the authenticated user
     *
     * Returns all package versions for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
    **/
    packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse>;
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByOrg - Get all package versions for a package owned by an organization
     *
     * Returns all package versions for a package owned by an organization.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
    **/
    packagesGetAllPackageVersionsForPackageOwnedByOrg(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse>;
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByUser - Get all package versions for a package owned by a user
     *
     * Returns all package versions for a public package owned by a specified user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user - API method documentation
    **/
    packagesGetAllPackageVersionsForPackageOwnedByUser(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse>;
    /**
     * packagesGetPackageForAuthenticatedUser - Get a package for the authenticated user
     *
     * Gets a specific package for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user - API method documentation
    **/
    packagesGetPackageForAuthenticatedUser(req: operations.PackagesGetPackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForAuthenticatedUserResponse>;
    /**
     * packagesGetPackageForOrganization - Get a package for an organization
     *
     * Gets a specific package in an organization.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization - API method documentation
    **/
    packagesGetPackageForOrganization(req: operations.PackagesGetPackageForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForOrganizationResponse>;
    /**
     * packagesGetPackageForUser - Get a package for a user
     *
     * Gets a specific package metadata for a public package owned by a user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-a-user - API method documentation
    **/
    packagesGetPackageForUser(req: operations.PackagesGetPackageForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForUserResponse>;
    /**
     * packagesGetPackageVersionForAuthenticatedUser - Get a package version for the authenticated user
     *
     * Gets a specific package version for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user - API method documentation
    **/
    packagesGetPackageVersionForAuthenticatedUser(req: operations.PackagesGetPackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForAuthenticatedUserResponse>;
    /**
     * packagesGetPackageVersionForOrganization - Get a package version for an organization
     *
     * Gets a specific package version in an organization.
     *
     * You must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization - API method documentation
    **/
    packagesGetPackageVersionForOrganization(req: operations.PackagesGetPackageVersionForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForOrganizationResponse>;
    /**
     * packagesGetPackageVersionForUser - Get a package version for a user
     *
     * Gets a specific package version for a public package owned by a specified user.
     *
     * At this time, to use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user - API method documentation
    **/
    packagesGetPackageVersionForUser(req: operations.PackagesGetPackageVersionForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForUserResponse>;
    /**
     * packagesRestorePackageForAuthenticatedUser - Restore a package for the authenticated user
     *
     * Restores a package owned by the authenticated user.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user - API method documentation
    **/
    packagesRestorePackageForAuthenticatedUser(req: operations.PackagesRestorePackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForAuthenticatedUserResponse>;
    /**
     * packagesRestorePackageForOrg - Restore a package for an organization
     *
     * Restores an entire package in an organization.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization - API method documentation
    **/
    packagesRestorePackageForOrg(req: operations.PackagesRestorePackageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForOrgResponse>;
    /**
     * packagesRestorePackageVersionForAuthenticatedUser - Restore a package version for the authenticated user
     *
     * Restores a package version owned by the authenticated user.
     *
     * You can restore a deleted package version under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user - API method documentation
    **/
    packagesRestorePackageVersionForAuthenticatedUser(req: operations.PackagesRestorePackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForAuthenticatedUserResponse>;
    /**
     * packagesRestorePackageVersionForOrg - Restore package version for an organization
     *
     * Restores a specific package version in an organization.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization - API method documentation
    **/
    packagesRestorePackageVersionForOrg(req: operations.PackagesRestorePackageVersionForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForOrgResponse>;
    /**
     * projectsAddCollaborator - Add project collaborator
     *
     * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
     *
     * https://docs.github.com/rest/reference/projects#add-project-collaborator - API method documentation
    **/
    projectsAddCollaborator(req: operations.ProjectsAddCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsAddCollaboratorResponse>;
    /**
     * projectsCreateCard - Create a project card
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.
     *
     * Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/rest/reference/projects#create-a-project-card - API method documentation
    **/
    projectsCreateCard(req: operations.ProjectsCreateCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateCardResponse>;
    /**
     * projectsCreateColumn - Create a project column
     *
     * https://docs.github.com/rest/reference/projects#create-a-project-column - API method documentation
    **/
    projectsCreateColumn(req: operations.ProjectsCreateColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateColumnResponse>;
    /**
     * projectsCreateForAuthenticatedUser - Create a user project
     *
     * https://docs.github.com/rest/reference/projects/#create-a-user-project - API method documentation
    **/
    projectsCreateForAuthenticatedUser(req: operations.ProjectsCreateForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForAuthenticatedUserResponse>;
    /**
     * projectsCreateForOrg - Create an organization project
     *
     * Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/rest/reference/projects/#create-an-organization-project - API method documentation
    **/
    projectsCreateForOrg(req: operations.ProjectsCreateForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForOrgResponse>;
    /**
     * projectsCreateForRepo - Create a repository project
     *
     * Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/rest/reference/projects/#create-a-repository-project - API method documentation
    **/
    projectsCreateForRepo(req: operations.ProjectsCreateForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateForRepoResponse>;
    /**
     * projectsDelete - Delete a project
     *
     * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
     *
     * https://docs.github.com/rest/reference/projects/#delete-a-project - API method documentation
    **/
    projectsDelete(req: operations.ProjectsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteResponse>;
    /**
     * projectsDeleteCard - Delete a project card
     *
     * https://docs.github.com/rest/reference/projects#delete-a-project-card - API method documentation
    **/
    projectsDeleteCard(req: operations.ProjectsDeleteCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteCardResponse>;
    /**
     * projectsDeleteColumn - Delete a project column
     *
     * https://docs.github.com/rest/reference/projects#delete-a-project-column - API method documentation
    **/
    projectsDeleteColumn(req: operations.ProjectsDeleteColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsDeleteColumnResponse>;
    /**
     * projectsGet - Get a project
     *
     * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/rest/reference/projects/#get-a-project - API method documentation
    **/
    projectsGet(req: operations.ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetResponse>;
    /**
     * projectsGetCard - Get a project card
     *
     * https://docs.github.com/rest/reference/projects#get-a-project-card - API method documentation
    **/
    projectsGetCard(req: operations.ProjectsGetCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetCardResponse>;
    /**
     * projectsGetColumn - Get a project column
     *
     * https://docs.github.com/rest/reference/projects#get-a-project-column - API method documentation
    **/
    projectsGetColumn(req: operations.ProjectsGetColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetColumnResponse>;
    /**
     * projectsGetPermissionForUser - Get project permission for a user
     *
     * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
     *
     * https://docs.github.com/rest/reference/projects#get-project-permission-for-a-user - API method documentation
    **/
    projectsGetPermissionForUser(req: operations.ProjectsGetPermissionForUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetPermissionForUserResponse>;
    /**
     * projectsListCards - List project cards
     *
     * https://docs.github.com/rest/reference/projects#list-project-cards - API method documentation
    **/
    projectsListCards(req: operations.ProjectsListCardsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListCardsResponse>;
    /**
     * projectsListCollaborators - List project collaborators
     *
     * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
     *
     * https://docs.github.com/rest/reference/projects#list-project-collaborators - API method documentation
    **/
    projectsListCollaborators(req: operations.ProjectsListCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListCollaboratorsResponse>;
    /**
     * projectsListColumns - List project columns
     *
     * https://docs.github.com/rest/reference/projects#list-project-columns - API method documentation
    **/
    projectsListColumns(req: operations.ProjectsListColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListColumnsResponse>;
    /**
     * projectsListForOrg - List organization projects
     *
     * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/rest/reference/projects/#list-organization-projects - API method documentation
    **/
    projectsListForOrg(req: operations.ProjectsListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForOrgResponse>;
    /**
     * projectsListForRepo - List repository projects
     *
     * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/rest/reference/projects/#list-repository-projects - API method documentation
    **/
    projectsListForRepo(req: operations.ProjectsListForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForRepoResponse>;
    /**
     * projectsListForUser - List user projects
     *
     * https://docs.github.com/rest/reference/projects/#list-user-projects - API method documentation
    **/
    projectsListForUser(req: operations.ProjectsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListForUserResponse>;
    /**
     * projectsMoveCard - Move a project card
     *
     * https://docs.github.com/rest/reference/projects#move-a-project-card - API method documentation
    **/
    projectsMoveCard(req: operations.ProjectsMoveCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsMoveCardResponse>;
    /**
     * projectsMoveColumn - Move a project column
     *
     * https://docs.github.com/rest/reference/projects#move-a-project-column - API method documentation
    **/
    projectsMoveColumn(req: operations.ProjectsMoveColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsMoveColumnResponse>;
    /**
     * projectsRemoveCollaborator - Remove user as a collaborator
     *
     * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
     *
     * https://docs.github.com/rest/reference/projects#remove-project-collaborator - API method documentation
    **/
    projectsRemoveCollaborator(req: operations.ProjectsRemoveCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsRemoveCollaboratorResponse>;
    /**
     * projectsUpdate - Update a project
     *
     * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
     *
     * https://docs.github.com/rest/reference/projects/#update-a-project - API method documentation
    **/
    projectsUpdate(req: operations.ProjectsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateResponse>;
    /**
     * projectsUpdateCard - Update an existing project card
     *
     * https://docs.github.com/rest/reference/projects#update-a-project-card - API method documentation
    **/
    projectsUpdateCard(req: operations.ProjectsUpdateCardRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateCardResponse>;
    /**
     * projectsUpdateColumn - Update an existing project column
     *
     * https://docs.github.com/rest/reference/projects#update-a-project-column - API method documentation
    **/
    projectsUpdateColumn(req: operations.ProjectsUpdateColumnRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsUpdateColumnResponse>;
    /**
     * pullsCheckIfMerged - Check if a pull request has been merged
     *
     * https://docs.github.com/rest/reference/pulls/#check-if-a-pull-request-has-been-merged - API method documentation
    **/
    pullsCheckIfMerged(req: operations.PullsCheckIfMergedRequest, config?: AxiosRequestConfig): Promise<operations.PullsCheckIfMergedResponse>;
    /**
     * pullsCreate - Create a pull request
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     *
     * You can create a new pull request.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/pulls/#create-a-pull-request - API method documentation
    **/
    pullsCreate(req: operations.PullsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateResponse>;
    /**
     * pullsCreateReplyForReviewComment - Create a reply for a review comment
     *
     * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/pulls#create-a-reply-for-a-review-comment - API method documentation
    **/
    pullsCreateReplyForReviewComment(req: operations.PullsCreateReplyForReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateReplyForReviewCommentResponse>;
    /**
     * pullsCreateReview - Create a review for a pull request
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.
     *
     * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) endpoint.
     *
     * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * https://docs.github.com/rest/reference/pulls#create-a-review-for-a-pull-request - API method documentation
    **/
    pullsCreateReview(req: operations.PullsCreateReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateReviewResponse>;
    /**
     * pullsCreateReviewComment - Create a review comment for a pull request
     *
     *
     * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
     *
     * You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).
     *
     * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/pulls#create-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsCreateReviewComment(req: operations.PullsCreateReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateReviewCommentResponse>;
    /**
     * pullsDeletePendingReview - Delete a pending review for a pull request
     *
     * https://docs.github.com/rest/reference/pulls#delete-a-pending-review-for-a-pull-request - API method documentation
    **/
    pullsDeletePendingReview(req: operations.PullsDeletePendingReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsDeletePendingReviewResponse>;
    /**
     * pullsDeleteReviewComment - Delete a review comment for a pull request
     *
     * Deletes a review comment.
     *
     * https://docs.github.com/rest/reference/pulls#delete-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsDeleteReviewComment(req: operations.PullsDeleteReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsDeleteReviewCommentResponse>;
    /**
     * pullsDismissReview - Dismiss a review for a pull request
     *
     * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
     *
     * https://docs.github.com/rest/reference/pulls#dismiss-a-review-for-a-pull-request - API method documentation
    **/
    pullsDismissReview(req: operations.PullsDismissReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsDismissReviewResponse>;
    /**
     * pullsGet - Get a pull request
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists details of a pull request by providing its number.
     *
     * When you get, [create](https://docs.github.com/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/reference/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
     *
     * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
     *
     * *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
     * *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
     * *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
     *
     * Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * https://docs.github.com/rest/reference/pulls/#get-a-pull-request - API method documentation
    **/
    pullsGet(req: operations.PullsGetRequest, config?: AxiosRequestConfig): Promise<operations.PullsGetResponse>;
    /**
     * pullsGetReview - Get a review for a pull request
     *
     * https://docs.github.com/rest/reference/pulls#get-a-review-for-a-pull-request - API method documentation
    **/
    pullsGetReview(req: operations.PullsGetReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsGetReviewResponse>;
    /**
     * pullsGetReviewComment - Get a review comment for a pull request
     *
     * Provides details for a review comment.
     *
     * https://docs.github.com/rest/reference/pulls#get-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsGetReviewComment(req: operations.PullsGetReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsGetReviewCommentResponse>;
    /**
     * pullsList - List pull requests
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/pulls/#list-pull-requests - API method documentation
    **/
    pullsList(req: operations.PullsListRequest, config?: AxiosRequestConfig): Promise<operations.PullsListResponse>;
    /**
     * pullsListCommentsForReview - List comments for a pull request review
     *
     * List comments for a specific pull request review.
     *
     * https://docs.github.com/rest/reference/pulls#list-comments-for-a-pull-request-review - API method documentation
    **/
    pullsListCommentsForReview(req: operations.PullsListCommentsForReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsListCommentsForReviewResponse>;
    /**
     * pullsListCommits - List commits on a pull request
     *
     * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/rest/reference/repos#list-commits) endpoint.
     *
     * https://docs.github.com/rest/reference/pulls/#list-commits-on-a-pull-request - API method documentation
    **/
    pullsListCommits(req: operations.PullsListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.PullsListCommitsResponse>;
    /**
     * pullsListFiles - List pull requests files
     *
     * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
     *
     * https://docs.github.com/rest/reference/pulls/#list-pull-requests-files - API method documentation
    **/
    pullsListFiles(req: operations.PullsListFilesRequest, config?: AxiosRequestConfig): Promise<operations.PullsListFilesResponse>;
    /**
     * pullsListRequestedReviewers - List requested reviewers for a pull request
     *
     * https://docs.github.com/rest/reference/pulls#list-requested-reviewers-for-a-pull-request - API method documentation
    **/
    pullsListRequestedReviewers(req: operations.PullsListRequestedReviewersRequest, config?: AxiosRequestConfig): Promise<operations.PullsListRequestedReviewersResponse>;
    /**
     * pullsListReviewComments - List review comments on a pull request
     *
     * Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
     *
     * https://docs.github.com/rest/reference/pulls#list-review-comments-on-a-pull-request - API method documentation
    **/
    pullsListReviewComments(req: operations.PullsListReviewCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PullsListReviewCommentsResponse>;
    /**
     * pullsListReviewCommentsForRepo - List review comments in a repository
     *
     * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
     *
     * https://docs.github.com/rest/reference/pulls#list-review-comments-in-a-repository - API method documentation
    **/
    pullsListReviewCommentsForRepo(req: operations.PullsListReviewCommentsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.PullsListReviewCommentsForRepoResponse>;
    /**
     * pullsListReviews - List reviews for a pull request
     *
     * The list of reviews returns in chronological order.
     *
     * https://docs.github.com/rest/reference/pulls#list-reviews-for-a-pull-request - API method documentation
    **/
    pullsListReviews(req: operations.PullsListReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PullsListReviewsResponse>;
    /**
     * pullsMerge - Merge a pull request
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/pulls/#merge-a-pull-request - API method documentation
    **/
    pullsMerge(req: operations.PullsMergeRequest, config?: AxiosRequestConfig): Promise<operations.PullsMergeResponse>;
    /**
     * pullsRemoveRequestedReviewers - Remove requested reviewers from a pull request
     *
     * https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request - API method documentation
    **/
    pullsRemoveRequestedReviewers(req: operations.PullsRemoveRequestedReviewersRequest, config?: AxiosRequestConfig): Promise<operations.PullsRemoveRequestedReviewersResponse>;
    /**
     * pullsRequestReviewers - Request reviewers for a pull request
     *
     * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/pulls#request-reviewers-for-a-pull-request - API method documentation
    **/
    pullsRequestReviewers(req: operations.PullsRequestReviewersRequest, config?: AxiosRequestConfig): Promise<operations.PullsRequestReviewersResponse>;
    /**
     * pullsSubmitReview - Submit a review for a pull request
     *
     * https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request - API method documentation
    **/
    pullsSubmitReview(req: operations.PullsSubmitReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsSubmitReviewResponse>;
    /**
     * pullsUpdate - Update a pull request
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
     *
     * https://docs.github.com/rest/reference/pulls/#update-a-pull-request - API method documentation
    **/
    pullsUpdate(req: operations.PullsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateResponse>;
    /**
     * pullsUpdateBranch - Update a pull request branch
     *
     * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
     *
     * https://docs.github.com/rest/reference/pulls/#update-a-pull-request-branch - API method documentation
    **/
    pullsUpdateBranch(req: operations.PullsUpdateBranchRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateBranchResponse>;
    /**
     * pullsUpdateReview - Update a review for a pull request
     *
     * Update the review summary comment with new text.
     *
     * https://docs.github.com/rest/reference/pulls#update-a-review-for-a-pull-request - API method documentation
    **/
    pullsUpdateReview(req: operations.PullsUpdateReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateReviewResponse>;
    /**
     * pullsUpdateReviewComment - Update a review comment for a pull request
     *
     * Enables you to edit a review comment.
     *
     * https://docs.github.com/rest/reference/pulls#update-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsUpdateReviewComment(req: operations.PullsUpdateReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateReviewCommentResponse>;
    /**
     * rateLimitGet - Get rate limit status for the authenticated user
     *
     * **Note:** Accessing this endpoint does not count against your REST API rate limit.
     *
     * **Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
     *
     * https://docs.github.com/rest/reference/rate_limit/#get-rate-limit-status-for-the-authenticated-user - API method documentation
    **/
    rateLimitGet(config?: AxiosRequestConfig): Promise<operations.RateLimitGetResponse>;
    /**
     * reactionsCreateForCommitComment - Create reaction for a commit comment
     *
     * Create a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-commit-comment - API method documentation
    **/
    reactionsCreateForCommitComment(req: operations.ReactionsCreateForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForCommitCommentResponse>;
    /**
     * reactionsCreateForIssue - Create reaction for an issue
     *
     * Create a reaction to an [issue](https://docs.github.com/rest/reference/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-an-issue - API method documentation
    **/
    reactionsCreateForIssue(req: operations.ReactionsCreateForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueResponse>;
    /**
     * reactionsCreateForIssueComment - Create reaction for an issue comment
     *
     * Create a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments). A response with a `Status: 200 OK` means that you already added the reaction type to this issue comment.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-an-issue-comment - API method documentation
    **/
    reactionsCreateForIssueComment(req: operations.ReactionsCreateForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueCommentResponse>;
    /**
     * reactionsCreateForPullRequestReviewComment - Create reaction for a pull request review comment
     *
     * Create a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#comments). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-pull-request-review-comment - API method documentation
    **/
    reactionsCreateForPullRequestReviewComment(req: operations.ReactionsCreateForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForPullRequestReviewCommentResponse>;
    /**
     * reactionsCreateForTeamDiscussionCommentInOrg - Create reaction for a team discussion comment
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment - API method documentation
    **/
    reactionsCreateForTeamDiscussionCommentInOrg(req: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse>;
    /**
     * reactionsCreateForTeamDiscussionCommentLegacy - Create reaction for a team discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy - API method documentation
    **/
    reactionsCreateForTeamDiscussionCommentLegacy(req: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse>;
    /**
     * reactionsCreateForTeamDiscussionInOrg - Create reaction for a team discussion
     *
     * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion - API method documentation
    **/
    reactionsCreateForTeamDiscussionInOrg(req: operations.ReactionsCreateForTeamDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionInOrgResponse>;
    /**
     * reactionsCreateForTeamDiscussionLegacy - Create reaction for a team discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
     *
     * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.
     *
     * https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy - API method documentation
    **/
    reactionsCreateForTeamDiscussionLegacy(req: operations.ReactionsCreateForTeamDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionLegacyResponse>;
    /**
     * reactionsDeleteForCommitComment - Delete a commit comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-a-commit-comment-reaction - API method documentation
    **/
    reactionsDeleteForCommitComment(req: operations.ReactionsDeleteForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForCommitCommentResponse>;
    /**
     * reactionsDeleteForIssue - Delete an issue reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://docs.github.com/rest/reference/issues/).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-an-issue-reaction - API method documentation
    **/
    reactionsDeleteForIssue(req: operations.ReactionsDeleteForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForIssueResponse>;
    /**
     * reactionsDeleteForIssueComment - Delete an issue comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-an-issue-comment-reaction - API method documentation
    **/
    reactionsDeleteForIssueComment(req: operations.ReactionsDeleteForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForIssueCommentResponse>;
    /**
     * reactionsDeleteForPullRequestComment - Delete a pull request comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-a-pull-request-comment-reaction - API method documentation
    **/
    reactionsDeleteForPullRequestComment(req: operations.ReactionsDeleteForPullRequestCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForPullRequestCommentResponse>;
    /**
     * reactionsDeleteForTeamDiscussion - Delete team discussion reaction
     *
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-team-discussion-reaction - API method documentation
    **/
    reactionsDeleteForTeamDiscussion(req: operations.ReactionsDeleteForTeamDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForTeamDiscussionResponse>;
    /**
     * reactionsDeleteForTeamDiscussionComment - Delete team discussion comment reaction
     *
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-team-discussion-comment-reaction - API method documentation
    **/
    reactionsDeleteForTeamDiscussionComment(req: operations.ReactionsDeleteForTeamDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForTeamDiscussionCommentResponse>;
    /**
     * reactionsDeleteLegacy - Delete a reaction (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments).
     *
     * https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy - API method documentation
    **/
    reactionsDeleteLegacy(req: operations.ReactionsDeleteLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteLegacyResponse>;
    /**
     * reactionsListForCommitComment - List reactions for a commit comment
     *
     * List the reactions to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-commit-comment - API method documentation
    **/
    reactionsListForCommitComment(req: operations.ReactionsListForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForCommitCommentResponse>;
    /**
     * reactionsListForIssue - List reactions for an issue
     *
     * List the reactions to an [issue](https://docs.github.com/rest/reference/issues).
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-an-issue - API method documentation
    **/
    reactionsListForIssue(req: operations.ReactionsListForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueResponse>;
    /**
     * reactionsListForIssueComment - List reactions for an issue comment
     *
     * List the reactions to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-an-issue-comment - API method documentation
    **/
    reactionsListForIssueComment(req: operations.ReactionsListForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueCommentResponse>;
    /**
     * reactionsListForPullRequestReviewComment - List reactions for a pull request review comment
     *
     * List the reactions to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-pull-request-review-comment - API method documentation
    **/
    reactionsListForPullRequestReviewComment(req: operations.ReactionsListForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForPullRequestReviewCommentResponse>;
    /**
     * reactionsListForTeamDiscussionCommentInOrg - List reactions for a team discussion comment
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment - API method documentation
    **/
    reactionsListForTeamDiscussionCommentInOrg(req: operations.ReactionsListForTeamDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentInOrgResponse>;
    /**
     * reactionsListForTeamDiscussionCommentLegacy - List reactions for a team discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy - API method documentation
    **/
    reactionsListForTeamDiscussionCommentLegacy(req: operations.ReactionsListForTeamDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentLegacyResponse>;
    /**
     * reactionsListForTeamDiscussionInOrg - List reactions for a team discussion
     *
     * List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion - API method documentation
    **/
    reactionsListForTeamDiscussionInOrg(req: operations.ReactionsListForTeamDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionInOrgResponse>;
    /**
     * reactionsListForTeamDiscussionLegacy - List reactions for a team discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
     *
     * List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy - API method documentation
    **/
    reactionsListForTeamDiscussionLegacy(req: operations.ReactionsListForTeamDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionLegacyResponse>;
    /**
     * reposAcceptInvitation - Accept a repository invitation
     *
     * https://docs.github.com/rest/reference/repos#accept-a-repository-invitation - API method documentation
    **/
    reposAcceptInvitation(req: operations.ReposAcceptInvitationRequest, config?: AxiosRequestConfig): Promise<operations.ReposAcceptInvitationResponse>;
    /**
     * reposAddAppAccessRestrictions - Add app access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#add-app-access-restrictions - API method documentation
    **/
    reposAddAppAccessRestrictions(req: operations.ReposAddAppAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddAppAccessRestrictionsResponse>;
    /**
     * reposAddCollaborator - Add a repository collaborator
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/rest/reference/repos#invitations).
     *
     * **Rate limits**
     *
     * To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     *
     * https://docs.github.com/rest/reference/repos#add-a-repository-collaborator - API method documentation
    **/
    reposAddCollaborator(req: operations.ReposAddCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddCollaboratorResponse>;
    /**
     * reposAddStatusCheckContexts - Add status check contexts
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#add-status-check-contexts - API method documentation
    **/
    reposAddStatusCheckContexts(req: operations.ReposAddStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddStatusCheckContextsResponse>;
    /**
     * reposAddTeamAccessRestrictions - Add team access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified teams push access for this branch. You can also give push access to child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#add-team-access-restrictions - API method documentation
    **/
    reposAddTeamAccessRestrictions(req: operations.ReposAddTeamAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddTeamAccessRestrictionsResponse>;
    /**
     * reposAddUserAccessRestrictions - Add user access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Grants the specified people push access for this branch.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#add-user-access-restrictions - API method documentation
    **/
    reposAddUserAccessRestrictions(req: operations.ReposAddUserAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposAddUserAccessRestrictionsResponse>;
    /**
     * reposCheckCollaborator - Check if a user is a repository collaborator
     *
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     *
     * https://docs.github.com/rest/reference/repos#check-if-a-user-is-a-repository-collaborator - API method documentation
    **/
    reposCheckCollaborator(req: operations.ReposCheckCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ReposCheckCollaboratorResponse>;
    /**
     * reposCheckVulnerabilityAlerts - Check if vulnerability alerts are enabled for a repository
     *
     * Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".
     *
     * https://docs.github.com/rest/reference/repos/#check-if-vulnerability-alerts-are-enabled-for-a-repository - API method documentation
    **/
    reposCheckVulnerabilityAlerts(req: operations.ReposCheckVulnerabilityAlertsRequest, config?: AxiosRequestConfig): Promise<operations.ReposCheckVulnerabilityAlertsResponse>;
    /**
     * reposCompareCommits - Compare two commits
     *
     * Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`.
     *
     * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
     *
     * **Working with large comparisons**
     *
     * The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/rest/reference/repos#list-commits) to enumerate all commits in the range.
     *
     * For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long
     * to generate. You can typically resolve this error by using a smaller commit range.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/repos#compare-two-commits - API method documentation
    **/
    reposCompareCommits(req: operations.ReposCompareCommitsRequest, config?: AxiosRequestConfig): Promise<operations.ReposCompareCommitsResponse>;
    /**
     * reposCreateCommitComment - Create a commit comment
     *
     * Create a comment for a commit using its `:commit_sha`.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/repos#create-a-commit-comment - API method documentation
    **/
    reposCreateCommitComment(req: operations.ReposCreateCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateCommitCommentResponse>;
    /**
     * reposCreateCommitSignatureProtection - Create commit signature protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
     *
     * https://docs.github.com/rest/reference/repos#create-commit-signature-protection - API method documentation
    **/
    reposCreateCommitSignatureProtection(req: operations.ReposCreateCommitSignatureProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateCommitSignatureProtectionResponse>;
    /**
     * reposCreateCommitStatus - Create a commit status
     *
     * Users with push access in a repository can create commit statuses for a given SHA.
     *
     * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
     *
     * https://docs.github.com/rest/reference/repos#create-a-commit-status - API method documentation
    **/
    reposCreateCommitStatus(req: operations.ReposCreateCommitStatusRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateCommitStatusResponse>;
    /**
     * reposCreateDeployKey - Create a deploy key
     *
     * You can create a read-only deploy key.
     *
     * https://docs.github.com/rest/reference/repos#create-a-deploy-key - API method documentation
    **/
    reposCreateDeployKey(req: operations.ReposCreateDeployKeyRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDeployKeyResponse>;
    /**
     * reposCreateDeployment - Create a deployment
     *
     * Deployments offer a few configurable parameters with certain defaults.
     *
     * The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them
     * before we merge a pull request.
     *
     * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
     * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
     * makes it easier to track which environments have requested deployments. The default environment is `production`.
     *
     * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
     * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
     * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
     * return a failure response.
     *
     * By default, [commit statuses](https://docs.github.com/rest/reference/repos#statuses) for every submitted context must be in a `success`
     * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
     * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
     * not require any contexts or create any commit statuses, the deployment will always succeed.
     *
     * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
     * field that will be passed on when a deployment event is dispatched.
     *
     * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
     * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
     * application with debugging enabled.
     *
     * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
     *
     * #### Merged branch response
     * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
     * a deployment. This auto-merge happens when:
     * *   Auto-merge option is enabled in the repository
     * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
     * *   There are no merge conflicts
     *
     * If there are no new commits in the base branch, a new request to create a deployment should give a successful
     * response.
     *
     * #### Merge conflict response
     * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
     * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
     *
     * #### Failed commit status checks
     * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
     * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
     *
     * https://docs.github.com/rest/reference/repos#create-a-deployment - API method documentation
    **/
    reposCreateDeployment(req: operations.ReposCreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDeploymentResponse>;
    /**
     * reposCreateDeploymentStatus - Create a deployment status
     *
     * Users with `push` access can create deployment statuses for a given deployment.
     *
     * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
     *
     * https://docs.github.com/rest/reference/repos#create-a-deployment-status - API method documentation
    **/
    reposCreateDeploymentStatus(req: operations.ReposCreateDeploymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDeploymentStatusResponse>;
    /**
     * reposCreateDispatchEvent - Create a repository dispatch event
     *
     * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."
     *
     * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.
     *
     * This endpoint requires write access to the repository by providing either:
     *
     *   - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
     *   - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.
     *
     * This input example shows how you can use the `client_payload` as a test to debug your workflow.
     *
     * https://docs.github.com/rest/reference/repos/#create-a-repository-dispatch-event - API method documentation
    **/
    reposCreateDispatchEvent(req: operations.ReposCreateDispatchEventRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateDispatchEventResponse>;
    /**
     * reposCreateForAuthenticatedUser - Create a repository for the authenticated user
     *
     * Creates a new repository for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository.
     *
     * https://docs.github.com/rest/reference/repos/#create-a-repository-for-the-authenticated-user - API method documentation
    **/
    reposCreateForAuthenticatedUser(req: operations.ReposCreateForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateForAuthenticatedUserResponse>;
    /**
     * reposCreateFork - Create a fork
     *
     * Create a fork for the authenticated user.
     *
     * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com).
     *
     * https://docs.github.com/rest/reference/repos#create-a-fork - API method documentation
    **/
    reposCreateFork(req: operations.ReposCreateForkRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateForkResponse>;
    /**
     * reposCreateInOrg - Create an organization repository
     *
     * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     *
     * https://docs.github.com/rest/reference/repos/#create-an-organization-repository - API method documentation
    **/
    reposCreateInOrg(req: operations.ReposCreateInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateInOrgResponse>;
    /**
     * reposCreateOrUpdateEnvironment - Create or update an environment
     *
     * Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."
     *
     * **Note:** Although you can use this operation to specify that only branches that match specified name patterns can deploy to this environment, you must use the UI to set the name patterns. For more information, see "[Environments](/actions/reference/environments#deployment-branches)."
     *
     * **Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."
     *
     * You must authenticate using an access token with the repo scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/repos#create-or-update-an-environment - API method documentation
    **/
    reposCreateOrUpdateEnvironment(req: operations.ReposCreateOrUpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateOrUpdateEnvironmentResponse>;
    /**
     * reposCreateOrUpdateFileContents - Create or update file contents
     *
     * Creates a new file or replaces an existing file in a repository.
     *
     * https://docs.github.com/rest/reference/repos#create-or-update-file-contents - API method documentation
    **/
    reposCreateOrUpdateFileContents(req: operations.ReposCreateOrUpdateFileContentsRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateOrUpdateFileContentsResponse>;
    /**
     * reposCreatePagesSite - Create a GitHub Pages site
     *
     * Configures a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
     *
     * https://docs.github.com/rest/reference/repos#create-a-github-pages-site - API method documentation
    **/
    reposCreatePagesSite(req: operations.ReposCreatePagesSiteRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreatePagesSiteResponse>;
    /**
     * reposCreateRelease - Create a release
     *
     * Users with push access to the repository can create a release.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/repos#create-a-release - API method documentation
    **/
    reposCreateRelease(req: operations.ReposCreateReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateReleaseResponse>;
    /**
     * reposCreateUsingTemplate - Create a repository using a template
     *
     * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
     *
     * **OAuth scope requirements**
     *
     * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
     *
     * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
     * *   `repo` scope to create a private repository
     *
     * https://docs.github.com/rest/reference/repos/#create-a-repository-using-a-template - API method documentation
    **/
    reposCreateUsingTemplate(req: operations.ReposCreateUsingTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateUsingTemplateResponse>;
    /**
     * reposCreateWebhook - Create a repository webhook
     *
     * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
     * share the same `config` as long as those webhooks do not have any `events` that overlap.
     *
     * https://docs.github.com/rest/reference/repos#create-a-repository-webhook - API method documentation
    **/
    reposCreateWebhook(req: operations.ReposCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposCreateWebhookResponse>;
    /**
     * reposDeclineInvitation - Decline a repository invitation
     *
     * https://docs.github.com/rest/reference/repos#decline-a-repository-invitation - API method documentation
    **/
    reposDeclineInvitation(req: operations.ReposDeclineInvitationRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeclineInvitationResponse>;
    /**
     * reposDelete - Delete a repository
     *
     * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
     *
     * If an organization owner has configured the organization to prevent members from deleting organization-owned
     * repositories, you will get a `403 Forbidden` response.
     *
     * https://docs.github.com/rest/reference/repos/#delete-a-repository - API method documentation
    **/
    reposDelete(req: operations.ReposDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteResponse>;
    /**
     * reposDeleteAccessRestrictions - Delete access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Disables the ability to restrict who can push to this branch.
     *
     * https://docs.github.com/rest/reference/repos#delete-access-restrictions - API method documentation
    **/
    reposDeleteAccessRestrictions(req: operations.ReposDeleteAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteAccessRestrictionsResponse>;
    /**
     * reposDeleteAdminBranchProtection - Delete admin branch protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * https://docs.github.com/rest/reference/repos#delete-admin-branch-protection - API method documentation
    **/
    reposDeleteAdminBranchProtection(req: operations.ReposDeleteAdminBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteAdminBranchProtectionResponse>;
    /**
     * reposDeleteAnEnvironment - Delete an environment
     *
     * You must authenticate using an access token with the repo scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/repos#delete-an-environment - API method documentation
    **/
    reposDeleteAnEnvironment(req: operations.ReposDeleteAnEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteAnEnvironmentResponse>;
    /**
     * reposDeleteBranchProtection - Delete branch protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#delete-branch-protection - API method documentation
    **/
    reposDeleteBranchProtection(req: operations.ReposDeleteBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteBranchProtectionResponse>;
    /**
     * reposDeleteCommitComment - Delete a commit comment
     *
     * https://docs.github.com/rest/reference/repos#delete-a-commit-comment - API method documentation
    **/
    reposDeleteCommitComment(req: operations.ReposDeleteCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteCommitCommentResponse>;
    /**
     * reposDeleteCommitSignatureProtection - Delete commit signature protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
     *
     * https://docs.github.com/rest/reference/repos#delete-commit-signature-protection - API method documentation
    **/
    reposDeleteCommitSignatureProtection(req: operations.ReposDeleteCommitSignatureProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteCommitSignatureProtectionResponse>;
    /**
     * reposDeleteDeployKey - Delete a deploy key
     *
     * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
     *
     * https://docs.github.com/rest/reference/repos#delete-a-deploy-key - API method documentation
    **/
    reposDeleteDeployKey(req: operations.ReposDeleteDeployKeyRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteDeployKeyResponse>;
    /**
     * reposDeleteDeployment - Delete a deployment
     *
     * To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.
     *
     * To set a deployment as inactive, you must:
     *
     * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
     * *   Mark the active deployment as inactive by adding any non-successful deployment status.
     *
     * For more information, see "[Create a deployment](https://docs.github.com/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/reference/repos#create-a-deployment-status)."
     *
     * https://docs.github.com/rest/reference/repos#delete-a-deployment - API method documentation
    **/
    reposDeleteDeployment(req: operations.ReposDeleteDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteDeploymentResponse>;
    /**
     * reposDeleteFile - Delete a file
     *
     * Deletes a file in a repository.
     *
     * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
     *
     * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
     *
     * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
     *
     * https://docs.github.com/rest/reference/repos#delete-a-file - API method documentation
    **/
    reposDeleteFile(req: operations.ReposDeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteFileResponse>;
    /**
     * reposDeleteInvitation - Delete a repository invitation
     *
     * https://docs.github.com/rest/reference/repos#delete-a-repository-invitation - API method documentation
    **/
    reposDeleteInvitation(req: operations.ReposDeleteInvitationRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteInvitationResponse>;
    /**
     * reposDeletePagesSite - Delete a GitHub Pages site
     *
     * https://docs.github.com/rest/reference/repos#delete-a-github-pages-site - API method documentation
    **/
    reposDeletePagesSite(req: operations.ReposDeletePagesSiteRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeletePagesSiteResponse>;
    /**
     * reposDeletePullRequestReviewProtection - Delete pull request review protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#delete-pull-request-review-protection - API method documentation
    **/
    reposDeletePullRequestReviewProtection(req: operations.ReposDeletePullRequestReviewProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeletePullRequestReviewProtectionResponse>;
    /**
     * reposDeleteRelease - Delete a release
     *
     * Users with push access to the repository can delete a release.
     *
     * https://docs.github.com/rest/reference/repos#delete-a-release - API method documentation
    **/
    reposDeleteRelease(req: operations.ReposDeleteReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteReleaseResponse>;
    /**
     * reposDeleteReleaseAsset - Delete a release asset
     *
     * https://docs.github.com/rest/reference/repos#delete-a-release-asset - API method documentation
    **/
    reposDeleteReleaseAsset(req: operations.ReposDeleteReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteReleaseAssetResponse>;
    /**
     * reposDeleteWebhook - Delete a repository webhook
     *
     * https://docs.github.com/rest/reference/repos#delete-a-repository-webhook - API method documentation
    **/
    reposDeleteWebhook(req: operations.ReposDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposDeleteWebhookResponse>;
    /**
     * reposDisableAutomatedSecurityFixes - Disable automated security fixes
     *
     * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".
     *
     * https://docs.github.com/rest/reference/repos/#disable-automated-security-fixes - API method documentation
    **/
    reposDisableAutomatedSecurityFixes(req: operations.ReposDisableAutomatedSecurityFixesRequest, config?: AxiosRequestConfig): Promise<operations.ReposDisableAutomatedSecurityFixesResponse>;
    /**
     * reposDisableVulnerabilityAlerts - Disable vulnerability alerts
     *
     * Disables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".
     *
     * https://docs.github.com/rest/reference/repos/#disable-vulnerability-alerts - API method documentation
    **/
    reposDisableVulnerabilityAlerts(req: operations.ReposDisableVulnerabilityAlertsRequest, config?: AxiosRequestConfig): Promise<operations.ReposDisableVulnerabilityAlertsResponse>;
    /**
     * reposDownloadTarballArchive - Download a repository archive (tar)
     *
     * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     *
     * https://docs.github.com/rest/reference/repos#download-a-repository-archive - API method documentation
    **/
    reposDownloadTarballArchive(req: operations.ReposDownloadTarballArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ReposDownloadTarballArchiveResponse>;
    /**
     * reposDownloadZipballArchive - Download a repository archive (zip)
     *
     * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
     * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
     * the `Location` header to make a second `GET` request.
     * **Note**: For private repositories, these links are temporary and expire after five minutes.
     *
     * https://docs.github.com/rest/reference/repos#download-a-repository-archive - API method documentation
    **/
    reposDownloadZipballArchive(req: operations.ReposDownloadZipballArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ReposDownloadZipballArchiveResponse>;
    /**
     * reposEnableAutomatedSecurityFixes - Enable automated security fixes
     *
     * Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".
     *
     * https://docs.github.com/rest/reference/repos/#enable-automated-security-fixes - API method documentation
    **/
    reposEnableAutomatedSecurityFixes(req: operations.ReposEnableAutomatedSecurityFixesRequest, config?: AxiosRequestConfig): Promise<operations.ReposEnableAutomatedSecurityFixesResponse>;
    /**
     * reposEnableVulnerabilityAlerts - Enable vulnerability alerts
     *
     * Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".
     *
     * https://docs.github.com/rest/reference/repos/#enable-vulnerability-alerts - API method documentation
    **/
    reposEnableVulnerabilityAlerts(req: operations.ReposEnableVulnerabilityAlertsRequest, config?: AxiosRequestConfig): Promise<operations.ReposEnableVulnerabilityAlertsResponse>;
    /**
     * reposGet - Get a repository
     *
     * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
     *
     * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
     *
     * https://docs.github.com/rest/reference/repos/#get-a-repository - API method documentation
    **/
    reposGet(req: operations.ReposGetRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetResponse>;
    /**
     * reposGetAccessRestrictions - Get access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists who has access to this protected branch.
     *
     * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
     *
     * https://docs.github.com/rest/reference/repos#get-access-restrictions - API method documentation
    **/
    reposGetAccessRestrictions(req: operations.ReposGetAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAccessRestrictionsResponse>;
    /**
     * reposGetAdminBranchProtection - Get admin branch protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#get-admin-branch-protection - API method documentation
    **/
    reposGetAdminBranchProtection(req: operations.ReposGetAdminBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAdminBranchProtectionResponse>;
    /**
     * reposGetAllEnvironments - Get all environments
     *
     * Get all environments for a repository.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/repos#get-all-environments - API method documentation
    **/
    reposGetAllEnvironments(req: operations.ReposGetAllEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAllEnvironmentsResponse>;
    /**
     * reposGetAllStatusCheckContexts - Get all status check contexts
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#get-all-status-check-contexts - API method documentation
    **/
    reposGetAllStatusCheckContexts(req: operations.ReposGetAllStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAllStatusCheckContextsResponse>;
    /**
     * reposGetAllTopics - Get all repository topics
     *
     * https://docs.github.com/rest/reference/repos/#get-all-repository-topics - API method documentation
    **/
    reposGetAllTopics(req: operations.ReposGetAllTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAllTopicsResponse>;
    /**
     * reposGetAppsWithAccessToProtectedBranch - Get apps with access to the protected branch
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * https://docs.github.com/rest/reference/repos#list-apps-with-access-to-the-protected-branch - API method documentation
    **/
    reposGetAppsWithAccessToProtectedBranch(req: operations.ReposGetAppsWithAccessToProtectedBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetAppsWithAccessToProtectedBranchResponse>;
    /**
     * reposGetBranch - Get a branch
     *
     * https://docs.github.com/rest/reference/repos#get-a-branch - API method documentation
    **/
    reposGetBranch(req: operations.ReposGetBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetBranchResponse>;
    /**
     * reposGetBranchProtection - Get branch protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#get-branch-protection - API method documentation
    **/
    reposGetBranchProtection(req: operations.ReposGetBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetBranchProtectionResponse>;
    /**
     * reposGetClones - Get repository clones
     *
     * Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     *
     * https://docs.github.com/rest/reference/repos#get-repository-clones - API method documentation
    **/
    reposGetClones(req: operations.ReposGetClonesRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetClonesResponse>;
    /**
     * reposGetCodeFrequencyStats - Get the weekly commit activity
     *
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     *
     * https://docs.github.com/rest/reference/repos#get-the-weekly-commit-activity - API method documentation
    **/
    reposGetCodeFrequencyStats(req: operations.ReposGetCodeFrequencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCodeFrequencyStatsResponse>;
    /**
     * reposGetCollaboratorPermissionLevel - Get repository permissions for a user
     *
     * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
     *
     * https://docs.github.com/rest/reference/repos#get-repository-permissions-for-a-user - API method documentation
    **/
    reposGetCollaboratorPermissionLevel(req: operations.ReposGetCollaboratorPermissionLevelRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCollaboratorPermissionLevelResponse>;
    /**
     * reposGetCombinedStatusForRef - Get the combined status for a specific reference
     *
     * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
     *
     * The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.
     *
     * Additionally, a combined `state` is returned. The `state` is one of:
     *
     * *   **failure** if any of the contexts report as `error` or `failure`
     * *   **pending** if there are no statuses or a context is `pending`
     * *   **success** if the latest status for all contexts is `success`
     *
     * https://docs.github.com/rest/reference/repos#get-the-combined-status-for-a-specific-reference - API method documentation
    **/
    reposGetCombinedStatusForRef(req: operations.ReposGetCombinedStatusForRefRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCombinedStatusForRefResponse>;
    /**
     * reposGetCommit - Get a commit
     *
     * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
     *
     * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
     *
     * You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
     *
     * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/repos#get-a-commit - API method documentation
    **/
    reposGetCommit(req: operations.ReposGetCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitResponse>;
    /**
     * reposGetCommitActivityStats - Get the last year of commit activity
     *
     * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
     *
     * https://docs.github.com/rest/reference/repos#get-the-last-year-of-commit-activity - API method documentation
    **/
    reposGetCommitActivityStats(req: operations.ReposGetCommitActivityStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitActivityStatsResponse>;
    /**
     * reposGetCommitComment - Get a commit comment
     *
     * https://docs.github.com/rest/reference/repos#get-a-commit-comment - API method documentation
    **/
    reposGetCommitComment(req: operations.ReposGetCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitCommentResponse>;
    /**
     * reposGetCommitSignatureProtection - Get commit signature protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.
     *
     * **Note**: You must enable branch protection to require signed commits.
     *
     * https://docs.github.com/rest/reference/repos#get-commit-signature-protection - API method documentation
    **/
    reposGetCommitSignatureProtection(req: operations.ReposGetCommitSignatureProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommitSignatureProtectionResponse>;
    /**
     * reposGetCommunityProfileMetrics - Get community profile metrics
     *
     * This endpoint will return all community profile metrics, including an
     * overall health score, repository description, the presence of documentation, detected
     * code of conduct, detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE,
     * README, and CONTRIBUTING files.
     *
     * The `health_percentage` score is defined as a percentage of how many of
     * these four documents are present: README, CONTRIBUTING, LICENSE, and
     * CODE_OF_CONDUCT. For example, if all four documents are present, then
     * the `health_percentage` is `100`. If only one is present, then the
     * `health_percentage` is `25`.
     *
     * `content_reports_enabled` is only returned for organization-owned repositories.
     *
     * https://docs.github.com/rest/reference/repos#get-community-profile-metrics - API method documentation
    **/
    reposGetCommunityProfileMetrics(req: operations.ReposGetCommunityProfileMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetCommunityProfileMetricsResponse>;
    /**
     * reposGetContent - Get repository content
     *
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
     * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.
     *
     * Files and symlinks support [a custom media type](https://docs.github.com/rest/reference/repos#custom-media-types) for
     * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
     * type](https://docs.github.com/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
     * object format.
     *
     * **Note**:
     * *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/rest/reference/git#trees).
     * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
     * API](https://docs.github.com/rest/reference/git#get-a-tree).
     * *   This API supports files up to 1 megabyte in size.
     *
     * #### If the content is a directory
     * The response will be an array of objects, one object for each item in the directory.
     * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
     * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
     * In the next major version of the API, the type will be returned as "submodule".
     *
     * #### If the content is a symlink
     * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
     * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
     * describing the symlink itself.
     *
     * #### If the content is a submodule
     * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
     * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
     * the submodule at that specific commit.
     *
     * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
     * github.com URLs (`html_url` and `_links["html"]`) will have null values.
     *
     * https://docs.github.com/rest/reference/repos#get-repository-content - API method documentation
    **/
    reposGetContent(req: operations.ReposGetContentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetContentResponse>;
    /**
     * reposGetContributorsStats - Get all contributor commit activity
     *
     *
     * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
     *
     * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     * *   `a` - Number of additions
     * *   `d` - Number of deletions
     * *   `c` - Number of commits
     *
     * https://docs.github.com/rest/reference/repos#get-all-contributor-commit-activity - API method documentation
    **/
    reposGetContributorsStats(req: operations.ReposGetContributorsStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetContributorsStatsResponse>;
    /**
     * reposGetDeployKey - Get a deploy key
     *
     * https://docs.github.com/rest/reference/repos#get-a-deploy-key - API method documentation
    **/
    reposGetDeployKey(req: operations.ReposGetDeployKeyRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetDeployKeyResponse>;
    /**
     * reposGetDeployment - Get a deployment
     *
     * https://docs.github.com/rest/reference/repos#get-a-deployment - API method documentation
    **/
    reposGetDeployment(req: operations.ReposGetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetDeploymentResponse>;
    /**
     * reposGetDeploymentStatus - Get a deployment status
     *
     * Users with pull access can view a deployment status for a deployment:
     *
     * https://docs.github.com/rest/reference/repos#get-a-deployment-status - API method documentation
    **/
    reposGetDeploymentStatus(req: operations.ReposGetDeploymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetDeploymentStatusResponse>;
    /**
     * reposGetEnvironment - Get an environment
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/repos#get-an-environment - API method documentation
    **/
    reposGetEnvironment(req: operations.ReposGetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetEnvironmentResponse>;
    /**
     * reposGetLatestPagesBuild - Get latest Pages build
     *
     * https://docs.github.com/rest/reference/repos#get-latest-pages-build - API method documentation
    **/
    reposGetLatestPagesBuild(req: operations.ReposGetLatestPagesBuildRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetLatestPagesBuildResponse>;
    /**
     * reposGetLatestRelease - Get the latest release
     *
     * View the latest published full release for the repository.
     *
     * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
     *
     * https://docs.github.com/rest/reference/repos#get-the-latest-release - API method documentation
    **/
    reposGetLatestRelease(req: operations.ReposGetLatestReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetLatestReleaseResponse>;
    /**
     * reposGetPages - Get a GitHub Pages site
     *
     * https://docs.github.com/rest/reference/repos#get-a-github-pages-site - API method documentation
    **/
    reposGetPages(req: operations.ReposGetPagesRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPagesResponse>;
    /**
     * reposGetPagesBuild - Get GitHub Pages build
     *
     * https://docs.github.com/rest/reference/repos#get-github-pages-build - API method documentation
    **/
    reposGetPagesBuild(req: operations.ReposGetPagesBuildRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPagesBuildResponse>;
    /**
     * reposGetParticipationStats - Get the weekly commit count
     *
     * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
     *
     * The array order is oldest week (index 0) to most recent week.
     *
     * https://docs.github.com/rest/reference/repos#get-the-weekly-commit-count - API method documentation
    **/
    reposGetParticipationStats(req: operations.ReposGetParticipationStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetParticipationStatsResponse>;
    /**
     * reposGetPullRequestReviewProtection - Get pull request review protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#get-pull-request-review-protection - API method documentation
    **/
    reposGetPullRequestReviewProtection(req: operations.ReposGetPullRequestReviewProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPullRequestReviewProtectionResponse>;
    /**
     * reposGetPunchCardStats - Get the hourly commit count for each day
     *
     * Each array contains the day number, hour number, and number of commits:
     *
     * *   `0-6`: Sunday - Saturday
     * *   `0-23`: Hour of day
     * *   Number of commits
     *
     * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
     *
     * https://docs.github.com/rest/reference/repos#get-the-hourly-commit-count-for-each-day - API method documentation
    **/
    reposGetPunchCardStats(req: operations.ReposGetPunchCardStatsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetPunchCardStatsResponse>;
    /**
     * reposGetReadme - Get a repository README
     *
     * Gets the preferred README for a repository.
     *
     * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
     *
     * https://docs.github.com/rest/reference/repos#get-a-repository-readme - API method documentation
    **/
    reposGetReadme(req: operations.ReposGetReadmeRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReadmeResponse>;
    /**
     * reposGetReadmeFromAltPath - Get a repository README
     *
     * Gets the preferred README for a repository.
     *
     * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
     *
     * https://docs.github.com/rest/reference/repos#get-a-repository-readme - API method documentation
    **/
    reposGetReadmeFromAltPath(req: operations.ReposGetReadmeFromAltPathRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReadmeFromAltPathResponse>;
    /**
     * reposGetRelease - Get a release
     *
     * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).
     *
     * https://docs.github.com/rest/reference/repos#get-a-release - API method documentation
    **/
    reposGetRelease(req: operations.ReposGetReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReleaseResponse>;
    /**
     * reposGetReleaseAsset - Get a release asset
     *
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     *
     * https://docs.github.com/rest/reference/repos#get-a-release-asset - API method documentation
    **/
    reposGetReleaseAsset(req: operations.ReposGetReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReleaseAssetResponse>;
    /**
     * reposGetReleaseByTag - Get a release by tag name
     *
     * Get a published release with the specified tag.
     *
     * https://docs.github.com/rest/reference/repos#get-a-release-by-tag-name - API method documentation
    **/
    reposGetReleaseByTag(req: operations.ReposGetReleaseByTagRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetReleaseByTagResponse>;
    /**
     * reposGetStatusChecksProtection - Get status checks protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#get-status-checks-protection - API method documentation
    **/
    reposGetStatusChecksProtection(req: operations.ReposGetStatusChecksProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetStatusChecksProtectionResponse>;
    /**
     * reposGetTeamsWithAccessToProtectedBranch - Get teams with access to the protected branch
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the teams who have push access to this branch. The list includes child teams.
     *
     * https://docs.github.com/rest/reference/repos#list-teams-with-access-to-the-protected-branch - API method documentation
    **/
    reposGetTeamsWithAccessToProtectedBranch(req: operations.ReposGetTeamsWithAccessToProtectedBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetTeamsWithAccessToProtectedBranchResponse>;
    /**
     * reposGetTopPaths - Get top referral paths
     *
     * Get the top 10 popular contents over the last 14 days.
     *
     * https://docs.github.com/rest/reference/repos#get-top-referral-paths - API method documentation
    **/
    reposGetTopPaths(req: operations.ReposGetTopPathsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetTopPathsResponse>;
    /**
     * reposGetTopReferrers - Get top referral sources
     *
     * Get the top 10 referrers over the last 14 days.
     *
     * https://docs.github.com/rest/reference/repos#get-top-referral-sources - API method documentation
    **/
    reposGetTopReferrers(req: operations.ReposGetTopReferrersRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetTopReferrersResponse>;
    /**
     * reposGetUsersWithAccessToProtectedBranch - Get users with access to the protected branch
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists the people who have push access to this branch.
     *
     * https://docs.github.com/rest/reference/repos#list-users-with-access-to-the-protected-branch - API method documentation
    **/
    reposGetUsersWithAccessToProtectedBranch(req: operations.ReposGetUsersWithAccessToProtectedBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetUsersWithAccessToProtectedBranchResponse>;
    /**
     * reposGetViews - Get page views
     *
     * Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
     *
     * https://docs.github.com/rest/reference/repos#get-page-views - API method documentation
    **/
    reposGetViews(req: operations.ReposGetViewsRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetViewsResponse>;
    /**
     * reposGetWebhook - Get a repository webhook
     *
     * Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."
     *
     * https://docs.github.com/rest/reference/repos#get-a-repository-webhook - API method documentation
    **/
    reposGetWebhook(req: operations.ReposGetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetWebhookResponse>;
    /**
     * reposGetWebhookConfigForRepo - Get a webhook configuration for a repository
     *
     * Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."
     *
     * Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.
     *
     * https://docs.github.com/rest/reference/repos#get-a-webhook-configuration-for-a-repository - API method documentation
    **/
    reposGetWebhookConfigForRepo(req: operations.ReposGetWebhookConfigForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ReposGetWebhookConfigForRepoResponse>;
    /**
     * reposListBranches - List branches
     *
     * https://docs.github.com/rest/reference/repos#list-branches - API method documentation
    **/
    reposListBranches(req: operations.ReposListBranchesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListBranchesResponse>;
    /**
     * reposListBranchesForHeadCommit - List branches for HEAD commit
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
     *
     * https://docs.github.com/rest/reference/repos#list-branches-for-head-commit - API method documentation
    **/
    reposListBranchesForHeadCommit(req: operations.ReposListBranchesForHeadCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposListBranchesForHeadCommitResponse>;
    /**
     * reposListCollaborators - List repository collaborators
     *
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * Team members will include the members of child teams.
     *
     * https://docs.github.com/rest/reference/repos#list-repository-collaborators - API method documentation
    **/
    reposListCollaborators(req: operations.ReposListCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCollaboratorsResponse>;
    /**
     * reposListCommentsForCommit - List commit comments
     *
     * Use the `:commit_sha` to specify the commit that will have its comments listed.
     *
     * https://docs.github.com/rest/reference/repos#list-commit-comments - API method documentation
    **/
    reposListCommentsForCommit(req: operations.ReposListCommentsForCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommentsForCommitResponse>;
    /**
     * reposListCommitCommentsForRepo - List commit comments for a repository
     *
     * Commit Comments use [these custom media types](https://docs.github.com/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/rest/overview/media-types/).
     *
     * Comments are ordered by ascending ID.
     *
     * https://docs.github.com/rest/reference/repos#list-commit-comments-for-a-repository - API method documentation
    **/
    reposListCommitCommentsForRepo(req: operations.ReposListCommitCommentsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommitCommentsForRepoResponse>;
    /**
     * reposListCommitStatusesForRef - List commit statuses for a reference
     *
     * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
     *
     * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
     *
     * https://docs.github.com/rest/reference/repos#list-commit-statuses-for-a-reference - API method documentation
    **/
    reposListCommitStatusesForRef(req: operations.ReposListCommitStatusesForRefRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommitStatusesForRefResponse>;
    /**
     * reposListCommits - List commits
     *
     * **Signature verification object**
     *
     * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
     *
     * | Name | Type | Description |
     * | ---- | ---- | ----------- |
     * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
     * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
     * | `signature` | `string` | The signature that was extracted from the commit. |
     * | `payload` | `string` | The value that was signed. |
     *
     * These are the possible values for `reason` in the `verification` object:
     *
     * | Value | Description |
     * | ----- | ----------- |
     * | `expired_key` | The key that made the signature is expired. |
     * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
     * | `gpgverify_error` | There was an error communicating with the signature verification service. |
     * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
     * | `unsigned` | The object does not include a signature. |
     * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
     * | `no_user` | No user was associated with the `committer` email address in the commit. |
     * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
     * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
     * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
     * | `malformed_signature` | There was an error parsing the signature. |
     * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
     * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
     *
     * https://docs.github.com/rest/reference/repos#list-commits - API method documentation
    **/
    reposListCommits(req: operations.ReposListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListCommitsResponse>;
    /**
     * reposListContributors - List repository contributors
     *
     * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
     *
     * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
     *
     * https://docs.github.com/rest/reference/repos/#list-repository-contributors - API method documentation
    **/
    reposListContributors(req: operations.ReposListContributorsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListContributorsResponse>;
    /**
     * reposListDeployKeys - List deploy keys
     *
     * https://docs.github.com/rest/reference/repos#list-deploy-keys - API method documentation
    **/
    reposListDeployKeys(req: operations.ReposListDeployKeysRequest, config?: AxiosRequestConfig): Promise<operations.ReposListDeployKeysResponse>;
    /**
     * reposListDeploymentStatuses - List deployment statuses
     *
     * Users with pull access can view deployment statuses for a deployment:
     *
     * https://docs.github.com/rest/reference/repos#list-deployment-statuses - API method documentation
    **/
    reposListDeploymentStatuses(req: operations.ReposListDeploymentStatusesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListDeploymentStatusesResponse>;
    /**
     * reposListDeployments - List deployments
     *
     * Simple filtering of deployments is available via query parameters:
     *
     * https://docs.github.com/rest/reference/repos#list-deployments - API method documentation
    **/
    reposListDeployments(req: operations.ReposListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListDeploymentsResponse>;
    /**
     * reposListForAuthenticatedUser - List repositories for the authenticated user
     *
     * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * https://docs.github.com/rest/reference/repos/#list-repositories-for-the-authenticated-user - API method documentation
    **/
    reposListForAuthenticatedUser(req: operations.ReposListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForAuthenticatedUserResponse>;
    /**
     * reposListForOrg - List organization repositories
     *
     * Lists repositories for the specified organization.
     *
     * https://docs.github.com/rest/reference/repos/#list-organization-repositories - API method documentation
    **/
    reposListForOrg(req: operations.ReposListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForOrgResponse>;
    /**
     * reposListForUser - List repositories for a user
     *
     * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
     *
     * https://docs.github.com/rest/reference/repos/#list-repositories-for-a-user - API method documentation
    **/
    reposListForUser(req: operations.ReposListForUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForUserResponse>;
    /**
     * reposListForks - List forks
     *
     * https://docs.github.com/rest/reference/repos#list-forks - API method documentation
    **/
    reposListForks(req: operations.ReposListForksRequest, config?: AxiosRequestConfig): Promise<operations.ReposListForksResponse>;
    /**
     * reposListInvitations - List repository invitations
     *
     * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
     *
     * https://docs.github.com/rest/reference/repos#list-repository-invitations - API method documentation
    **/
    reposListInvitations(req: operations.ReposListInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListInvitationsResponse>;
    /**
     * reposListInvitationsForAuthenticatedUser - List repository invitations for the authenticated user
     *
     * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
     *
     * https://docs.github.com/rest/reference/repos#list-repository-invitations-for-the-authenticated-user - API method documentation
    **/
    reposListInvitationsForAuthenticatedUser(req: operations.ReposListInvitationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.ReposListInvitationsForAuthenticatedUserResponse>;
    /**
     * reposListLanguages - List repository languages
     *
     * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
     *
     * https://docs.github.com/rest/reference/repos/#list-repository-languages - API method documentation
    **/
    reposListLanguages(req: operations.ReposListLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListLanguagesResponse>;
    /**
     * reposListPagesBuilds - List GitHub Pages builds
     *
     * https://docs.github.com/rest/reference/repos#list-github-pages-builds - API method documentation
    **/
    reposListPagesBuilds(req: operations.ReposListPagesBuildsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListPagesBuildsResponse>;
    /**
     * reposListPublic - List public repositories
     *
     * Lists all public repositories in the order that they were created.
     *
     * Notes:
     * - For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise.
     * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
     *
     * https://docs.github.com/rest/reference/repos/#list-public-repositories - API method documentation
    **/
    reposListPublic(req: operations.ReposListPublicRequest, config?: AxiosRequestConfig): Promise<operations.ReposListPublicResponse>;
    /**
     * reposListPullRequestsAssociatedWithCommit - List pull requests associated with a commit
     *
     * Lists all pull requests containing the provided commit SHA, which can be from any point in the commit history. The results will include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests) endpoint.
     *
     * https://docs.github.com/rest/reference/repos#list-pull-requests-associated-with-a-commit - API method documentation
    **/
    reposListPullRequestsAssociatedWithCommit(req: operations.ReposListPullRequestsAssociatedWithCommitRequest, config?: AxiosRequestConfig): Promise<operations.ReposListPullRequestsAssociatedWithCommitResponse>;
    /**
     * reposListReleaseAssets - List release assets
     *
     * https://docs.github.com/rest/reference/repos#list-release-assets - API method documentation
    **/
    reposListReleaseAssets(req: operations.ReposListReleaseAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListReleaseAssetsResponse>;
    /**
     * reposListReleases - List releases
     *
     * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/reference/repos#list-repository-tags).
     *
     * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
     *
     * https://docs.github.com/rest/reference/repos#list-releases - API method documentation
    **/
    reposListReleases(req: operations.ReposListReleasesRequest, config?: AxiosRequestConfig): Promise<operations.ReposListReleasesResponse>;
    /**
     * reposListTags - List repository tags
     *
     * https://docs.github.com/rest/reference/repos/#list-repository-tags - API method documentation
    **/
    reposListTags(req: operations.ReposListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListTagsResponse>;
    /**
     * reposListTeams - List repository teams
     *
     * https://docs.github.com/rest/reference/repos/#list-repository-teams - API method documentation
    **/
    reposListTeams(req: operations.ReposListTeamsRequest, config?: AxiosRequestConfig): Promise<operations.ReposListTeamsResponse>;
    /**
     * reposListWebhooks - List repository webhooks
     *
     * https://docs.github.com/rest/reference/repos#list-repository-webhooks - API method documentation
    **/
    reposListWebhooks(req: operations.ReposListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.ReposListWebhooksResponse>;
    /**
     * reposMerge - Merge a branch
     *
     * https://docs.github.com/rest/reference/repos#merge-a-branch - API method documentation
    **/
    reposMerge(req: operations.ReposMergeRequest, config?: AxiosRequestConfig): Promise<operations.ReposMergeResponse>;
    /**
     * reposPingWebhook - Ping a repository webhook
     *
     * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
     *
     * https://docs.github.com/rest/reference/repos#ping-a-repository-webhook - API method documentation
    **/
    reposPingWebhook(req: operations.ReposPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposPingWebhookResponse>;
    /**
     * reposRemoveAppAccessRestrictions - Remove app access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#remove-app-access-restrictions - API method documentation
    **/
    reposRemoveAppAccessRestrictions(req: operations.ReposRemoveAppAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveAppAccessRestrictionsResponse>;
    /**
     * reposRemoveCollaborator - Remove a repository collaborator
     *
     * https://docs.github.com/rest/reference/repos#remove-a-repository-collaborator - API method documentation
    **/
    reposRemoveCollaborator(req: operations.ReposRemoveCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveCollaboratorResponse>;
    /**
     * reposRemoveStatusCheckContexts - Remove status check contexts
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#remove-status-check-contexts - API method documentation
    **/
    reposRemoveStatusCheckContexts(req: operations.ReposRemoveStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveStatusCheckContextsResponse>;
    /**
     * reposRemoveStatusCheckProtection - Remove status check protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#remove-status-check-protection - API method documentation
    **/
    reposRemoveStatusCheckProtection(req: operations.ReposRemoveStatusCheckProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveStatusCheckProtectionResponse>;
    /**
     * reposRemoveTeamAccessRestrictions - Remove team access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
     *
     * | Type    | Description                                                                                                                                         |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#remove-team-access-restrictions - API method documentation
    **/
    reposRemoveTeamAccessRestrictions(req: operations.ReposRemoveTeamAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveTeamAccessRestrictionsResponse>;
    /**
     * reposRemoveUserAccessRestrictions - Remove user access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Removes the ability of a user to push to this branch.
     *
     * | Type    | Description                                                                                                                                   |
     * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#remove-user-access-restrictions - API method documentation
    **/
    reposRemoveUserAccessRestrictions(req: operations.ReposRemoveUserAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposRemoveUserAccessRestrictionsResponse>;
    /**
     * reposRenameBranch - Rename a branch
     *
     * Renames a branch in a repository.
     *
     * **Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".
     *
     * The permissions required to use this endpoint depends on whether you are renaming the default branch.
     *
     * To rename a non-default branch:
     *
     * * Users must have push access.
     * * GitHub Apps must have the `contents:write` repository permission.
     *
     * To rename the default branch:
     *
     * * Users must have admin or owner permissions.
     * * GitHub Apps must have the `administration:write` repository permission.
     *
     * https://docs.github.com/rest/reference/repos#rename-a-branch - API method documentation
    **/
    reposRenameBranch(req: operations.ReposRenameBranchRequest, config?: AxiosRequestConfig): Promise<operations.ReposRenameBranchResponse>;
    /**
     * reposReplaceAllTopics - Replace all repository topics
     *
     * https://docs.github.com/rest/reference/repos/#replace-all-repository-topics - API method documentation
    **/
    reposReplaceAllTopics(req: operations.ReposReplaceAllTopicsRequest, config?: AxiosRequestConfig): Promise<operations.ReposReplaceAllTopicsResponse>;
    /**
     * reposRequestPagesBuild - Request a GitHub Pages build
     *
     * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
     *
     * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
     *
     * https://docs.github.com/rest/reference/repos#request-a-github-pages-build - API method documentation
    **/
    reposRequestPagesBuild(req: operations.ReposRequestPagesBuildRequest, config?: AxiosRequestConfig): Promise<operations.ReposRequestPagesBuildResponse>;
    /**
     * reposSetAdminBranchProtection - Set admin branch protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * https://docs.github.com/rest/reference/repos#set-admin-branch-protection - API method documentation
    **/
    reposSetAdminBranchProtection(req: operations.ReposSetAdminBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetAdminBranchProtectionResponse>;
    /**
     * reposSetAppAccessRestrictions - Set app access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
     *
     * | Type    | Description                                                                                                                                                |
     * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#set-app-access-restrictions - API method documentation
    **/
    reposSetAppAccessRestrictions(req: operations.ReposSetAppAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetAppAccessRestrictionsResponse>;
    /**
     * reposSetStatusCheckContexts - Set status check contexts
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * https://docs.github.com/rest/reference/repos#set-status-check-contexts - API method documentation
    **/
    reposSetStatusCheckContexts(req: operations.ReposSetStatusCheckContextsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetStatusCheckContextsResponse>;
    /**
     * reposSetTeamAccessRestrictions - Set team access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
     *
     * | Type    | Description                                                                                                                                |
     * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
     * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#set-team-access-restrictions - API method documentation
    **/
    reposSetTeamAccessRestrictions(req: operations.ReposSetTeamAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetTeamAccessRestrictionsResponse>;
    /**
     * reposSetUserAccessRestrictions - Set user access restrictions
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
     *
     * | Type    | Description                                                                                                                   |
     * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
     * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
     *
     * https://docs.github.com/rest/reference/repos#set-user-access-restrictions - API method documentation
    **/
    reposSetUserAccessRestrictions(req: operations.ReposSetUserAccessRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.ReposSetUserAccessRestrictionsResponse>;
    /**
     * reposTestPushWebhook - Test the push repository webhook
     *
     * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
     *
     * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
     *
     * https://docs.github.com/rest/reference/repos#test-the-push-repository-webhook - API method documentation
    **/
    reposTestPushWebhook(req: operations.ReposTestPushWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposTestPushWebhookResponse>;
    /**
     * reposTransfer - Transfer a repository
     *
     * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).
     *
     * https://docs.github.com/rest/reference/repos/#transfer-a-repository - API method documentation
    **/
    reposTransfer(req: operations.ReposTransferRequest, config?: AxiosRequestConfig): Promise<operations.ReposTransferResponse>;
    /**
     * reposUpdate - Update a repository
     *
     * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/rest/reference/repos#replace-all-repository-topics) endpoint.
     *
     * https://docs.github.com/rest/reference/repos/#update-a-repository - API method documentation
    **/
    reposUpdate(req: operations.ReposUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateResponse>;
    /**
     * reposUpdateBranchProtection - Update branch protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Protecting a branch requires admin or owner permissions to the repository.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * **Note**: The list of users, apps, and teams in total is limited to 100 items.
     *
     * https://docs.github.com/rest/reference/repos#update-branch-protection - API method documentation
    **/
    reposUpdateBranchProtection(req: operations.ReposUpdateBranchProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateBranchProtectionResponse>;
    /**
     * reposUpdateCommitComment - Update a commit comment
     *
     * https://docs.github.com/rest/reference/repos#update-a-commit-comment - API method documentation
    **/
    reposUpdateCommitComment(req: operations.ReposUpdateCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateCommitCommentResponse>;
    /**
     * reposUpdateInformationAboutPagesSite - Update information about a GitHub Pages site
     *
     * Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
     *
     * https://docs.github.com/rest/reference/repos#update-information-about-a-github-pages-site - API method documentation
    **/
    reposUpdateInformationAboutPagesSite(req: operations.ReposUpdateInformationAboutPagesSiteRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateInformationAboutPagesSiteResponse>;
    /**
     * reposUpdateInvitation - Update a repository invitation
     *
     * https://docs.github.com/rest/reference/repos#update-a-repository-invitation - API method documentation
    **/
    reposUpdateInvitation(req: operations.ReposUpdateInvitationRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateInvitationResponse>;
    /**
     * reposUpdatePullRequestReviewProtection - Update pull request review protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
     *
     * https://docs.github.com/rest/reference/repos#update-pull-request-review-protection - API method documentation
    **/
    reposUpdatePullRequestReviewProtection(req: operations.ReposUpdatePullRequestReviewProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdatePullRequestReviewProtectionResponse>;
    /**
     * reposUpdateRelease - Update a release
     *
     * Users with push access to the repository can edit a release.
     *
     * https://docs.github.com/rest/reference/repos#update-a-release - API method documentation
    **/
    reposUpdateRelease(req: operations.ReposUpdateReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateReleaseResponse>;
    /**
     * reposUpdateReleaseAsset - Update a release asset
     *
     * Users with push access to the repository can edit a release asset.
     *
     * https://docs.github.com/rest/reference/repos#update-a-release-asset - API method documentation
    **/
    reposUpdateReleaseAsset(req: operations.ReposUpdateReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateReleaseAssetResponse>;
    /**
     * reposUpdateStatusCheckProtection - Update status check protection
     *
     * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
     *
     * https://docs.github.com/rest/reference/repos#update-status-check-potection - API method documentation
    **/
    reposUpdateStatusCheckProtection(req: operations.ReposUpdateStatusCheckProtectionRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateStatusCheckProtectionResponse>;
    /**
     * reposUpdateWebhook - Update a repository webhook
     *
     * Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."
     *
     * https://docs.github.com/rest/reference/repos#update-a-repository-webhook - API method documentation
    **/
    reposUpdateWebhook(req: operations.ReposUpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateWebhookResponse>;
    /**
     * reposUpdateWebhookConfigForRepo - Update a webhook configuration for a repository
     *
     * Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."
     *
     * Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.
     *
     * https://docs.github.com/rest/reference/repos#update-a-webhook-configuration-for-a-repository - API method documentation
    **/
    reposUpdateWebhookConfigForRepo(req: operations.ReposUpdateWebhookConfigForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ReposUpdateWebhookConfigForRepoResponse>;
    /**
     * reposUploadReleaseAsset - Upload a release asset
     *
     * This endpoint makes use of [a Hypermedia relation](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
     * the response of the [Create a release endpoint](https://docs.github.com/rest/reference/repos#create-a-release) to upload a release asset.
     *
     * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
     *
     * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
     *
     * `application/zip`
     *
     * GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
     * you'll still need to pass your authentication to be able to upload an asset.
     *
     * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
     *
     * **Notes:**
     * *   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/rest/reference/repos#list-assets-for-a-release)"
     * endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://support.github.com/contact).
     * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
     *
     * https://docs.github.com/rest/reference/repos#upload-a-release-asset - API method documentation
    **/
    reposUploadReleaseAsset(req: operations.ReposUploadReleaseAssetRequest, config?: AxiosRequestConfig): Promise<operations.ReposUploadReleaseAssetResponse>;
    /**
     * scimDeleteUserFromOrg - Delete a SCIM user from an organization
     *
     * https://docs.github.com/rest/reference/scim/#delete-a-scim-user-from-an-organization - API method documentation
    **/
    scimDeleteUserFromOrg(req: operations.ScimDeleteUserFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ScimDeleteUserFromOrgResponse>;
    /**
     * scimGetProvisioningInformationForUser - Get SCIM provisioning information for a user
     *
     * https://docs.github.com/rest/reference/scim/#get-scim-provisioning-information-for-a-user - API method documentation
    **/
    scimGetProvisioningInformationForUser(req: operations.ScimGetProvisioningInformationForUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimGetProvisioningInformationForUserResponse>;
    /**
     * scimListProvisionedIdentities - List SCIM provisioned identities
     *
     * Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.
     *
     * When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
     *   - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.
     *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
     *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
     *
     * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
     *
     * 1. The user is granted access by the IdP and is not a member of the GitHub organization.
     *
     * 1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
     *
     * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
     *    - If the user signs in, their GitHub account is linked to this entry.
     *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity `null` entry remains in place.
     *
     * https://docs.github.com/rest/reference/scim/#list-scim-provisioned-identities - API method documentation
    **/
    scimListProvisionedIdentities(req: operations.ScimListProvisionedIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.ScimListProvisionedIdentitiesResponse>;
    /**
     * scimProvisionAndInviteUser - Provision and invite a SCIM user
     *
     * Provision organization membership for a user, and send an activation email to the email address.
     *
     * https://docs.github.com/rest/reference/scim/#provision-and-invite-a-scim-user - API method documentation
    **/
    scimProvisionAndInviteUser(req: operations.ScimProvisionAndInviteUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimProvisionAndInviteUserResponse>;
    /**
     * scimSetInformationForProvisionedUser - Update a provisioned organization membership
     *
     * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user) endpoint instead.
     *
     * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
     *
     * **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
     *
     * https://docs.github.com/rest/reference/scim/#set-scim-information-for-a-provisioned-user - API method documentation
    **/
    scimSetInformationForProvisionedUser(req: operations.ScimSetInformationForProvisionedUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimSetInformationForProvisionedUserResponse>;
    /**
     * scimUpdateAttributeForUser - Update an attribute for a SCIM user
     *
     * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
     *
     * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.
     *
     * ```
     * {
     *   "Operations":[{
     *     "op":"replace",
     *     "value":{
     *       "active":false
     *     }
     *   }]
     * }
     * ```
     *
     * https://docs.github.com/rest/reference/scim/#update-an-attribute-for-a-scim-user - API method documentation
    **/
    scimUpdateAttributeForUser(req: operations.ScimUpdateAttributeForUserRequest, config?: AxiosRequestConfig): Promise<operations.ScimUpdateAttributeForUserResponse>;
    /**
     * searchCode - Search code
     *
     * Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
     *
     * `q=addClass+in:file+language:js+repo:jquery/jquery`
     *
     * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
     *
     * #### Considerations for code search
     *
     * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
     *
     * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
     * *   Only files smaller than 384 KB are searchable.
     * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
     * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
     *
     * https://docs.github.com/rest/reference/search/#search-code - API method documentation
    **/
    searchCode(req: operations.SearchCodeRequest, config?: AxiosRequestConfig): Promise<operations.SearchCodeResponse>;
    /**
     * searchCommits - Search commits
     *
     * Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
     * metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
     *
     * `q=repo:octocat/Spoon-Knife+css`
     *
     * https://docs.github.com/rest/reference/search/#search-commits - API method documentation
    **/
    searchCommits(req: operations.SearchCommitsRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommitsResponse>;
    /**
     * searchIssuesAndPullRequests - Search issues and pull requests
     *
     * Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
     * search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
     *
     * `q=windows+label:bug+language:python+state:open&sort=created&order=asc`
     *
     * This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.
     *
     * **Note:** For [user-to-server](https://docs.github.com/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."
     *
     * https://docs.github.com/rest/reference/search/#search-issues-and-pull-requests - API method documentation
    **/
    searchIssuesAndPullRequests(req: operations.SearchIssuesAndPullRequestsRequest, config?: AxiosRequestConfig): Promise<operations.SearchIssuesAndPullRequestsResponse>;
    /**
     * searchLabels - Search labels
     *
     * Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
     *
     * `q=bug+defect+enhancement&repository_id=64778136`
     *
     * The labels that best match the query appear first in the search results.
     *
     * https://docs.github.com/rest/reference/search/#search-labels - API method documentation
    **/
    searchLabels(req: operations.SearchLabelsRequest, config?: AxiosRequestConfig): Promise<operations.SearchLabelsResponse>;
    /**
     * searchRepos - Search repositories
     *
     * Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:
     *
     * `q=tetris+language:assembly&sort=stars&order=desc`
     *
     * This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
     *
     * When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:
     *
     * `q=topic:ruby+topic:rails`
     *
     * https://docs.github.com/rest/reference/search/#search-repositories - API method documentation
    **/
    searchRepos(req: operations.SearchReposRequest, config?: AxiosRequestConfig): Promise<operations.SearchReposResponse>;
    /**
     * searchTopics - Search topics
     *
     * Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.
     *
     * When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:
     *
     * `q=ruby+is:featured`
     *
     * This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
     *
     * https://docs.github.com/rest/reference/search/#search-topics - API method documentation
    **/
    searchTopics(req: operations.SearchTopicsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTopicsResponse>;
    /**
     * searchUsers - Search users
     *
     * Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
     *
     * When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
     *
     * For example, if you're looking for a list of popular users, you might try this query:
     *
     * `q=tom+repos:%3E42+followers:%3E1000`
     *
     * This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
     *
     * https://docs.github.com/rest/reference/search/#search-users - API method documentation
    **/
    searchUsers(req: operations.SearchUsersRequest, config?: AxiosRequestConfig): Promise<operations.SearchUsersResponse>;
    /**
     * secretScanningGetAlert - Get a secret scanning alert
     *
     * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert - API method documentation
    **/
    secretScanningGetAlert(req: operations.SecretScanningGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningGetAlertResponse>;
    /**
     * secretScanningListAlertsForRepo - List secret scanning alerts for a repository
     *
     * Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository - API method documentation
    **/
    secretScanningListAlertsForRepo(req: operations.SecretScanningListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningListAlertsForRepoResponse>;
    /**
     * secretScanningUpdateAlert - Update a secret scanning alert
     *
     * Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert - API method documentation
    **/
    secretScanningUpdateAlert(req: operations.SecretScanningUpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.SecretScanningUpdateAlertResponse>;
    /**
     * teamsAddMemberLegacy - Add team member (Legacy)
     *
     * The "Add team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/rest/reference/teams#add-team-member-legacy - API method documentation
    **/
    teamsAddMemberLegacy(req: operations.TeamsAddMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddMemberLegacyResponse>;
    /**
     * teamsAddOrUpdateMembershipForUserInOrg - Add or update team membership for a user
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
    **/
    teamsAddOrUpdateMembershipForUserInOrg(req: operations.TeamsAddOrUpdateMembershipForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateMembershipForUserInOrgResponse>;
    /**
     * teamsAddOrUpdateMembershipForUserLegacy - Add or update team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy - API method documentation
    **/
    teamsAddOrUpdateMembershipForUserLegacy(req: operations.TeamsAddOrUpdateMembershipForUserLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateMembershipForUserLegacyResponse>;
    /**
     * teamsAddOrUpdateProjectPermissionsInOrg - Add or update team project permissions
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/rest/reference/teams/#add-or-update-team-project-permissions - API method documentation
    **/
    teamsAddOrUpdateProjectPermissionsInOrg(req: operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse>;
    /**
     * teamsAddOrUpdateProjectPermissionsLegacy - Add or update team project permissions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * https://docs.github.com/rest/reference/teams/#add-or-update-team-project-permissions-legacy - API method documentation
    **/
    teamsAddOrUpdateProjectPermissionsLegacy(req: operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse>;
    /**
     * teamsAddOrUpdateRepoPermissionsInOrg - Add or update team repository permissions
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     *
     * https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
    **/
    teamsAddOrUpdateRepoPermissionsInOrg(req: operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse>;
    /**
     * teamsAddOrUpdateRepoPermissionsLegacy - Add or update team repository permissions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions-legacy - API method documentation
    **/
    teamsAddOrUpdateRepoPermissionsLegacy(req: operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse>;
    /**
     * teamsCheckPermissionsForProjectInOrg - Check team permissions for a project
     *
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-project - API method documentation
    **/
    teamsCheckPermissionsForProjectInOrg(req: operations.TeamsCheckPermissionsForProjectInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForProjectInOrgResponse>;
    /**
     * teamsCheckPermissionsForProjectLegacy - Check team permissions for a project (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
     *
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-project-legacy - API method documentation
    **/
    teamsCheckPermissionsForProjectLegacy(req: operations.TeamsCheckPermissionsForProjectLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForProjectLegacyResponse>;
    /**
     * teamsCheckPermissionsForRepoInOrg - Check team permissions for a repository
     *
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
     *
     * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
    **/
    teamsCheckPermissionsForRepoInOrg(req: operations.TeamsCheckPermissionsForRepoInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForRepoInOrgResponse>;
    /**
     * teamsCheckPermissionsForRepoLegacy - Check team permissions for a repository (Legacy)
     *
     * **Note**: Repositories inherited through a parent team will also be checked.
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository-legacy - API method documentation
    **/
    teamsCheckPermissionsForRepoLegacy(req: operations.TeamsCheckPermissionsForRepoLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForRepoLegacyResponse>;
    /**
     * teamsCreate - Create a team
     *
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
     *
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
     *
     * https://docs.github.com/rest/reference/teams/#create-a-team - API method documentation
    **/
    teamsCreate(req: operations.TeamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateResponse>;
    /**
     * teamsCreateDiscussionCommentInOrg - Create a discussion comment
     *
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     *
     * https://docs.github.com/rest/reference/teams#create-a-discussion-comment - API method documentation
    **/
    teamsCreateDiscussionCommentInOrg(req: operations.TeamsCreateDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionCommentInOrgResponse>;
    /**
     * teamsCreateDiscussionCommentLegacy - Create a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/rest/reference/teams#create-a-discussion-comment) endpoint.
     *
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/teams#create-a-discussion-comment-legacy - API method documentation
    **/
    teamsCreateDiscussionCommentLegacy(req: operations.TeamsCreateDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionCommentLegacyResponse>;
    /**
     * teamsCreateDiscussionInOrg - Create a discussion
     *
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
     *
     * https://docs.github.com/rest/reference/teams#create-a-discussion - API method documentation
    **/
    teamsCreateDiscussionInOrg(req: operations.TeamsCreateDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionInOrgResponse>;
    /**
     * teamsCreateDiscussionLegacy - Create a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/rest/reference/teams#create-a-discussion) endpoint.
     *
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/rest/reference/teams#create-a-discussion-legacy - API method documentation
    **/
    teamsCreateDiscussionLegacy(req: operations.TeamsCreateDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionLegacyResponse>;
    /**
     * teamsCreateOrUpdateIdpGroupConnectionsInOrg - Create or update IdP group connections
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
     *
     * https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections - API method documentation
    **/
    teamsCreateOrUpdateIdpGroupConnectionsInOrg(req: operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse>;
    /**
     * teamsCreateOrUpdateIdpGroupConnectionsLegacy - Create or update IdP group connections (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create or update IdP group connections`](https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.
     *
     * https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections-legacy - API method documentation
    **/
    teamsCreateOrUpdateIdpGroupConnectionsLegacy(req: operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse>;
    /**
     * teamsDeleteDiscussionCommentInOrg - Delete a discussion comment
     *
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/rest/reference/teams#delete-a-discussion-comment - API method documentation
    **/
    teamsDeleteDiscussionCommentInOrg(req: operations.TeamsDeleteDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionCommentInOrgResponse>;
    /**
     * teamsDeleteDiscussionCommentLegacy - Delete a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/rest/reference/teams#delete-a-discussion-comment) endpoint.
     *
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#delete-a-discussion-comment-legacy - API method documentation
    **/
    teamsDeleteDiscussionCommentLegacy(req: operations.TeamsDeleteDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionCommentLegacyResponse>;
    /**
     * teamsDeleteDiscussionInOrg - Delete a discussion
     *
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/rest/reference/teams#delete-a-discussion - API method documentation
    **/
    teamsDeleteDiscussionInOrg(req: operations.TeamsDeleteDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionInOrgResponse>;
    /**
     * teamsDeleteDiscussionLegacy - Delete a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/rest/reference/teams#delete-a-discussion) endpoint.
     *
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#delete-a-discussion-legacy - API method documentation
    **/
    teamsDeleteDiscussionLegacy(req: operations.TeamsDeleteDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionLegacyResponse>;
    /**
     * teamsDeleteInOrg - Delete a team
     *
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/rest/reference/teams/#delete-a-team - API method documentation
    **/
    teamsDeleteInOrg(req: operations.TeamsDeleteInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteInOrgResponse>;
    /**
     * teamsDeleteLegacy - Delete a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/reference/teams#delete-a-team) endpoint.
     *
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * https://docs.github.com/rest/reference/teams/#delete-a-team-legacy - API method documentation
    **/
    teamsDeleteLegacy(req: operations.TeamsDeleteLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteLegacyResponse>;
    /**
     * teamsGetByName - Get a team by name
     *
     * Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/rest/reference/teams/#get-a-team-by-name - API method documentation
    **/
    teamsGetByName(req: operations.TeamsGetByNameRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetByNameResponse>;
    /**
     * teamsGetDiscussionCommentInOrg - Get a discussion comment
     *
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/rest/reference/teams#get-a-discussion-comment - API method documentation
    **/
    teamsGetDiscussionCommentInOrg(req: operations.TeamsGetDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionCommentInOrgResponse>;
    /**
     * teamsGetDiscussionCommentLegacy - Get a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/rest/reference/teams#get-a-discussion-comment) endpoint.
     *
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#get-a-discussion-comment-legacy - API method documentation
    **/
    teamsGetDiscussionCommentLegacy(req: operations.TeamsGetDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionCommentLegacyResponse>;
    /**
     * teamsGetDiscussionInOrg - Get a discussion
     *
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/rest/reference/teams#get-a-discussion - API method documentation
    **/
    teamsGetDiscussionInOrg(req: operations.TeamsGetDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionInOrgResponse>;
    /**
     * teamsGetDiscussionLegacy - Get a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/rest/reference/teams#get-a-discussion) endpoint.
     *
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#get-a-discussion-legacy - API method documentation
    **/
    teamsGetDiscussionLegacy(req: operations.TeamsGetDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionLegacyResponse>;
    /**
     * teamsGetLegacy - Get a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/reference/teams#get-a-team-by-name) endpoint.
     *
     * https://docs.github.com/rest/reference/teams/#get-a-team-legacy - API method documentation
    **/
    teamsGetLegacy(req: operations.TeamsGetLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetLegacyResponse>;
    /**
     * teamsGetMemberLegacy - Get team member (Legacy)
     *
     * The "Get team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * https://docs.github.com/rest/reference/teams#get-team-member-legacy - API method documentation
    **/
    teamsGetMemberLegacy(req: operations.TeamsGetMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMemberLegacyResponse>;
    /**
     * teamsGetMembershipForUserInOrg - Get team membership for a user
     *
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
     *
     * https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user - API method documentation
    **/
    teamsGetMembershipForUserInOrg(req: operations.TeamsGetMembershipForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipForUserInOrgResponse>;
    /**
     * teamsGetMembershipForUserLegacy - Get team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint.
     *
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
     *
     * https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user-legacy - API method documentation
    **/
    teamsGetMembershipForUserLegacy(req: operations.TeamsGetMembershipForUserLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipForUserLegacyResponse>;
    /**
     * teamsList - List teams
     *
     * Lists all teams in an organization that are visible to the authenticated user.
     *
     * https://docs.github.com/rest/reference/teams/#list-teams - API method documentation
    **/
    teamsList(req: operations.TeamsListRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListResponse>;
    /**
     * teamsListChildInOrg - List child teams
     *
     * Lists the child teams of the team specified by `{team_slug}`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
     *
     * https://docs.github.com/rest/reference/teams/#list-child-teams - API method documentation
    **/
    teamsListChildInOrg(req: operations.TeamsListChildInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListChildInOrgResponse>;
    /**
     * teamsListChildLegacy - List child teams (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/rest/reference/teams#list-child-teams) endpoint.
     *
     * https://docs.github.com/rest/reference/teams/#list-child-teams-legacy - API method documentation
    **/
    teamsListChildLegacy(req: operations.TeamsListChildLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListChildLegacyResponse>;
    /**
     * teamsListDiscussionCommentsInOrg - List discussion comments
     *
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     *
     * https://docs.github.com/rest/reference/teams#list-discussion-comments - API method documentation
    **/
    teamsListDiscussionCommentsInOrg(req: operations.TeamsListDiscussionCommentsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionCommentsInOrgResponse>;
    /**
     * teamsListDiscussionCommentsLegacy - List discussion comments (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/rest/reference/teams#list-discussion-comments) endpoint.
     *
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#list-discussion-comments-legacy - API method documentation
    **/
    teamsListDiscussionCommentsLegacy(req: operations.TeamsListDiscussionCommentsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionCommentsLegacyResponse>;
    /**
     * teamsListDiscussionsInOrg - List discussions
     *
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
     *
     * https://docs.github.com/rest/reference/teams#list-discussions - API method documentation
    **/
    teamsListDiscussionsInOrg(req: operations.TeamsListDiscussionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionsInOrgResponse>;
    /**
     * teamsListDiscussionsLegacy - List discussions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/rest/reference/teams#list-discussions) endpoint.
     *
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#list-discussions-legacy - API method documentation
    **/
    teamsListDiscussionsLegacy(req: operations.TeamsListDiscussionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionsLegacyResponse>;
    /**
     * teamsListForAuthenticatedUser - List teams for the authenticated user
     *
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/apps/building-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams/#list-teams-for-the-authenticated-user - API method documentation
    **/
    teamsListForAuthenticatedUser(req: operations.TeamsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListForAuthenticatedUserResponse>;
    /**
     * teamsListIdpGroupsForLegacy - List IdP groups for a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List IdP groups for a team`](https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * List IdP groups connected to a team on GitHub.
     *
     * https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team-legacy - API method documentation
    **/
    teamsListIdpGroupsForLegacy(req: operations.TeamsListIdpGroupsForLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListIdpGroupsForLegacyResponse>;
    /**
     * teamsListIdpGroupsForOrg - List IdP groups for an organization
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * List IdP groups available in an organization. You can limit your page results using the `per_page` parameter. GitHub generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."
     *
     * The `per_page` parameter provides pagination for a list of IdP groups the authenticated user can access in an organization. For example, if the user `octocat` wants to see two groups per page in `octo-org` via cURL, it would look like this:
     *
     * https://docs.github.com/rest/reference/teams#list-idp-groups-for-an-organization - API method documentation
    **/
    teamsListIdpGroupsForOrg(req: operations.TeamsListIdpGroupsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListIdpGroupsForOrgResponse>;
    /**
     * teamsListIdpGroupsInOrg - List IdP groups for a team
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * List IdP groups connected to a team on GitHub.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
     *
     * https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team - API method documentation
    **/
    teamsListIdpGroupsInOrg(req: operations.TeamsListIdpGroupsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListIdpGroupsInOrgResponse>;
    /**
     * teamsListMembersInOrg - List team members
     *
     * Team members will include the members of child teams.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * https://docs.github.com/rest/reference/teams#list-team-members - API method documentation
    **/
    teamsListMembersInOrg(req: operations.TeamsListMembersInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListMembersInOrgResponse>;
    /**
     * teamsListMembersLegacy - List team members (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/rest/reference/teams#list-team-members) endpoint.
     *
     * Team members will include the members of child teams.
     *
     * https://docs.github.com/rest/reference/teams#list-team-members-legacy - API method documentation
    **/
    teamsListMembersLegacy(req: operations.TeamsListMembersLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListMembersLegacyResponse>;
    /**
     * teamsListPendingInvitationsInOrg - List pending team invitations
     *
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.
     *
     * https://docs.github.com/rest/reference/teams#list-pending-team-invitations - API method documentation
    **/
    teamsListPendingInvitationsInOrg(req: operations.TeamsListPendingInvitationsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListPendingInvitationsInOrgResponse>;
    /**
     * teamsListPendingInvitationsLegacy - List pending team invitations (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://docs.github.com/rest/reference/teams#list-pending-team-invitations) endpoint.
     *
     * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
     *
     * https://docs.github.com/rest/reference/teams#list-pending-team-invitations-legacy - API method documentation
    **/
    teamsListPendingInvitationsLegacy(req: operations.TeamsListPendingInvitationsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListPendingInvitationsLegacyResponse>;
    /**
     * teamsListProjectsInOrg - List team projects
     *
     * Lists the organization projects for a team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
     *
     * https://docs.github.com/rest/reference/teams/#list-team-projects - API method documentation
    **/
    teamsListProjectsInOrg(req: operations.TeamsListProjectsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListProjectsInOrgResponse>;
    /**
     * teamsListProjectsLegacy - List team projects (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/rest/reference/teams#list-team-projects) endpoint.
     *
     * Lists the organization projects for a team.
     *
     * https://docs.github.com/rest/reference/teams/#list-team-projects-legacy - API method documentation
    **/
    teamsListProjectsLegacy(req: operations.TeamsListProjectsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListProjectsLegacyResponse>;
    /**
     * teamsListReposInOrg - List team repositories
     *
     * Lists a team's repositories visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
     *
     * https://docs.github.com/rest/reference/teams/#list-team-repositories - API method documentation
    **/
    teamsListReposInOrg(req: operations.TeamsListReposInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListReposInOrgResponse>;
    /**
     * teamsListReposLegacy - List team repositories (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/rest/reference/teams#list-team-repositories) endpoint.
     *
     * https://docs.github.com/rest/reference/teams/#list-team-repositories-legacy - API method documentation
    **/
    teamsListReposLegacy(req: operations.TeamsListReposLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListReposLegacyResponse>;
    /**
     * teamsRemoveMemberLegacy - Remove team member (Legacy)
     *
     * The "Remove team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * https://docs.github.com/rest/reference/teams#remove-team-member-legacy - API method documentation
    **/
    teamsRemoveMemberLegacy(req: operations.TeamsRemoveMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMemberLegacyResponse>;
    /**
     * teamsRemoveMembershipForUserInOrg - Remove team membership for a user
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
    **/
    teamsRemoveMembershipForUserInOrg(req: operations.TeamsRemoveMembershipForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMembershipForUserInOrgResponse>;
    /**
     * teamsRemoveMembershipForUserLegacy - Remove team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user-legacy - API method documentation
    **/
    teamsRemoveMembershipForUserLegacy(req: operations.TeamsRemoveMembershipForUserLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMembershipForUserLegacyResponse>;
    /**
     * teamsRemoveProjectInOrg - Remove a project from a team
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/rest/reference/teams/#remove-a-project-from-a-team - API method documentation
    **/
    teamsRemoveProjectInOrg(req: operations.TeamsRemoveProjectInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveProjectInOrgResponse>;
    /**
     * teamsRemoveProjectLegacy - Remove a project from a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team) endpoint.
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
     *
     * https://docs.github.com/rest/reference/teams/#remove-a-project-from-a-team-legacy - API method documentation
    **/
    teamsRemoveProjectLegacy(req: operations.TeamsRemoveProjectLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveProjectLegacyResponse>;
    /**
     * teamsRemoveRepoInOrg - Remove a repository from a team
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
    **/
    teamsRemoveRepoInOrg(req: operations.TeamsRemoveRepoInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveRepoInOrgResponse>;
    /**
     * teamsRemoveRepoLegacy - Remove a repository from a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     *
     * https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team-legacy - API method documentation
    **/
    teamsRemoveRepoLegacy(req: operations.TeamsRemoveRepoLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveRepoLegacyResponse>;
    /**
     * teamsUpdateDiscussionCommentInOrg - Update a discussion comment
     *
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/rest/reference/teams#update-a-discussion-comment - API method documentation
    **/
    teamsUpdateDiscussionCommentInOrg(req: operations.TeamsUpdateDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionCommentInOrgResponse>;
    /**
     * teamsUpdateDiscussionCommentLegacy - Update a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/rest/reference/teams#update-a-discussion-comment) endpoint.
     *
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#update-a-discussion-comment-legacy - API method documentation
    **/
    teamsUpdateDiscussionCommentLegacy(req: operations.TeamsUpdateDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionCommentLegacyResponse>;
    /**
     * teamsUpdateDiscussionInOrg - Update a discussion
     *
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/rest/reference/teams#update-a-discussion - API method documentation
    **/
    teamsUpdateDiscussionInOrg(req: operations.TeamsUpdateDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionInOrgResponse>;
    /**
     * teamsUpdateDiscussionLegacy - Update a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/rest/reference/teams#update-a-discussion) endpoint.
     *
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/teams#update-a-discussion-legacy - API method documentation
    **/
    teamsUpdateDiscussionLegacy(req: operations.TeamsUpdateDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionLegacyResponse>;
    /**
     * teamsUpdateInOrg - Update a team
     *
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/rest/reference/teams/#update-a-team - API method documentation
    **/
    teamsUpdateInOrg(req: operations.TeamsUpdateInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateInOrgResponse>;
    /**
     * teamsUpdateLegacy - Update a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/reference/teams#update-a-team) endpoint.
     *
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
     *
     * https://docs.github.com/rest/reference/teams/#update-a-team-legacy - API method documentation
    **/
    teamsUpdateLegacy(req: operations.TeamsUpdateLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateLegacyResponse>;
    /**
     * usersAddEmailForAuthenticated - Add an email address for the authenticated user
     *
     * This endpoint is accessible with the `user` scope.
     *
     * https://docs.github.com/rest/reference/users#add-an-email-address-for-the-authenticated-user - API method documentation
    **/
    usersAddEmailForAuthenticated(req: operations.UsersAddEmailForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersAddEmailForAuthenticatedResponse>;
    /**
     * usersBlock - Block a user
     *
     * https://docs.github.com/rest/reference/users#block-a-user - API method documentation
    **/
    usersBlock(req: operations.UsersBlockRequest, config?: AxiosRequestConfig): Promise<operations.UsersBlockResponse>;
    /**
     * usersCheckBlocked - Check if a user is blocked by the authenticated user
     *
     * https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user - API method documentation
    **/
    usersCheckBlocked(req: operations.UsersCheckBlockedRequest, config?: AxiosRequestConfig): Promise<operations.UsersCheckBlockedResponse>;
    /**
     * usersCheckFollowingForUser - Check if a user follows another user
     *
     * https://docs.github.com/rest/reference/users#check-if-a-user-follows-another-user - API method documentation
    **/
    usersCheckFollowingForUser(req: operations.UsersCheckFollowingForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersCheckFollowingForUserResponse>;
    /**
     * usersCheckPersonIsFollowedByAuthenticated - Check if a person is followed by the authenticated user
     *
     * https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user - API method documentation
    **/
    usersCheckPersonIsFollowedByAuthenticated(req: operations.UsersCheckPersonIsFollowedByAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersCheckPersonIsFollowedByAuthenticatedResponse>;
    /**
     * usersCreateGpgKeyForAuthenticated - Create a GPG key for the authenticated user
     *
     * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#create-a-gpg-key-for-the-authenticated-user - API method documentation
    **/
    usersCreateGpgKeyForAuthenticated(req: operations.UsersCreateGpgKeyForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersCreateGpgKeyForAuthenticatedResponse>;
    /**
     * usersCreatePublicSshKeyForAuthenticated - Create a public SSH key for the authenticated user
     *
     * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user - API method documentation
    **/
    usersCreatePublicSshKeyForAuthenticated(req: operations.UsersCreatePublicSshKeyForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersCreatePublicSshKeyForAuthenticatedResponse>;
    /**
     * usersDeleteEmailForAuthenticated - Delete an email address for the authenticated user
     *
     * This endpoint is accessible with the `user` scope.
     *
     * https://docs.github.com/rest/reference/users#delete-an-email-address-for-the-authenticated-user - API method documentation
    **/
    usersDeleteEmailForAuthenticated(req: operations.UsersDeleteEmailForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteEmailForAuthenticatedResponse>;
    /**
     * usersDeleteGpgKeyForAuthenticated - Delete a GPG key for the authenticated user
     *
     * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user - API method documentation
    **/
    usersDeleteGpgKeyForAuthenticated(req: operations.UsersDeleteGpgKeyForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteGpgKeyForAuthenticatedResponse>;
    /**
     * usersDeletePublicSshKeyForAuthenticated - Delete a public SSH key for the authenticated user
     *
     * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user - API method documentation
    **/
    usersDeletePublicSshKeyForAuthenticated(req: operations.UsersDeletePublicSshKeyForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeletePublicSshKeyForAuthenticatedResponse>;
    /**
     * usersFollow - Follow a user
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     *
     * https://docs.github.com/rest/reference/users#follow-a-user - API method documentation
    **/
    usersFollow(req: operations.UsersFollowRequest, config?: AxiosRequestConfig): Promise<operations.UsersFollowResponse>;
    /**
     * usersGetAuthenticated - Get the authenticated user
     *
     * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
     *
     * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
     *
     * https://docs.github.com/rest/reference/users/#get-the-authenticated-user - API method documentation
    **/
    usersGetAuthenticated(config?: AxiosRequestConfig): Promise<operations.UsersGetAuthenticatedResponse>;
    /**
     * usersGetByUsername - Get a user
     *
     * Provides publicly available information about someone with a GitHub account.
     *
     * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub plan information' below"
     *
     * The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/overview/resources-in-the-rest-api#authentication).
     *
     * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/rest/reference/users#emails)".
     *
     * https://docs.github.com/rest/reference/users/#get-a-user - API method documentation
    **/
    usersGetByUsername(req: operations.UsersGetByUsernameRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetByUsernameResponse>;
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
     * https://docs.github.com/rest/reference/users/#get-contextual-information-for-a-user - API method documentation
    **/
    usersGetContextForUser(req: operations.UsersGetContextForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetContextForUserResponse>;
    /**
     * usersGetGpgKeyForAuthenticated - Get a GPG key for the authenticated user
     *
     * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user - API method documentation
    **/
    usersGetGpgKeyForAuthenticated(req: operations.UsersGetGpgKeyForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetGpgKeyForAuthenticatedResponse>;
    /**
     * usersGetPublicSshKeyForAuthenticated - Get a public SSH key for the authenticated user
     *
     * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user - API method documentation
    **/
    usersGetPublicSshKeyForAuthenticated(req: operations.UsersGetPublicSshKeyForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetPublicSshKeyForAuthenticatedResponse>;
    /**
     * usersList - List users
     *
     * Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
     *
     * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
     *
     * https://docs.github.com/rest/reference/users/#list-users - API method documentation
    **/
    usersList(req: operations.UsersListRequest, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * usersListBlockedByAuthenticated - List users blocked by the authenticated user
     *
     * List the users you've blocked on your personal account.
     *
     * https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user - API method documentation
    **/
    usersListBlockedByAuthenticated(config?: AxiosRequestConfig): Promise<operations.UsersListBlockedByAuthenticatedResponse>;
    /**
     * usersListEmailsForAuthenticated - List email addresses for the authenticated user
     *
     * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
     *
     * https://docs.github.com/rest/reference/users#list-email-addresses-for-the-authenticated-user - API method documentation
    **/
    usersListEmailsForAuthenticated(req: operations.UsersListEmailsForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersListEmailsForAuthenticatedResponse>;
    /**
     * usersListFollowedByAuthenticated - List the people the authenticated user follows
     *
     * Lists the people who the authenticated user follows.
     *
     * https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-follows - API method documentation
    **/
    usersListFollowedByAuthenticated(req: operations.UsersListFollowedByAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowedByAuthenticatedResponse>;
    /**
     * usersListFollowersForAuthenticatedUser - List followers of the authenticated user
     *
     * Lists the people following the authenticated user.
     *
     * https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-user - API method documentation
    **/
    usersListFollowersForAuthenticatedUser(req: operations.UsersListFollowersForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowersForAuthenticatedUserResponse>;
    /**
     * usersListFollowersForUser - List followers of a user
     *
     * Lists the people following the specified user.
     *
     * https://docs.github.com/rest/reference/users#list-followers-of-a-user - API method documentation
    **/
    usersListFollowersForUser(req: operations.UsersListFollowersForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowersForUserResponse>;
    /**
     * usersListFollowingForUser - List the people a user follows
     *
     * Lists the people who the specified user follows.
     *
     * https://docs.github.com/rest/reference/users#list-the-people-a-user-follows - API method documentation
    **/
    usersListFollowingForUser(req: operations.UsersListFollowingForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowingForUserResponse>;
    /**
     * usersListGpgKeysForAuthenticated - List GPG keys for the authenticated user
     *
     * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#list-gpg-keys-for-the-authenticated-user - API method documentation
    **/
    usersListGpgKeysForAuthenticated(req: operations.UsersListGpgKeysForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersListGpgKeysForAuthenticatedResponse>;
    /**
     * usersListGpgKeysForUser - List GPG keys for a user
     *
     * Lists the GPG keys for a user. This information is accessible by anyone.
     *
     * https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user - API method documentation
    **/
    usersListGpgKeysForUser(req: operations.UsersListGpgKeysForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListGpgKeysForUserResponse>;
    /**
     * usersListPublicEmailsForAuthenticated - List public email addresses for the authenticated user
     *
     * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
     *
     * https://docs.github.com/rest/reference/users#list-public-email-addresses-for-the-authenticated-user - API method documentation
    **/
    usersListPublicEmailsForAuthenticated(req: operations.UsersListPublicEmailsForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersListPublicEmailsForAuthenticatedResponse>;
    /**
     * usersListPublicKeysForUser - List public keys for a user
     *
     * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
     *
     * https://docs.github.com/rest/reference/users#list-public-keys-for-a-user - API method documentation
    **/
    usersListPublicKeysForUser(req: operations.UsersListPublicKeysForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListPublicKeysForUserResponse>;
    /**
     * usersListPublicSshKeysForAuthenticated - List public SSH keys for the authenticated user
     *
     * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user - API method documentation
    **/
    usersListPublicSshKeysForAuthenticated(req: operations.UsersListPublicSshKeysForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersListPublicSshKeysForAuthenticatedResponse>;
    /**
     * usersSetPrimaryEmailVisibilityForAuthenticated - Set primary email visibility for the authenticated user
     *
     * Sets the visibility for your primary email addresses.
     *
     * https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user - API method documentation
    **/
    usersSetPrimaryEmailVisibilityForAuthenticated(req: operations.UsersSetPrimaryEmailVisibilityForAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersSetPrimaryEmailVisibilityForAuthenticatedResponse>;
    /**
     * usersUnblock - Unblock a user
     *
     * https://docs.github.com/rest/reference/users#unblock-a-user - API method documentation
    **/
    usersUnblock(req: operations.UsersUnblockRequest, config?: AxiosRequestConfig): Promise<operations.UsersUnblockResponse>;
    /**
     * usersUnfollow - Unfollow a user
     *
     * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     *
     * https://docs.github.com/rest/reference/users#unfollow-a-user - API method documentation
    **/
    usersUnfollow(req: operations.UsersUnfollowRequest, config?: AxiosRequestConfig): Promise<operations.UsersUnfollowResponse>;
    /**
     * usersUpdateAuthenticated - Update the authenticated user
     *
     * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
     *
     * https://docs.github.com/rest/reference/users/#update-the-authenticated-user - API method documentation
    **/
    usersUpdateAuthenticated(req: operations.UsersUpdateAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersUpdateAuthenticatedResponse>;
}
export {};
