import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * teamsAddMemberLegacy - Add team member (Legacy)
     *
     * The "Add team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-team-member-legacy - API method documentation
    **/
    teamsAddMemberLegacy(req: operations.TeamsAddMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddMemberLegacyResponse>;
    /**
     * teamsAddOrUpdateMembershipForUserInOrg - Add or update team membership for a user
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
    **/
    teamsAddOrUpdateMembershipForUserInOrg(req: operations.TeamsAddOrUpdateMembershipForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateMembershipForUserInOrgResponse>;
    /**
     * teamsAddOrUpdateMembershipForUserLegacy - Add or update team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy - API method documentation
    **/
    teamsAddOrUpdateMembershipForUserLegacy(req: operations.TeamsAddOrUpdateMembershipForUserLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateMembershipForUserLegacyResponse>;
    /**
     * teamsAddOrUpdateProjectPermissionsInOrg - Add or update team project permissions
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-project-permissions - API method documentation
    **/
    teamsAddOrUpdateProjectPermissionsInOrg(req: operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse>;
    /**
     * teamsAddOrUpdateProjectPermissionsLegacy - Add or update team project permissions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-project-permissions-legacy - API method documentation
    **/
    teamsAddOrUpdateProjectPermissionsLegacy(req: operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse>;
    /**
     * teamsAddOrUpdateRepoPermissionsInOrg - Add or update team repository permissions
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
    **/
    teamsAddOrUpdateRepoPermissionsInOrg(req: operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse>;
    /**
     * teamsAddOrUpdateRepoPermissionsLegacy - Add or update team repository permissions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-repository-permissions-legacy - API method documentation
    **/
    teamsAddOrUpdateRepoPermissionsLegacy(req: operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse>;
    /**
     * teamsCheckPermissionsForProjectInOrg - Check team permissions for a project
     *
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-project - API method documentation
    **/
    teamsCheckPermissionsForProjectInOrg(req: operations.TeamsCheckPermissionsForProjectInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForProjectInOrgResponse>;
    /**
     * teamsCheckPermissionsForProjectLegacy - Check team permissions for a project (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
     *
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-project-legacy - API method documentation
    **/
    teamsCheckPermissionsForProjectLegacy(req: operations.TeamsCheckPermissionsForProjectLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForProjectLegacyResponse>;
    /**
     * teamsCheckPermissionsForRepoInOrg - Check team permissions for a repository
     *
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
     *
     * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
    **/
    teamsCheckPermissionsForRepoInOrg(req: operations.TeamsCheckPermissionsForRepoInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForRepoInOrgResponse>;
    /**
     * teamsCheckPermissionsForRepoLegacy - Check team permissions for a repository (Legacy)
     *
     * **Note**: Repositories inherited through a parent team will also be checked.
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-repository-legacy - API method documentation
    **/
    teamsCheckPermissionsForRepoLegacy(req: operations.TeamsCheckPermissionsForRepoLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForRepoLegacyResponse>;
    /**
     * teamsCreate - Create a team
     *
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
     *
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team - API method documentation
    **/
    teamsCreate(req: operations.TeamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateResponse>;
    /**
     * teamsCreateDiscussionCommentInOrg - Create a discussion comment
     *
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment - API method documentation
    **/
    teamsCreateDiscussionCommentInOrg(req: operations.TeamsCreateDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionCommentInOrgResponse>;
    /**
     * teamsCreateDiscussionCommentLegacy - Create a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment) endpoint.
     *
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment-legacy - API method documentation
    **/
    teamsCreateDiscussionCommentLegacy(req: operations.TeamsCreateDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionCommentLegacyResponse>;
    /**
     * teamsCreateDiscussionInOrg - Create a discussion
     *
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion - API method documentation
    **/
    teamsCreateDiscussionInOrg(req: operations.TeamsCreateDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionInOrgResponse>;
    /**
     * teamsCreateDiscussionLegacy - Create a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion) endpoint.
     *
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-legacy - API method documentation
    **/
    teamsCreateDiscussionLegacy(req: operations.TeamsCreateDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionLegacyResponse>;
    /**
     * teamsDeleteDiscussionCommentInOrg - Delete a discussion comment
     *
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment - API method documentation
    **/
    teamsDeleteDiscussionCommentInOrg(req: operations.TeamsDeleteDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionCommentInOrgResponse>;
    /**
     * teamsDeleteDiscussionCommentLegacy - Delete a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment) endpoint.
     *
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment-legacy - API method documentation
    **/
    teamsDeleteDiscussionCommentLegacy(req: operations.TeamsDeleteDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionCommentLegacyResponse>;
    /**
     * teamsDeleteDiscussionInOrg - Delete a discussion
     *
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion - API method documentation
    **/
    teamsDeleteDiscussionInOrg(req: operations.TeamsDeleteDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionInOrgResponse>;
    /**
     * teamsDeleteDiscussionLegacy - Delete a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion) endpoint.
     *
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-legacy - API method documentation
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
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-team - API method documentation
    **/
    teamsDeleteInOrg(req: operations.TeamsDeleteInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteInOrgResponse>;
    /**
     * teamsDeleteLegacy - Delete a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-team) endpoint.
     *
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#delete-a-team-legacy - API method documentation
    **/
    teamsDeleteLegacy(req: operations.TeamsDeleteLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteLegacyResponse>;
    /**
     * teamsGetByName - Get a team by name
     *
     * Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-team-by-name - API method documentation
    **/
    teamsGetByName(req: operations.TeamsGetByNameRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetByNameResponse>;
    /**
     * teamsGetDiscussionCommentInOrg - Get a discussion comment
     *
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment - API method documentation
    **/
    teamsGetDiscussionCommentInOrg(req: operations.TeamsGetDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionCommentInOrgResponse>;
    /**
     * teamsGetDiscussionCommentLegacy - Get a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment) endpoint.
     *
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment-legacy - API method documentation
    **/
    teamsGetDiscussionCommentLegacy(req: operations.TeamsGetDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionCommentLegacyResponse>;
    /**
     * teamsGetDiscussionInOrg - Get a discussion
     *
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion - API method documentation
    **/
    teamsGetDiscussionInOrg(req: operations.TeamsGetDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionInOrgResponse>;
    /**
     * teamsGetDiscussionLegacy - Get a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion) endpoint.
     *
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-legacy - API method documentation
    **/
    teamsGetDiscussionLegacy(req: operations.TeamsGetDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionLegacyResponse>;
    /**
     * teamsGetLegacy - Get a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-team-by-name) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#get-a-team-legacy - API method documentation
    **/
    teamsGetLegacy(req: operations.TeamsGetLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetLegacyResponse>;
    /**
     * teamsGetMemberLegacy - Get team member (Legacy)
     *
     * The "Get team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-member-legacy - API method documentation
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
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     *
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user - API method documentation
    **/
    teamsGetMembershipForUserInOrg(req: operations.TeamsGetMembershipForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipForUserInOrgResponse>;
    /**
     * teamsGetMembershipForUserLegacy - Get team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user) endpoint.
     *
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     *
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user-legacy - API method documentation
    **/
    teamsGetMembershipForUserLegacy(req: operations.TeamsGetMembershipForUserLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipForUserLegacyResponse>;
    /**
     * teamsList - List teams
     *
     * Lists all teams in an organization that are visible to the authenticated user.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-teams - API method documentation
    **/
    teamsList(req: operations.TeamsListRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListResponse>;
    /**
     * teamsListChildInOrg - List child teams
     *
     * Lists the child teams of the team specified by `{team_slug}`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-child-teams - API method documentation
    **/
    teamsListChildInOrg(req: operations.TeamsListChildInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListChildInOrgResponse>;
    /**
     * teamsListChildLegacy - List child teams (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-child-teams) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-child-teams-legacy - API method documentation
    **/
    teamsListChildLegacy(req: operations.TeamsListChildLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListChildLegacyResponse>;
    /**
     * teamsListDiscussionCommentsInOrg - List discussion comments
     *
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments - API method documentation
    **/
    teamsListDiscussionCommentsInOrg(req: operations.TeamsListDiscussionCommentsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionCommentsInOrgResponse>;
    /**
     * teamsListDiscussionCommentsLegacy - List discussion comments (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments) endpoint.
     *
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments-legacy - API method documentation
    **/
    teamsListDiscussionCommentsLegacy(req: operations.TeamsListDiscussionCommentsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionCommentsLegacyResponse>;
    /**
     * teamsListDiscussionsInOrg - List discussions
     *
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions - API method documentation
    **/
    teamsListDiscussionsInOrg(req: operations.TeamsListDiscussionsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionsInOrgResponse>;
    /**
     * teamsListDiscussionsLegacy - List discussions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions) endpoint.
     *
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions-legacy - API method documentation
    **/
    teamsListDiscussionsLegacy(req: operations.TeamsListDiscussionsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionsLegacyResponse>;
    /**
     * teamsListForAuthenticatedUser - List teams for the authenticated user
     *
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
    **/
    teamsListForAuthenticatedUser(req: operations.TeamsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListForAuthenticatedUserResponse>;
    /**
     * teamsListMembersInOrg - List team members
     *
     * Team members will include the members of child teams.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members - API method documentation
    **/
    teamsListMembersInOrg(req: operations.TeamsListMembersInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListMembersInOrgResponse>;
    /**
     * teamsListMembersLegacy - List team members (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members) endpoint.
     *
     * Team members will include the members of child teams.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members-legacy - API method documentation
    **/
    teamsListMembersLegacy(req: operations.TeamsListMembersLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListMembersLegacyResponse>;
    /**
     * teamsListProjectsInOrg - List team projects
     *
     * Lists the organization projects for a team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-projects - API method documentation
    **/
    teamsListProjectsInOrg(req: operations.TeamsListProjectsInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListProjectsInOrgResponse>;
    /**
     * teamsListProjectsLegacy - List team projects (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-projects) endpoint.
     *
     * Lists the organization projects for a team.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-team-projects-legacy - API method documentation
    **/
    teamsListProjectsLegacy(req: operations.TeamsListProjectsLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListProjectsLegacyResponse>;
    /**
     * teamsListReposInOrg - List team repositories
     *
     * Lists a team's repositories visible to the authenticated user.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-repositories - API method documentation
    **/
    teamsListReposInOrg(req: operations.TeamsListReposInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListReposInOrgResponse>;
    /**
     * teamsListReposLegacy - List team repositories (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-repositories) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-team-repositories-legacy - API method documentation
    **/
    teamsListReposLegacy(req: operations.TeamsListReposLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListReposLegacyResponse>;
    /**
     * teamsRemoveMemberLegacy - Remove team member (Legacy)
     *
     * The "Remove team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-member-legacy - API method documentation
    **/
    teamsRemoveMemberLegacy(req: operations.TeamsRemoveMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMemberLegacyResponse>;
    /**
     * teamsRemoveMembershipForUserInOrg - Remove team membership for a user
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
    **/
    teamsRemoveMembershipForUserInOrg(req: operations.TeamsRemoveMembershipForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMembershipForUserInOrgResponse>;
    /**
     * teamsRemoveMembershipForUserLegacy - Remove team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user-legacy - API method documentation
    **/
    teamsRemoveMembershipForUserLegacy(req: operations.TeamsRemoveMembershipForUserLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMembershipForUserLegacyResponse>;
    /**
     * teamsRemoveProjectInOrg - Remove a project from a team
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-project-from-a-team - API method documentation
    **/
    teamsRemoveProjectInOrg(req: operations.TeamsRemoveProjectInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveProjectInOrgResponse>;
    /**
     * teamsRemoveProjectLegacy - Remove a project from a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-project-from-a-team) endpoint.
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-project-from-a-team-legacy - API method documentation
    **/
    teamsRemoveProjectLegacy(req: operations.TeamsRemoveProjectLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveProjectLegacyResponse>;
    /**
     * teamsRemoveRepoInOrg - Remove a repository from a team
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
    **/
    teamsRemoveRepoInOrg(req: operations.TeamsRemoveRepoInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveRepoInOrgResponse>;
    /**
     * teamsRemoveRepoLegacy - Remove a repository from a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-repository-from-a-team-legacy - API method documentation
    **/
    teamsRemoveRepoLegacy(req: operations.TeamsRemoveRepoLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveRepoLegacyResponse>;
    /**
     * teamsUpdateDiscussionCommentInOrg - Update a discussion comment
     *
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment - API method documentation
    **/
    teamsUpdateDiscussionCommentInOrg(req: operations.TeamsUpdateDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionCommentInOrgResponse>;
    /**
     * teamsUpdateDiscussionCommentLegacy - Update a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment) endpoint.
     *
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment-legacy - API method documentation
    **/
    teamsUpdateDiscussionCommentLegacy(req: operations.TeamsUpdateDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionCommentLegacyResponse>;
    /**
     * teamsUpdateDiscussionInOrg - Update a discussion
     *
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion - API method documentation
    **/
    teamsUpdateDiscussionInOrg(req: operations.TeamsUpdateDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionInOrgResponse>;
    /**
     * teamsUpdateDiscussionLegacy - Update a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion) endpoint.
     *
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-legacy - API method documentation
    **/
    teamsUpdateDiscussionLegacy(req: operations.TeamsUpdateDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionLegacyResponse>;
    /**
     * teamsUpdateInOrg - Update a team
     *
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-team - API method documentation
    **/
    teamsUpdateInOrg(req: operations.TeamsUpdateInOrgRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateInOrgResponse>;
    /**
     * teamsUpdateLegacy - Update a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-team) endpoint.
     *
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#update-a-team-legacy - API method documentation
    **/
    teamsUpdateLegacy(req: operations.TeamsUpdateLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateLegacyResponse>;
}
