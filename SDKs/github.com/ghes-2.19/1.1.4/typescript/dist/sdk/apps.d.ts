import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appsAddRepoToInstallation - Add a repository to an app installation
     *
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#add-a-repository-to-an-app-installation - API method documentation
    **/
    appsAddRepoToInstallation(req: operations.AppsAddRepoToInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsAddRepoToInstallationResponse>;
    /**
     * appsCreateContentAttachment - Create a content attachment
     *
     * Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` and `repository` `full_name` of the content reference from the [`content_reference` event](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#content_reference) to create an attachment.
     *
     * The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/enterprise-server@2.19/apps/using-content-attachments/)" for details about content attachments.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-content-attachment - API method documentation
    **/
    appsCreateContentAttachment(req: operations.AppsCreateContentAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateContentAttachmentResponse>;
    /**
     * appsCreateFromManifest - Create a GitHub App from a manifest
     *
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#create-a-github-app-from-a-manifest - API method documentation
    **/
    appsCreateFromManifest(req: operations.AppsCreateFromManifestRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateFromManifestResponse>;
    /**
     * appsCreateInstallationAccessToken - Create an installation access token for an app
     *
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#create-an-installation-access-token-for-an-app - API method documentation
    **/
    appsCreateInstallationAccessToken(req: operations.AppsCreateInstallationAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateInstallationAccessTokenResponse>;
    /**
     * appsDeleteInstallation - Delete an installation for the authenticated app
     *
     * Uninstalls a GitHub App on a user, organization, or business account. You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#delete-an-installation-for-the-authenticated-app - API method documentation
    **/
    appsDeleteInstallation(req: operations.AppsDeleteInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteInstallationResponse>;
    /**
     * appsGetAuthenticated - Get the authenticated app
     *
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-the-authenticated-app - API method documentation
    **/
    appsGetAuthenticated(config?: AxiosRequestConfig): Promise<operations.AppsGetAuthenticatedResponse>;
    /**
     * appsGetBySlug - Get an app
     *
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps/#get-an-app - API method documentation
    **/
    appsGetBySlug(req: operations.AppsGetBySlugRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetBySlugResponse>;
    /**
     * appsGetInstallation - Get an installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetInstallation(req: operations.AppsGetInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetInstallationResponse>;
    /**
     * appsGetOrgInstallation - Get an organization installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetOrgInstallation(req: operations.AppsGetOrgInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetOrgInstallationResponse>;
    /**
     * appsGetRepoInstallation - Get a repository installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetRepoInstallation(req: operations.AppsGetRepoInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetRepoInstallationResponse>;
    /**
     * appsGetUserInstallation - Get a user installation for the authenticated app
     *
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#get-a-user-installation-for-the-authenticated-app - API method documentation
    **/
    appsGetUserInstallation(req: operations.AppsGetUserInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetUserInstallationResponse>;
    /**
     * appsListInstallationReposForAuthenticatedUser - List repositories accessible to the user access token
     *
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-user-access-token - API method documentation
    **/
    appsListInstallationReposForAuthenticatedUser(req: operations.AppsListInstallationReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationReposForAuthenticatedUserResponse>;
    /**
     * appsListInstallations - List installations for the authenticated app
     *
     * You must use a [JWT](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-installations-for-the-authenticated-app - API method documentation
    **/
    appsListInstallations(req: operations.AppsListInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsResponse>;
    /**
     * appsListInstallationsForAuthenticatedUser - List app installations accessible to the user access token
     *
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token - API method documentation
    **/
    appsListInstallationsForAuthenticatedUser(req: operations.AppsListInstallationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsForAuthenticatedUserResponse>;
    /**
     * appsListReposAccessibleToInstallation - List repositories accessible to the app installation
     *
     * List repositories that an app installation can access.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#list-repositories-accessible-to-the-app-installation - API method documentation
    **/
    appsListReposAccessibleToInstallation(req: operations.AppsListReposAccessibleToInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsListReposAccessibleToInstallationResponse>;
    /**
     * appsRemoveRepoFromInstallation - Remove a repository from an app installation
     *
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-server@2.19/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/apps#remove-a-repository-from-an-app-installation - API method documentation
    **/
    appsRemoveRepoFromInstallation(req: operations.AppsRemoveRepoFromInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsRemoveRepoFromInstallationResponse>;
}
