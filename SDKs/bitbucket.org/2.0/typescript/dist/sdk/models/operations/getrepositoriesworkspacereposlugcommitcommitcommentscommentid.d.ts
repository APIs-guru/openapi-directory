import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    commitComment?: Map<string, any>;
}
