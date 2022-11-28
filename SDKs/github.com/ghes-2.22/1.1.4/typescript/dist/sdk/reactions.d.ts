import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * reactionsCreateForCommitComment - Create reaction for a commit comment
     *
     * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
    **/
    reactionsCreateForCommitComment(req: operations.ReactionsCreateForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForCommitCommentResponse>;
    /**
     * reactionsCreateForIssue - Create reaction for an issue
     *
     * Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
    **/
    reactionsCreateForIssue(req: operations.ReactionsCreateForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueResponse>;
    /**
     * reactionsCreateForIssueComment - Create reaction for an issue comment
     *
     * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
    **/
    reactionsCreateForIssueComment(req: operations.ReactionsCreateForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueCommentResponse>;
    /**
     * reactionsCreateForPullRequestReviewComment - Create reaction for a pull request review comment
     *
     * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
    **/
    reactionsCreateForPullRequestReviewComment(req: operations.ReactionsCreateForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForPullRequestReviewCommentResponse>;
    /**
     * reactionsCreateForTeamDiscussionCommentInOrg - Create reaction for a team discussion comment
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion-comment - API method documentation
    **/
    reactionsCreateForTeamDiscussionCommentInOrg(req: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse>;
    /**
     * reactionsCreateForTeamDiscussionCommentLegacy - Create reaction for a team discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy - API method documentation
    **/
    reactionsCreateForTeamDiscussionCommentLegacy(req: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse>;
    /**
     * reactionsCreateForTeamDiscussionInOrg - Create reaction for a team discussion
     *
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion - API method documentation
    **/
    reactionsCreateForTeamDiscussionInOrg(req: operations.ReactionsCreateForTeamDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionInOrgResponse>;
    /**
     * reactionsCreateForTeamDiscussionLegacy - Create reaction for a team discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
     *
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy - API method documentation
    **/
    reactionsCreateForTeamDiscussionLegacy(req: operations.ReactionsCreateForTeamDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionLegacyResponse>;
    /**
     * reactionsDeleteForCommitComment - Delete a commit comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-a-commit-comment-reaction - API method documentation
    **/
    reactionsDeleteForCommitComment(req: operations.ReactionsDeleteForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForCommitCommentResponse>;
    /**
     * reactionsDeleteForIssue - Delete an issue reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-an-issue-reaction - API method documentation
    **/
    reactionsDeleteForIssue(req: operations.ReactionsDeleteForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForIssueResponse>;
    /**
     * reactionsDeleteForIssueComment - Delete an issue comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
     *
     * Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-an-issue-comment-reaction - API method documentation
    **/
    reactionsDeleteForIssueComment(req: operations.ReactionsDeleteForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForIssueCommentResponse>;
    /**
     * reactionsDeleteForPullRequestComment - Delete a pull request comment reaction
     *
     * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
     *
     * Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-a-pull-request-comment-reaction - API method documentation
    **/
    reactionsDeleteForPullRequestComment(req: operations.ReactionsDeleteForPullRequestCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForPullRequestCommentResponse>;
    /**
     * reactionsDeleteForTeamDiscussion - Delete team discussion reaction
     *
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-team-discussion-reaction - API method documentation
    **/
    reactionsDeleteForTeamDiscussion(req: operations.ReactionsDeleteForTeamDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForTeamDiscussionResponse>;
    /**
     * reactionsDeleteForTeamDiscussionComment - Delete team discussion comment reaction
     *
     * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
     *
     * Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-team-discussion-comment-reaction - API method documentation
    **/
    reactionsDeleteForTeamDiscussionComment(req: operations.ReactionsDeleteForTeamDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteForTeamDiscussionCommentResponse>;
    /**
     * reactionsDeleteLegacy - Delete a reaction (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
     *
     * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#delete-a-reaction-legacy - API method documentation
    **/
    reactionsDeleteLegacy(req: operations.ReactionsDeleteLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteLegacyResponse>;
    /**
     * reactionsListForCommitComment - List reactions for a commit comment
     *
     * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
    **/
    reactionsListForCommitComment(req: operations.ReactionsListForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForCommitCommentResponse>;
    /**
     * reactionsListForIssue - List reactions for an issue
     *
     * List the reactions to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
    **/
    reactionsListForIssue(req: operations.ReactionsListForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueResponse>;
    /**
     * reactionsListForIssueComment - List reactions for an issue comment
     *
     * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
    **/
    reactionsListForIssueComment(req: operations.ReactionsListForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueCommentResponse>;
    /**
     * reactionsListForPullRequestReviewComment - List reactions for a pull request review comment
     *
     * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
    **/
    reactionsListForPullRequestReviewComment(req: operations.ReactionsListForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForPullRequestReviewCommentResponse>;
    /**
     * reactionsListForTeamDiscussionCommentInOrg - List reactions for a team discussion comment
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion-comment - API method documentation
    **/
    reactionsListForTeamDiscussionCommentInOrg(req: operations.ReactionsListForTeamDiscussionCommentInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentInOrgResponse>;
    /**
     * reactionsListForTeamDiscussionCommentLegacy - List reactions for a team discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy - API method documentation
    **/
    reactionsListForTeamDiscussionCommentLegacy(req: operations.ReactionsListForTeamDiscussionCommentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentLegacyResponse>;
    /**
     * reactionsListForTeamDiscussionInOrg - List reactions for a team discussion
     *
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion - API method documentation
    **/
    reactionsListForTeamDiscussionInOrg(req: operations.ReactionsListForTeamDiscussionInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionInOrgResponse>;
    /**
     * reactionsListForTeamDiscussionLegacy - List reactions for a team discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
     *
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy - API method documentation
    **/
    reactionsListForTeamDiscussionLegacy(req: operations.ReactionsListForTeamDiscussionLegacyRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionLegacyResponse>;
}
