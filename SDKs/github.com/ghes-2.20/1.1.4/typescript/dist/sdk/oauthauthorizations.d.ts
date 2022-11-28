import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OauthAuthorizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
    oauthAuthorizationsCreateAuthorization(req: operations.OauthAuthorizationsCreateAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsCreateAuthorizationResponse>;
    /**
     * oauthAuthorizationsDeleteAuthorization - Delete an authorization
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#delete-an-authorization - API method documentation
    **/
    oauthAuthorizationsDeleteAuthorization(req: operations.OauthAuthorizationsDeleteAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsDeleteAuthorizationResponse>;
    /**
     * oauthAuthorizationsDeleteGrant - Delete a grant
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#delete-a-grant - API method documentation
    **/
    oauthAuthorizationsDeleteGrant(req: operations.OauthAuthorizationsDeleteGrantRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsDeleteGrantResponse>;
    /**
     * oauthAuthorizationsGetAuthorization - Get a single authorization
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#get-a-single-authorization - API method documentation
    **/
    oauthAuthorizationsGetAuthorization(req: operations.OauthAuthorizationsGetAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetAuthorizationResponse>;
    /**
     * oauthAuthorizationsGetGrant - Get a single grant
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#get-a-single-grant - API method documentation
    **/
    oauthAuthorizationsGetGrant(req: operations.OauthAuthorizationsGetGrantRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetGrantResponse>;
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
    oauthAuthorizationsGetOrCreateAuthorizationForApp(req: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetOrCreateAuthorizationForAppResponse>;
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
    oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint(req: operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse>;
    /**
     * oauthAuthorizationsListAuthorizations - List your authorizations
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#list-your-authorizations - API method documentation
    **/
    oauthAuthorizationsListAuthorizations(req: operations.OauthAuthorizationsListAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsListAuthorizationsResponse>;
    /**
     * oauthAuthorizationsListGrants - List your grants
     *
     * **Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.20/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
     *
     * You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/oauth-authorizations#list-your-grants - API method documentation
    **/
    oauthAuthorizationsListGrants(req: operations.OauthAuthorizationsListGrantsRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsListGrantsResponse>;
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
    oauthAuthorizationsUpdateAuthorization(req: operations.OauthAuthorizationsUpdateAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.OauthAuthorizationsUpdateAuthorizationResponse>;
}
