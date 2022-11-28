import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsPathParams;
    request: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
