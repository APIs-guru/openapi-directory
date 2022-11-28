import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
