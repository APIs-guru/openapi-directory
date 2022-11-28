import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPathParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPullrequestComments?: shared.PaginatedPullrequestComments;
}
