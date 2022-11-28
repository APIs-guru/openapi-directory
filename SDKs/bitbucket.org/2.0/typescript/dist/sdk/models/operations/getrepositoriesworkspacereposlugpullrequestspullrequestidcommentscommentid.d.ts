import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pullrequestComment?: Map<string, any>;
}
