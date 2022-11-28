import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPathParams;
    request: Map<string, any>;
    security: PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pullrequestComment?: Map<string, any>;
}
