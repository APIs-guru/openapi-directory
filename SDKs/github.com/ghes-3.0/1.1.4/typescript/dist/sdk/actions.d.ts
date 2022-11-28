import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * actionsAddRepoAccessToSelfHostedRunnerGroupInOrg - Add repository access to a self-hosted runner group in an organization
     *
     * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsAddSelectedRepoToOrgSecret - Add selected repository to an organization secret
     *
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
    **/
    actionsAddSelectedRepoToOrgSecret(req: operations.ActionsAddSelectedRepoToOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelectedRepoToOrgSecretResponse>;
    /**
     * actionsAddSelfHostedRunnerToGroupForOrg - Add a self-hosted runner to a group for an organization
     *
     * Adds a self-hosted runner to a runner group configured in an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
    **/
    actionsAddSelfHostedRunnerToGroupForOrg(req: operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse>;
    /**
     * actionsCancelWorkflowRun - Cancel a workflow run
     *
     * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#cancel-a-workflow-run - API method documentation
    **/
    actionsCancelWorkflowRun(req: operations.ActionsCancelWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCancelWorkflowRunResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
    **/
    actionsCreateWorkflowDispatch(req: operations.ActionsCreateWorkflowDispatchRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateWorkflowDispatchResponse>;
    /**
     * actionsDeleteArtifact - Delete an artifact
     *
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-an-artifact - API method documentation
    **/
    actionsDeleteArtifact(req: operations.ActionsDeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteArtifactResponse>;
    /**
     * actionsDeleteOrgSecret - Delete an organization secret
     *
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-an-organization-secret - API method documentation
    **/
    actionsDeleteOrgSecret(req: operations.ActionsDeleteOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteOrgSecretResponse>;
    /**
     * actionsDeleteRepoSecret - Delete a repository secret
     *
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-repository-secret - API method documentation
    **/
    actionsDeleteRepoSecret(req: operations.ActionsDeleteRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteRepoSecretResponse>;
    /**
     * actionsDeleteSelfHostedRunnerFromOrg - Delete a self-hosted runner from an organization
     *
     * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
    **/
    actionsDeleteSelfHostedRunnerFromRepo(req: operations.ActionsDeleteSelfHostedRunnerFromRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerFromRepoResponse>;
    /**
     * actionsDeleteSelfHostedRunnerGroupFromOrg - Delete a self-hosted runner group from an organization
     *
     * Deletes a self-hosted runner group for an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
    **/
    actionsDeleteSelfHostedRunnerGroupFromOrg(req: operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse>;
    /**
     * actionsDeleteWorkflowRun - Delete a workflow run
     *
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
     * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
     * this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-a-workflow-run - API method documentation
    **/
    actionsDeleteWorkflowRun(req: operations.ActionsDeleteWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteWorkflowRunResponse>;
    /**
     * actionsDeleteWorkflowRunLogs - Delete workflow run logs
     *
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#delete-workflow-run-logs - API method documentation
    **/
    actionsDeleteWorkflowRunLogs(req: operations.ActionsDeleteWorkflowRunLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteWorkflowRunLogsResponse>;
    /**
     * actionsDisableSelectedRepositoryGithubActionsOrganization - Disable a selected repository for GitHub Actions in an organization
     *
     * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    actionsDisableSelectedRepositoryGithubActionsOrganization(req: operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse>;
    /**
     * actionsDisableWorkflow - Disable a workflow
     *
     * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#disable-a-workflow - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-an-artifact - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#download-workflow-run-logs - API method documentation
    **/
    actionsDownloadWorkflowRunLogs(req: operations.ActionsDownloadWorkflowRunLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadWorkflowRunLogsResponse>;
    /**
     * actionsEnableSelectedRepositoryGithubActionsOrganization - Enable a selected repository for GitHub Actions in an organization
     *
     * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    actionsEnableSelectedRepositoryGithubActionsOrganization(req: operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse>;
    /**
     * actionsEnableWorkflow - Enable a workflow
     *
     * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#enable-a-workflow - API method documentation
    **/
    actionsEnableWorkflow(req: operations.ActionsEnableWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsEnableWorkflowResponse>;
    /**
     * actionsGetAllowedActionsOrganization - Get allowed actions for an organization
     *
     * Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-allowed-actions-for-an-organization - API method documentation
    **/
    actionsGetAllowedActionsOrganization(req: operations.ActionsGetAllowedActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetAllowedActionsOrganizationResponse>;
    /**
     * actionsGetAllowedActionsRepository - Get allowed actions for a repository
     *
     * Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-allowed-actions-for-a-repository - API method documentation
    **/
    actionsGetAllowedActionsRepository(req: operations.ActionsGetAllowedActionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetAllowedActionsRepositoryResponse>;
    /**
     * actionsGetArtifact - Get an artifact
     *
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-artifact - API method documentation
    **/
    actionsGetArtifact(req: operations.ActionsGetArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetArtifactResponse>;
    /**
     * actionsGetGithubActionsPermissionsOrganization - Get GitHub Actions permissions for an organization
     *
     * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-github-actions-permissions-for-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-github-actions-permissions-for-a-repository - API method documentation
    **/
    actionsGetGithubActionsPermissionsRepository(req: operations.ActionsGetGithubActionsPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsPermissionsRepositoryResponse>;
    /**
     * actionsGetJobForWorkflowRun - Get a job for a workflow run
     *
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
    **/
    actionsGetJobForWorkflowRun(req: operations.ActionsGetJobForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetJobForWorkflowRunResponse>;
    /**
     * actionsGetOrgPublicKey - Get an organization public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-public-key - API method documentation
    **/
    actionsGetOrgPublicKey(req: operations.ActionsGetOrgPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgPublicKeyResponse>;
    /**
     * actionsGetOrgSecret - Get an organization secret
     *
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-secret - API method documentation
    **/
    actionsGetOrgSecret(req: operations.ActionsGetOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgSecretResponse>;
    /**
     * actionsGetRepoPublicKey - Get a repository public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-repository-public-key - API method documentation
    **/
    actionsGetRepoPublicKey(req: operations.ActionsGetRepoPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoPublicKeyResponse>;
    /**
     * actionsGetRepoSecret - Get a repository secret
     *
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-repository-secret - API method documentation
    **/
    actionsGetRepoSecret(req: operations.ActionsGetRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoSecretResponse>;
    /**
     * actionsGetSelfHostedRunnerForOrg - Get a self-hosted runner for an organization
     *
     * Gets a specific self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
    **/
    actionsGetSelfHostedRunnerForRepo(req: operations.ActionsGetSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerForRepoResponse>;
    /**
     * actionsGetSelfHostedRunnerGroupForOrg - Get a self-hosted runner group for an organization
     *
     * Gets a specific self-hosted runner group for an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    actionsGetSelfHostedRunnerGroupForOrg(req: operations.ActionsGetSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerGroupForOrgResponse>;
    /**
     * actionsGetWorkflow - Get a workflow
     *
     * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-workflow - API method documentation
    **/
    actionsGetWorkflow(req: operations.ActionsGetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowResponse>;
    /**
     * actionsGetWorkflowRun - Get a workflow run
     *
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-a-workflow-run - API method documentation
    **/
    actionsGetWorkflowRun(req: operations.ActionsGetWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowRunResponse>;
    /**
     * actionsListArtifactsForRepo - List artifacts for a repository
     *
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
    **/
    actionsListArtifactsForRepo(req: operations.ActionsListArtifactsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListArtifactsForRepoResponse>;
    /**
     * actionsListJobsForWorkflowRun - List jobs for a workflow run
     *
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
    **/
    actionsListJobsForWorkflowRun(req: operations.ActionsListJobsForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListJobsForWorkflowRunResponse>;
    /**
     * actionsListOrgSecrets - List organization secrets
     *
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-organization-secrets - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsListRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsListRepoSecrets - List repository secrets
     *
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-secrets - API method documentation
    **/
    actionsListRepoSecrets(req: operations.ActionsListRepoSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoSecretsResponse>;
    /**
     * actionsListRepoWorkflows - List repository workflows
     *
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-repository-workflows - API method documentation
    **/
    actionsListRepoWorkflows(req: operations.ActionsListRepoWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoWorkflowsResponse>;
    /**
     * actionsListRunnerApplicationsForOrg - List runner applications for an organization
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
    **/
    actionsListRunnerApplicationsForOrg(req: operations.ActionsListRunnerApplicationsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRunnerApplicationsForOrgResponse>;
    /**
     * actionsListRunnerApplicationsForRepo - List runner applications for a repository
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
    **/
    actionsListRunnerApplicationsForRepo(req: operations.ActionsListRunnerApplicationsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRunnerApplicationsForRepoResponse>;
    /**
     * actionsListSelectedReposForOrgSecret - List selected repositories for an organization secret
     *
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
    **/
    actionsListSelectedReposForOrgSecret(req: operations.ActionsListSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedReposForOrgSecretResponse>;
    /**
     * actionsListSelectedRepositoriesEnabledGithubActionsOrganization - List selected repositories enabled for GitHub Actions in an organization
     *
     * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    actionsListSelectedRepositoriesEnabledGithubActionsOrganization(req: operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse>;
    /**
     * actionsListSelfHostedRunnerGroupsForOrg - List self-hosted runner groups for an organization
     *
     * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
    **/
    actionsListSelfHostedRunnerGroupsForOrg(req: operations.ActionsListSelfHostedRunnerGroupsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnerGroupsForOrgResponse>;
    /**
     * actionsListSelfHostedRunnersForOrg - List self-hosted runners for an organization
     *
     * Lists all self-hosted runners configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
    **/
    actionsListSelfHostedRunnersForOrg(req: operations.ActionsListSelfHostedRunnersForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersForOrgResponse>;
    /**
     * actionsListSelfHostedRunnersForRepo - List self-hosted runners for a repository
     *
     * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
    **/
    actionsListSelfHostedRunnersForRepo(req: operations.ActionsListSelfHostedRunnersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersForRepoResponse>;
    /**
     * actionsListSelfHostedRunnersInGroupForOrg - List self-hosted runners in a group for an organization
     *
     * Lists self-hosted runners that are in a specific organization group.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    actionsListSelfHostedRunnersInGroupForOrg(req: operations.ActionsListSelfHostedRunnersInGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersInGroupForOrgResponse>;
    /**
     * actionsListWorkflowRunArtifacts - List workflow run artifacts
     *
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-run-artifacts - API method documentation
    **/
    actionsListWorkflowRunArtifacts(req: operations.ActionsListWorkflowRunArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunArtifactsResponse>;
    /**
     * actionsListWorkflowRuns - List workflow runs
     *
     * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-runs - API method documentation
    **/
    actionsListWorkflowRuns(req: operations.ActionsListWorkflowRunsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunsResponse>;
    /**
     * actionsListWorkflowRunsForRepo - List workflow runs for a repository
     *
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
    **/
    actionsListWorkflowRunsForRepo(req: operations.ActionsListWorkflowRunsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunsForRepoResponse>;
    /**
     * actionsReRunWorkflow - Re-run a workflow
     *
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#re-run-a-workflow - API method documentation
    **/
    actionsReRunWorkflow(req: operations.ActionsReRunWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReRunWorkflowResponse>;
    /**
     * actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg - Remove repository access to a self-hosted runner group in an organization
     *
     * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsRemoveSelectedRepoFromOrgSecret - Remove selected repository from an organization secret
     *
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
    **/
    actionsRemoveSelectedRepoFromOrgSecret(req: operations.ActionsRemoveSelectedRepoFromOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelectedRepoFromOrgSecretResponse>;
    /**
     * actionsRemoveSelfHostedRunnerFromGroupForOrg - Remove a self-hosted runner from a group for an organization
     *
     * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
    **/
    actionsRemoveSelfHostedRunnerFromGroupForOrg(req: operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-allowed-actions-for-a-repository - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-github-actions-permissions-for-an-organization - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-github-actions-permissions-for-a-repository - API method documentation
    **/
    actionsSetGithubActionsPermissionsRepository(req: operations.ActionsSetGithubActionsPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsPermissionsRepositoryResponse>;
    /**
     * actionsSetRepoAccessToSelfHostedRunnerGroupInOrg - Set repository access for a self-hosted runner group in an organization
     *
     * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * actionsSetSelectedReposForOrgSecret - Set selected repositories for an organization secret
     *
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
    **/
    actionsSetSelectedReposForOrgSecret(req: operations.ActionsSetSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedReposForOrgSecretResponse>;
    /**
     * actionsSetSelectedRepositoriesEnabledGithubActionsOrganization - Set selected repositories enabled for GitHub Actions in an organization
     *
     * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(req: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse>;
    /**
     * actionsSetSelfHostedRunnersInGroupForOrg - Set self-hosted runners in a group for an organization
     *
     * Replaces the list of self-hosted runners that are part of an organization runner group.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    actionsSetSelfHostedRunnersInGroupForOrg(req: operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse>;
    /**
     * actionsUpdateSelfHostedRunnerGroupForOrg - Update a self-hosted runner group for an organization
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    actionsUpdateSelfHostedRunnerGroupForOrg(req: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse>;
}
