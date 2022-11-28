import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orgs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * orgsCheckMembershipForUser - Check organization membership for a user
     *
     * Check if a user is, publicly or privately, a member of the organization.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#check-organization-membership-for-a-user - API method documentation
    **/
    orgsCheckMembershipForUser(req: operations.OrgsCheckMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckMembershipForUserResponse>;
    /**
     * orgsCheckPublicMembershipForUser - Check public organization membership for a user
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#check-public-organization-membership-for-a-user - API method documentation
    **/
    orgsCheckPublicMembershipForUser(req: operations.OrgsCheckPublicMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCheckPublicMembershipForUserResponse>;
    /**
     * orgsConvertMemberToOutsideCollaborator - Convert an organization member to outside collaborator
     *
     * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator - API method documentation
    **/
    orgsConvertMemberToOutsideCollaborator(req: operations.OrgsConvertMemberToOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsConvertMemberToOutsideCollaboratorResponse>;
    /**
     * orgsCreateWebhook - Create an organization webhook
     *
     * Here's how you can create a hook that posts payloads in JSON format:
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#create-an-organization-webhook - API method documentation
    **/
    orgsCreateWebhook(req: operations.OrgsCreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsCreateWebhookResponse>;
    /**
     * orgsDeleteWebhook - Delete an organization webhook
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#delete-an-organization-webhook - API method documentation
    **/
    orgsDeleteWebhook(req: operations.OrgsDeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsDeleteWebhookResponse>;
    /**
     * orgsGet - Get an organization
     *
     * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
     *
     * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub Enterprise Server plan. See "[Authenticating with GitHub Apps](https://docs.github.com/enterprise-server@2.19/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub Enterprise Server plan information' below."
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-an-organization - API method documentation
    **/
    orgsGet(req: operations.OrgsGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetResponse>;
    /**
     * orgsGetMembershipForAuthenticatedUser - Get an organization membership for the authenticated user
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsGetMembershipForAuthenticatedUser(req: operations.OrgsGetMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForAuthenticatedUserResponse>;
    /**
     * orgsGetMembershipForUser - Get organization membership for a user
     *
     * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-organization-membership-for-a-user - API method documentation
    **/
    orgsGetMembershipForUser(req: operations.OrgsGetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetMembershipForUserResponse>;
    /**
     * orgsGetWebhook - Get an organization webhook
     *
     * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-an-organization-webhook - API method documentation
    **/
    orgsGetWebhook(req: operations.OrgsGetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsGetWebhookResponse>;
    /**
     * orgsList - List organizations
     *
     * Lists all organizations, in the order that they were created on GitHub Enterprise Server.
     *
     * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations - API method documentation
    **/
    orgsList(req: operations.OrgsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListResponse>;
    /**
     * orgsListAppInstallations - List app installations for an organization
     *
     * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-app-installations-for-an-organization - API method documentation
    **/
    orgsListAppInstallations(req: operations.OrgsListAppInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListAppInstallationsResponse>;
    /**
     * orgsListForAuthenticatedUser - List organizations for the authenticated user
     *
     * List organizations for the authenticated user.
     *
     * **OAuth scope requirements**
     *
     * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations-for-the-authenticated-user - API method documentation
    **/
    orgsListForAuthenticatedUser(req: operations.OrgsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForAuthenticatedUserResponse>;
    /**
     * orgsListForUser - List organizations for a user
     *
     * List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
     *
     * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organizations-for-a-user - API method documentation
    **/
    orgsListForUser(req: operations.OrgsListForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListForUserResponse>;
    /**
     * orgsListMembers - List organization members
     *
     * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organization-members - API method documentation
    **/
    orgsListMembers(req: operations.OrgsListMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembersResponse>;
    /**
     * orgsListMembershipsForAuthenticatedUser - List organization memberships for the authenticated user
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user - API method documentation
    **/
    orgsListMembershipsForAuthenticatedUser(req: operations.OrgsListMembershipsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListMembershipsForAuthenticatedUserResponse>;
    /**
     * orgsListOutsideCollaborators - List outside collaborators for an organization
     *
     * List all users who are outside collaborators of an organization.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-outside-collaborators-for-an-organization - API method documentation
    **/
    orgsListOutsideCollaborators(req: operations.OrgsListOutsideCollaboratorsRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListOutsideCollaboratorsResponse>;
    /**
     * orgsListPublicMembers - List public organization members
     *
     * Members of an organization can choose to have their membership publicized or not.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-public-organization-members - API method documentation
    **/
    orgsListPublicMembers(req: operations.OrgsListPublicMembersRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListPublicMembersResponse>;
    /**
     * orgsListWebhooks - List organization webhooks
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#list-organization-webhooks - API method documentation
    **/
    orgsListWebhooks(req: operations.OrgsListWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.OrgsListWebhooksResponse>;
    /**
     * orgsPingWebhook - Ping an organization webhook
     *
     * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.19/webhooks/#ping-event) to be sent to the hook.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#ping-an-organization-webhook - API method documentation
    **/
    orgsPingWebhook(req: operations.OrgsPingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsPingWebhookResponse>;
    /**
     * orgsRemoveMember - Remove an organization member
     *
     * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-an-organization-member - API method documentation
    **/
    orgsRemoveMember(req: operations.OrgsRemoveMemberRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMemberResponse>;
    /**
     * orgsRemoveMembershipForUser - Remove organization membership for a user
     *
     * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
     *
     * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-organization-membership-for-a-user - API method documentation
    **/
    orgsRemoveMembershipForUser(req: operations.OrgsRemoveMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveMembershipForUserResponse>;
    /**
     * orgsRemoveOutsideCollaborator - Remove outside collaborator from an organization
     *
     * Removing a user from this list will remove them from all the organization's repositories.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-outside-collaborator-from-an-organization - API method documentation
    **/
    orgsRemoveOutsideCollaborator(req: operations.OrgsRemoveOutsideCollaboratorRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemoveOutsideCollaboratorResponse>;
    /**
     * orgsRemovePublicMembershipForAuthenticatedUser - Remove public organization membership for the authenticated user
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsRemovePublicMembershipForAuthenticatedUser(req: operations.OrgsRemovePublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsRemovePublicMembershipForAuthenticatedUserResponse>;
    /**
     * orgsSetMembershipForUser - Set organization membership for a user
     *
     * Only authenticated organization owners can add a member to the organization or update the member's role.
     *
     * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
     *
     * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
     *
     * **Rate limits**
     *
     * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#set-organization-membership-for-a-user - API method documentation
    **/
    orgsSetMembershipForUser(req: operations.OrgsSetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetMembershipForUserResponse>;
    /**
     * orgsSetPublicMembershipForAuthenticatedUser - Set public organization membership for the authenticated user
     *
     * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsSetPublicMembershipForAuthenticatedUser(req: operations.OrgsSetPublicMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsSetPublicMembershipForAuthenticatedUserResponse>;
    /**
     * orgsUpdate - Update an organization
     *
     * **Parameter Deprecation Notice:** GitHub Enterprise Server will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
     *
     * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs/#update-an-organization - API method documentation
    **/
    orgsUpdate(req: operations.OrgsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateResponse>;
    /**
     * orgsUpdateMembershipForAuthenticatedUser - Update an organization membership for the authenticated user
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user - API method documentation
    **/
    orgsUpdateMembershipForAuthenticatedUser(req: operations.OrgsUpdateMembershipForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateMembershipForAuthenticatedUserResponse>;
    /**
     * orgsUpdateWebhook - Update an organization webhook
     *
     * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-an-organization-webhook - API method documentation
    **/
    orgsUpdateWebhook(req: operations.OrgsUpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.OrgsUpdateWebhookResponse>;
}
