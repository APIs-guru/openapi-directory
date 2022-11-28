import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EnterpriseAdmin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * enterpriseAdminAddAuthorizedSshKey - Add an authorized SSH key
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#add-an-authorized-ssh-key - API method documentation
    **/
    enterpriseAdminAddAuthorizedSshKey(req: operations.EnterpriseAdminAddAuthorizedSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddAuthorizedSshKeyResponse>;
    /**
     * enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
     *
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(req: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateEnterpriseServerLicense - Create a GitHub license
     *
     * When you boot a GitHub instance for the first time, you can use the following endpoint to upload a license:
     *
     * Note that you need to POST to [`/setup/api/configure`](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#start-a-configuration-process) to start the actual configuration process.
     *
     * When using this endpoint, your GitHub instance must have a password set. This can be accomplished two ways:
     *
     * 1.  If you're working directly with the API before accessing the web interface, you must pass in the password parameter to set your password.
     * 2.  If you set up your instance via the web interface before accessing the API, your calls to this endpoint do not need the password parameter.
     *
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-settings).
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-github-enterprise-server-license - API method documentation
    **/
    enterpriseAdminCreateEnterpriseServerLicense(req: operations.EnterpriseAdminCreateEnterpriseServerLicenseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateEnterpriseServerLicenseResponse>;
    /**
     * enterpriseAdminCreateGlobalWebhook - Create a global webhook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-global-webhook - API method documentation
    **/
    enterpriseAdminCreateGlobalWebhook(req: operations.EnterpriseAdminCreateGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateGlobalWebhookResponse>;
    /**
     * enterpriseAdminCreateImpersonationOAuthToken - Create an impersonation OAuth token
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-an-impersonation-oauth-token - API method documentation
    **/
    enterpriseAdminCreateImpersonationOAuthToken(req: operations.EnterpriseAdminCreateImpersonationOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateImpersonationOAuthTokenResponse>;
    /**
     * enterpriseAdminCreateOrg - Create an organization
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-an-organization - API method documentation
    **/
    enterpriseAdminCreateOrg(req: operations.EnterpriseAdminCreateOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateOrgResponse>;
    /**
     * enterpriseAdminCreatePreReceiveEnvironment - Create a pre-receive environment
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-pre-receive-environment - API method documentation
    **/
    enterpriseAdminCreatePreReceiveEnvironment(req: operations.EnterpriseAdminCreatePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreatePreReceiveEnvironmentResponse>;
    /**
     * enterpriseAdminCreatePreReceiveHook - Create a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-pre-receive-hook - API method documentation
    **/
    enterpriseAdminCreatePreReceiveHook(req: operations.EnterpriseAdminCreatePreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreatePreReceiveHookResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateRemoveTokenForEnterprise(req: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
     *
     * Creates a new self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminCreateUser - Create a user
     *
     * If an external authentication mechanism is used, the login name should match the login name in the external system. If you are using LDAP authentication, you should also [update the LDAP mapping](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user) for the user.
     *
     * The login name will be normalized to only contain alphanumeric characters or single hyphens. For example, if you send `"octo_cat"` as the login, a user named `"octo-cat"` will be created.
     *
     * If the login name or email address is already associated with an account, the server will return a `422` response.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#create-a-user - API method documentation
    **/
    enterpriseAdminCreateUser(req: operations.EnterpriseAdminCreateUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminCreateUserResponse>;
    /**
     * enterpriseAdminDeleteGlobalWebhook - Delete a global webhook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-global-webhook - API method documentation
    **/
    enterpriseAdminDeleteGlobalWebhook(req: operations.EnterpriseAdminDeleteGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteGlobalWebhookResponse>;
    /**
     * enterpriseAdminDeleteImpersonationOAuthToken - Delete an impersonation OAuth token
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-an-impersonation-oauth-token - API method documentation
    **/
    enterpriseAdminDeleteImpersonationOAuthToken(req: operations.EnterpriseAdminDeleteImpersonationOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteImpersonationOAuthTokenResponse>;
    /**
     * enterpriseAdminDeletePersonalAccessToken - Delete a personal access token
     *
     * Deletes a personal access token. Returns a `403 - Forbidden` status when a personal access token is in use. For example, if you access this endpoint with the same personal access token that you are trying to delete, you will receive this error.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-personal-access-token - API method documentation
    **/
    enterpriseAdminDeletePersonalAccessToken(req: operations.EnterpriseAdminDeletePersonalAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePersonalAccessTokenResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-pre-receive-environment - API method documentation
    **/
    enterpriseAdminDeletePreReceiveEnvironment(req: operations.EnterpriseAdminDeletePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePreReceiveEnvironmentResponse>;
    /**
     * enterpriseAdminDeletePreReceiveHook - Delete a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-pre-receive-hook - API method documentation
    **/
    enterpriseAdminDeletePreReceiveHook(req: operations.EnterpriseAdminDeletePreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePreReceiveHookResponse>;
    /**
     * enterpriseAdminDeletePublicKey - Delete a public key
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-public-key - API method documentation
    **/
    enterpriseAdminDeletePublicKey(req: operations.EnterpriseAdminDeletePublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeletePublicKeyResponse>;
    /**
     * enterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
     *
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
     *
     * Deletes a self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
    **/
    enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(req: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse>;
    /**
     * enterpriseAdminDeleteUser - Delete a user
     *
     * Deleting a user will delete all their repositories, gists, applications, and personal settings. [Suspending a user](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#suspend-a-user) is often a better option.
     *
     * You can delete any user account except your own.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#delete-a-user - API method documentation
    **/
    enterpriseAdminDeleteUser(req: operations.EnterpriseAdminDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDeleteUserResponse>;
    /**
     * enterpriseAdminDemoteSiteAdministrator - Demote a site administrator
     *
     * You can demote any user account except your own.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#demote-a-site-administrator - API method documentation
    **/
    enterpriseAdminDemoteSiteAdministrator(req: operations.EnterpriseAdminDemoteSiteAdministratorRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDemoteSiteAdministratorResponse>;
    /**
     * enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
     *
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminEnableOrDisableMaintenanceMode - Enable or disable maintenance mode
     *
     * The possible values for `enabled` are `true` and `false`. When it's `false`, the attribute `when` is ignored and the maintenance mode is turned off. `when` defines the time period when the maintenance was enabled.
     *
     * The possible values for `when` are `now` or any date parseable by [mojombo/chronic](https://github.com/mojombo/chronic).
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode - API method documentation
    **/
    enterpriseAdminEnableOrDisableMaintenanceMode(req: operations.EnterpriseAdminEnableOrDisableMaintenanceModeRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableOrDisableMaintenanceModeResponse>;
    /**
     * enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
     *
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(req: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetAllAuthorizedSshKeys - Get all authorized SSH keys
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-all-authorized-ssh-keys - API method documentation
    **/
    enterpriseAdminGetAllAuthorizedSshKeys(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllAuthorizedSshKeysResponse>;
    /**
     * enterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
     *
     * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetAllowedActionsEnterprise(req: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetAnnouncement - Get the global announcement banner
     *
     * Gets the current message and expiration date of the global announcement banner in your enterprise.
    **/
    enterpriseAdminGetAnnouncement(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetAnnouncementResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-the-configuration-status - API method documentation
    **/
    enterpriseAdminGetConfigurationStatus(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetConfigurationStatusResponse>;
    /**
     * enterpriseAdminGetDownloadStatusForPreReceiveEnvironment - Get the download status for a pre-receive environment
     *
     * In addition to seeing the download status at the "[Get a pre-receive environment](#get-a-pre-receive-environment)" endpoint, there is also this separate endpoint for just the download status.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-the-download-status-for-a-pre-receive-environment - API method documentation
    **/
    enterpriseAdminGetDownloadStatusForPreReceiveEnvironment(req: operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse>;
    /**
     * enterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
     *
     * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * enterpriseAdminGetGlobalWebhook - Get a global webhook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-global-webhook - API method documentation
    **/
    enterpriseAdminGetGlobalWebhook(req: operations.EnterpriseAdminGetGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetGlobalWebhookResponse>;
    /**
     * enterpriseAdminGetLicenseInformation - Get license information
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-license-information - API method documentation
    **/
    enterpriseAdminGetLicenseInformation(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetLicenseInformationResponse>;
    /**
     * enterpriseAdminGetMaintenanceStatus - Get the maintenance status
     *
     * Check your installation's maintenance status:
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-the-maintenance-status - API method documentation
    **/
    enterpriseAdminGetMaintenanceStatus(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetMaintenanceStatusResponse>;
    /**
     * enterpriseAdminGetPreReceiveEnvironment - Get a pre-receive environment
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-environment - API method documentation
    **/
    enterpriseAdminGetPreReceiveEnvironment(req: operations.EnterpriseAdminGetPreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveEnvironmentResponse>;
    /**
     * enterpriseAdminGetPreReceiveHook - Get a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-hook - API method documentation
    **/
    enterpriseAdminGetPreReceiveHook(req: operations.EnterpriseAdminGetPreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveHookResponse>;
    /**
     * enterpriseAdminGetPreReceiveHookForOrg - Get a pre-receive hook for an organization
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization - API method documentation
    **/
    enterpriseAdminGetPreReceiveHookForOrg(req: operations.EnterpriseAdminGetPreReceiveHookForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveHookForOrgResponse>;
    /**
     * enterpriseAdminGetPreReceiveHookForRepo - Get a pre-receive hook for a repository
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository - API method documentation
    **/
    enterpriseAdminGetPreReceiveHookForRepo(req: operations.EnterpriseAdminGetPreReceiveHookForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetPreReceiveHookForRepoResponse>;
    /**
     * enterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
     *
     * Gets a specific self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetSelfHostedRunnerForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse>;
    /**
     * enterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
     *
     * Gets a specific self-hosted runner group for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminGetSettings - Get settings
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-settings - API method documentation
    **/
    enterpriseAdminGetSettings(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetSettingsResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-statistics - API method documentation
    **/
    enterpriseAdminGetTypeStats(req: operations.EnterpriseAdminGetTypeStatsRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminGetTypeStatsResponse>;
    /**
     * enterpriseAdminListGlobalWebhooks - List global webhooks
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-global-webhooks - API method documentation
    **/
    enterpriseAdminListGlobalWebhooks(req: operations.EnterpriseAdminListGlobalWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListGlobalWebhooksResponse>;
    /**
     * enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
     *
     * Lists the organizations with access to a self-hosted runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
    **/
    enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminListPersonalAccessTokens - List personal access tokens
     *
     * Lists personal access tokens for all users, including admin users.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-personal-access-tokens - API method documentation
    **/
    enterpriseAdminListPersonalAccessTokens(req: operations.EnterpriseAdminListPersonalAccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPersonalAccessTokensResponse>;
    /**
     * enterpriseAdminListPreReceiveEnvironments - List pre-receive environments
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-environments - API method documentation
    **/
    enterpriseAdminListPreReceiveEnvironments(req: operations.EnterpriseAdminListPreReceiveEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveEnvironmentsResponse>;
    /**
     * enterpriseAdminListPreReceiveHooks - List pre-receive hooks
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-hooks - API method documentation
    **/
    enterpriseAdminListPreReceiveHooks(req: operations.EnterpriseAdminListPreReceiveHooksRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveHooksResponse>;
    /**
     * enterpriseAdminListPreReceiveHooksForOrg - List pre-receive hooks for an organization
     *
     * List all pre-receive hooks that are enabled or testing for this organization as well as any disabled hooks that can be configured at the organization level. Globally disabled pre-receive hooks that do not allow downstream configuration are not listed.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization - API method documentation
    **/
    enterpriseAdminListPreReceiveHooksForOrg(req: operations.EnterpriseAdminListPreReceiveHooksForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveHooksForOrgResponse>;
    /**
     * enterpriseAdminListPreReceiveHooksForRepo - List pre-receive hooks for a repository
     *
     * List all pre-receive hooks that are enabled or testing for this repository as well as any disabled hooks that are allowed to be enabled at the repository level. Pre-receive hooks that are disabled at a higher level and are not configurable will not be listed.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository - API method documentation
    **/
    enterpriseAdminListPreReceiveHooksForRepo(req: operations.EnterpriseAdminListPreReceiveHooksForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPreReceiveHooksForRepoResponse>;
    /**
     * enterpriseAdminListPublicKeys - List public keys
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-public-keys - API method documentation
    **/
    enterpriseAdminListPublicKeys(req: operations.EnterpriseAdminListPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListPublicKeysResponse>;
    /**
     * enterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
     *
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListRunnerApplicationsForEnterprise(req: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
     *
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
     *
     * Lists all self-hosted runner groups for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
     *
     * Lists all self-hosted runners configured for an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnersForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse>;
    /**
     * enterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
     *
     * Lists the self-hosted runners that are in a specific enterprise group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminPingGlobalWebhook - Ping a global webhook
     *
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@3.0/webhooks/#ping-event) to be sent to the webhook.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#ping-a-global-webhook - API method documentation
    **/
    enterpriseAdminPingGlobalWebhook(req: operations.EnterpriseAdminPingGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminPingGlobalWebhookResponse>;
    /**
     * enterpriseAdminPromoteUserToBeSiteAdministrator - Promote a user to be a site administrator
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#promote-a-user-to-be-a-site-administrator - API method documentation
    **/
    enterpriseAdminPromoteUserToBeSiteAdministrator(req: operations.EnterpriseAdminPromoteUserToBeSiteAdministratorRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminPromoteUserToBeSiteAdministratorResponse>;
    /**
     * enterpriseAdminRemoveAnnouncement - Remove the global announcement banner
     *
     * Removes the global announcement banner in your enterprise.
    **/
    enterpriseAdminRemoveAnnouncement(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAnnouncementResponse>;
    /**
     * enterpriseAdminRemoveAuthorizedSshKey - Remove an authorized SSH key
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-an-authorized-ssh-key - API method documentation
    **/
    enterpriseAdminRemoveAuthorizedSshKey(req: operations.EnterpriseAdminRemoveAuthorizedSshKeyRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveAuthorizedSshKeyResponse>;
    /**
     * enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
     *
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminRemovePreReceiveHookEnforcementForOrg - Remove pre-receive hook enforcement for an organization
     *
     * Removes any overrides for this hook at the org level for this org.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization - API method documentation
    **/
    enterpriseAdminRemovePreReceiveHookEnforcementForOrg(req: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse>;
    /**
     * enterpriseAdminRemovePreReceiveHookEnforcementForRepo - Remove pre-receive hook enforcement for a repository
     *
     * Deletes any overridden enforcement on this repository for the specified hook.
     *
     * Responds with effective values inherited from owner and/or global level.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository - API method documentation
    **/
    enterpriseAdminRemovePreReceiveHookEnforcementForRepo(req: operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse>;
    /**
     * enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
     *
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(req: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
     *
     * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetAllowedActionsEnterprise(req: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetAnnouncement - Set the global announcement banner
     *
     * Sets the message and expiration time for the global announcement banner in your enterprise.
    **/
    enterpriseAdminSetAnnouncement(req: operations.EnterpriseAdminSetAnnouncementRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetAnnouncementResponse>;
    /**
     * enterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
     *
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetGithubActionsPermissionsEnterprise(req: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
     *
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(req: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse>;
    /**
     * enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(req: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse>;
    /**
     * enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
     *
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(req: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminSetSettings - Set settings
     *
     * For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#get-settings).
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#set-settings - API method documentation
    **/
    enterpriseAdminSetSettings(req: operations.EnterpriseAdminSetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSetSettingsResponse>;
    /**
     * enterpriseAdminStartConfigurationProcess - Start a configuration process
     *
     * This endpoint allows you to start a configuration process at any time for your updated settings to take effect:
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#start-a-configuration-process - API method documentation
    **/
    enterpriseAdminStartConfigurationProcess(config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminStartConfigurationProcessResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#start-a-pre-receive-environment-download - API method documentation
    **/
    enterpriseAdminStartPreReceiveEnvironmentDownload(req: operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse>;
    /**
     * enterpriseAdminSuspendUser - Suspend a user
     *
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), Active Directory LDAP-authenticated users cannot be suspended through this API. If you attempt to suspend an Active Directory LDAP-authenticated user through this API, it will return a `403` response.
     *
     * You can suspend any user account except your own.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#suspend-a-user - API method documentation
    **/
    enterpriseAdminSuspendUser(req: operations.EnterpriseAdminSuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSuspendUserResponse>;
    /**
     * enterpriseAdminSyncLdapMappingForTeam - Sync LDAP mapping for a team
     *
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-team - API method documentation
    **/
    enterpriseAdminSyncLdapMappingForTeam(req: operations.EnterpriseAdminSyncLdapMappingForTeamRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSyncLdapMappingForTeamResponse>;
    /**
     * enterpriseAdminSyncLdapMappingForUser - Sync LDAP mapping for a user
     *
     * Note that this API call does not automatically initiate an LDAP sync. Rather, if a `201` is returned, the sync job is queued successfully, and is performed when the instance is ready.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#sync-ldap-mapping-for-a-user - API method documentation
    **/
    enterpriseAdminSyncLdapMappingForUser(req: operations.EnterpriseAdminSyncLdapMappingForUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminSyncLdapMappingForUserResponse>;
    /**
     * enterpriseAdminUnsuspendUser - Unsuspend a user
     *
     * If your GitHub instance uses [LDAP Sync with Active Directory LDAP servers](https://help.github.com/enterprise/admin/guides/user-management/using-ldap), this API is disabled and will return a `403` response. Active Directory LDAP-authenticated users cannot be unsuspended using the API.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#unsuspend-a-user - API method documentation
    **/
    enterpriseAdminUnsuspendUser(req: operations.EnterpriseAdminUnsuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUnsuspendUserResponse>;
    /**
     * enterpriseAdminUpdateGlobalWebhook - Update a global webhook
     *
     * Parameters that are not provided will be overwritten with the default value or removed if no default exists.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-global-webhook - API method documentation
    **/
    enterpriseAdminUpdateGlobalWebhook(req: operations.EnterpriseAdminUpdateGlobalWebhookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateGlobalWebhookResponse>;
    /**
     * enterpriseAdminUpdateLdapMappingForTeam - Update LDAP mapping for a team
     *
     * Updates the [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. [LDAP synchronization](https://help.github.com/enterprise/admin/guides/user-management/using-ldap/#enabling-ldap-sync) must be enabled to map LDAP entries to a team. Use the [Create a team](https://docs.github.com/enterprise-server@3.0/rest/reference/teams/#create-a-team) endpoint to create a team with LDAP mapping.
     *
     * If you pass the `hellcat-preview` media type, you can also update the LDAP mapping of a child team.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team - API method documentation
    **/
    enterpriseAdminUpdateLdapMappingForTeam(req: operations.EnterpriseAdminUpdateLdapMappingForTeamRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateLdapMappingForTeamResponse>;
    /**
     * enterpriseAdminUpdateLdapMappingForUser - Update LDAP mapping for a user
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-ldap-mapping-for-a-user - API method documentation
    **/
    enterpriseAdminUpdateLdapMappingForUser(req: operations.EnterpriseAdminUpdateLdapMappingForUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateLdapMappingForUserResponse>;
    /**
     * enterpriseAdminUpdateOrgName - Update an organization name
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-an-organization-name - API method documentation
    **/
    enterpriseAdminUpdateOrgName(req: operations.EnterpriseAdminUpdateOrgNameRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateOrgNameResponse>;
    /**
     * enterpriseAdminUpdatePreReceiveEnvironment - Update a pre-receive environment
     *
     * You cannot modify the default environment. If you attempt to modify the default environment, you will receive a `422 Unprocessable Entity` response.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-pre-receive-environment - API method documentation
    **/
    enterpriseAdminUpdatePreReceiveEnvironment(req: operations.EnterpriseAdminUpdatePreReceiveEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveEnvironmentResponse>;
    /**
     * enterpriseAdminUpdatePreReceiveHook - Update a pre-receive hook
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-pre-receive-hook - API method documentation
    **/
    enterpriseAdminUpdatePreReceiveHook(req: operations.EnterpriseAdminUpdatePreReceiveHookRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveHookResponse>;
    /**
     * enterpriseAdminUpdatePreReceiveHookEnforcementForOrg - Update pre-receive hook enforcement for an organization
     *
     * For pre-receive hooks which are allowed to be configured at the org level, you can set `enforcement` and `allow_downstream_configuration`
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization - API method documentation
    **/
    enterpriseAdminUpdatePreReceiveHookEnforcementForOrg(req: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse>;
    /**
     * enterpriseAdminUpdatePreReceiveHookEnforcementForRepo - Update pre-receive hook enforcement for a repository
     *
     * For pre-receive hooks which are allowed to be configured at the repo level, you can set `enforcement`
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository - API method documentation
    **/
    enterpriseAdminUpdatePreReceiveHookEnforcementForRepo(req: operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse>;
    /**
     * enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(req: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse>;
    /**
     * enterpriseAdminUpdateUsernameForUser - Update the username for a user
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#update-the-username-for-a-user - API method documentation
    **/
    enterpriseAdminUpdateUsernameForUser(req: operations.EnterpriseAdminUpdateUsernameForUserRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpdateUsernameForUserResponse>;
    /**
     * enterpriseAdminUpgradeLicense - Upgrade a license
     *
     * This API upgrades your license and also triggers the configuration process:
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/enterprise-admin#upgrade-a-license - API method documentation
    **/
    enterpriseAdminUpgradeLicense(req: operations.EnterpriseAdminUpgradeLicenseRequest, config?: AxiosRequestConfig): Promise<operations.EnterpriseAdminUpgradeLicenseResponse>;
}
