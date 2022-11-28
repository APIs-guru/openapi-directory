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
     * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
    **/
    reactionsCreateForCommitComment(req: operations.ReactionsCreateForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForCommitCommentResponse>;
    /**
     * reactionsCreateForIssue - Create reaction for an issue
     *
     * Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.18/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
    **/
    reactionsCreateForIssue(req: operations.ReactionsCreateForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueResponse>;
    /**
     * reactionsCreateForIssueComment - Create reaction for an issue comment
     *
     * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.18/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
    **/
    reactionsCreateForIssueComment(req: operations.ReactionsCreateForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForIssueCommentResponse>;
    /**
     * reactionsCreateForPullRequestReviewComment - Create reaction for a pull request review comment
     *
     * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
    **/
    reactionsCreateForPullRequestReviewComment(req: operations.ReactionsCreateForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForPullRequestReviewCommentResponse>;
    /**
     * reactionsCreateForTeamDiscussion - Create reaction for a team discussion
     *
     * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions/#create-reaction-for-a-team-discussion - API method documentation
    **/
    reactionsCreateForTeamDiscussion(req: operations.ReactionsCreateForTeamDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionResponse>;
    /**
     * reactionsCreateForTeamDiscussionComment - Create reaction for a team discussion comment
     *
     * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment - API method documentation
    **/
    reactionsCreateForTeamDiscussionComment(req: operations.ReactionsCreateForTeamDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsCreateForTeamDiscussionCommentResponse>;
    /**
     * reactionsDelete - Delete a reaction
     *
     * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#discussion-comments).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#delete-a-reaction-legacy - API method documentation
    **/
    reactionsDelete(req: operations.ReactionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsDeleteResponse>;
    /**
     * reactionsListForCommitComment - List reactions for a commit comment
     *
     * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#comments).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
    **/
    reactionsListForCommitComment(req: operations.ReactionsListForCommitCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForCommitCommentResponse>;
    /**
     * reactionsListForIssue - List reactions for an issue
     *
     * List the reactions to an [issue](https://docs.github.com/enterprise-server@2.18/rest/reference/issues).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
    **/
    reactionsListForIssue(req: operations.ReactionsListForIssueRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueResponse>;
    /**
     * reactionsListForIssueComment - List reactions for an issue comment
     *
     * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.18/rest/reference/issues#comments).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
    **/
    reactionsListForIssueComment(req: operations.ReactionsListForIssueCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForIssueCommentResponse>;
    /**
     * reactionsListForPullRequestReviewComment - List reactions for a pull request review comment
     *
     * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#review-comments).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
    **/
    reactionsListForPullRequestReviewComment(req: operations.ReactionsListForPullRequestReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForPullRequestReviewCommentResponse>;
    /**
     * reactionsListForTeamDiscussion - List reactions for a team discussion
     *
     * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions/#list-reactions-for-a-team-discussion - API method documentation
    **/
    reactionsListForTeamDiscussion(req: operations.ReactionsListForTeamDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionResponse>;
    /**
     * reactionsListForTeamDiscussionComment - List reactions for a team discussion comment
     *
     * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.18/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.18/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.18/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment - API method documentation
    **/
    reactionsListForTeamDiscussionComment(req: operations.ReactionsListForTeamDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.ReactionsListForTeamDiscussionCommentResponse>;
}
