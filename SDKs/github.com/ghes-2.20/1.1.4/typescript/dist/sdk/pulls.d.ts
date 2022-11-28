import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pulls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * pullsCheckIfMerged - Check if a pull request has been merged
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#check-if-a-pull-request-has-been-merged - API method documentation
    **/
    pullsCheckIfMerged(req: operations.PullsCheckIfMergedRequest, config?: AxiosRequestConfig): Promise<operations.PullsCheckIfMergedResponse>;
    /**
     * pullsCreate - Create a pull request
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud. You can create a new pull request. This endpoint triggers [notifications](https://docs.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#create-a-pull-request - API method documentation
    **/
    pullsCreate(req: operations.PullsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateResponse>;
    /**
     * pullsCreateReplyForReviewComment - Create a reply for a review comment
     *
     * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#create-a-reply-for-a-review-comment - API method documentation
    **/
    pullsCreateReplyForReviewComment(req: operations.PullsCreateReplyForReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateReplyForReviewCommentResponse>;
    /**
     * pullsCreateReview - Create a review for a pull request
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.
     *
     * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#get-a-pull-request) endpoint.
     *
     * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#create-a-review-for-a-pull-request - API method documentation
    **/
    pullsCreateReview(req: operations.PullsCreateReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateReviewResponse>;
    /**
     * pullsCreateReviewComment - Create a review comment for a pull request
     *
     *
     * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@2.20/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
     *
     * You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).
     *
     * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#create-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsCreateReviewComment(req: operations.PullsCreateReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsCreateReviewCommentResponse>;
    /**
     * pullsDeletePendingReview - Delete a pending review for a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#delete-a-pending-review-for-a-pull-request - API method documentation
    **/
    pullsDeletePendingReview(req: operations.PullsDeletePendingReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsDeletePendingReviewResponse>;
    /**
     * pullsDeleteReviewComment - Delete a review comment for a pull request
     *
     * Deletes a review comment.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#delete-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsDeleteReviewComment(req: operations.PullsDeleteReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsDeleteReviewCommentResponse>;
    /**
     * pullsDismissReview - Dismiss a review for a pull request
     *
     * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#dismiss-a-review-for-a-pull-request - API method documentation
    **/
    pullsDismissReview(req: operations.PullsDismissReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsDismissReviewResponse>;
    /**
     * pullsGet - Get a pull request
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * Lists details of a pull request by providing its number.
     *
     * When you get, [create](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.20/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
     *
     * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
     *
     * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
     *
     * *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
     * *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
     * *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
     *
     * Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#get-a-pull-request - API method documentation
    **/
    pullsGet(req: operations.PullsGetRequest, config?: AxiosRequestConfig): Promise<operations.PullsGetResponse>;
    /**
     * pullsGetReview - Get a review for a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#get-a-review-for-a-pull-request - API method documentation
    **/
    pullsGetReview(req: operations.PullsGetReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsGetReviewResponse>;
    /**
     * pullsGetReviewComment - Get a review comment for a pull request
     *
     * Provides details for a review comment.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#get-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsGetReviewComment(req: operations.PullsGetReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsGetReviewCommentResponse>;
    /**
     * pullsList - List pull requests
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-pull-requests - API method documentation
    **/
    pullsList(req: operations.PullsListRequest, config?: AxiosRequestConfig): Promise<operations.PullsListResponse>;
    /**
     * pullsListCommentsForReview - List comments for a pull request review
     *
     * List comments for a specific pull request review.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-comments-for-a-pull-request-review - API method documentation
    **/
    pullsListCommentsForReview(req: operations.PullsListCommentsForReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsListCommentsForReviewResponse>;
    /**
     * pullsListCommits - List commits on a pull request
     *
     * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commits) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-commits-on-a-pull-request - API method documentation
    **/
    pullsListCommits(req: operations.PullsListCommitsRequest, config?: AxiosRequestConfig): Promise<operations.PullsListCommitsResponse>;
    /**
     * pullsListFiles - List pull requests files
     *
     * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-pull-requests-files - API method documentation
    **/
    pullsListFiles(req: operations.PullsListFilesRequest, config?: AxiosRequestConfig): Promise<operations.PullsListFilesResponse>;
    /**
     * pullsListRequestedReviewers - List requested reviewers for a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-requested-reviewers-for-a-pull-request - API method documentation
    **/
    pullsListRequestedReviewers(req: operations.PullsListRequestedReviewersRequest, config?: AxiosRequestConfig): Promise<operations.PullsListRequestedReviewersResponse>;
    /**
     * pullsListReviewComments - List review comments on a pull request
     *
     * Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-review-comments-on-a-pull-request - API method documentation
    **/
    pullsListReviewComments(req: operations.PullsListReviewCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PullsListReviewCommentsResponse>;
    /**
     * pullsListReviewCommentsForRepo - List review comments in a repository
     *
     * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-review-comments-in-a-repository - API method documentation
    **/
    pullsListReviewCommentsForRepo(req: operations.PullsListReviewCommentsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.PullsListReviewCommentsForRepoResponse>;
    /**
     * pullsListReviews - List reviews for a pull request
     *
     * The list of reviews returns in chronological order.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-reviews-for-a-pull-request - API method documentation
    **/
    pullsListReviews(req: operations.PullsListReviewsRequest, config?: AxiosRequestConfig): Promise<operations.PullsListReviewsResponse>;
    /**
     * pullsMerge - Merge a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#merge-a-pull-request - API method documentation
    **/
    pullsMerge(req: operations.PullsMergeRequest, config?: AxiosRequestConfig): Promise<operations.PullsMergeResponse>;
    /**
     * pullsRemoveRequestedReviewers - Remove requested reviewers from a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request - API method documentation
    **/
    pullsRemoveRequestedReviewers(req: operations.PullsRemoveRequestedReviewersRequest, config?: AxiosRequestConfig): Promise<operations.PullsRemoveRequestedReviewersResponse>;
    /**
     * pullsRequestReviewers - Request reviewers for a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#request-reviewers-for-a-pull-request - API method documentation
    **/
    pullsRequestReviewers(req: operations.PullsRequestReviewersRequest, config?: AxiosRequestConfig): Promise<operations.PullsRequestReviewersResponse>;
    /**
     * pullsSubmitReview - Submit a review for a pull request
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#submit-a-review-for-a-pull-request - API method documentation
    **/
    pullsSubmitReview(req: operations.PullsSubmitReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsSubmitReviewResponse>;
    /**
     * pullsUpdate - Update a pull request
     *
     * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls/#update-a-pull-request - API method documentation
    **/
    pullsUpdate(req: operations.PullsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateResponse>;
    /**
     * pullsUpdateBranch - Update a pull request branch
     *
     * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#update-a-pull-request-branch - API method documentation
    **/
    pullsUpdateBranch(req: operations.PullsUpdateBranchRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateBranchResponse>;
    /**
     * pullsUpdateReview - Update a review for a pull request
     *
     * Update the review summary comment with new text.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#update-a-review-for-a-pull-request - API method documentation
    **/
    pullsUpdateReview(req: operations.PullsUpdateReviewRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateReviewResponse>;
    /**
     * pullsUpdateReviewComment - Update a review comment for a pull request
     *
     * Enables you to edit a review comment.
     *
     * https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#update-a-review-comment-for-a-pull-request - API method documentation
    **/
    pullsUpdateReviewComment(req: operations.PullsUpdateReviewCommentRequest, config?: AxiosRequestConfig): Promise<operations.PullsUpdateReviewCommentResponse>;
}
