import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugCommitsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugCommitsPathParams;
    security: PostRepositoriesWorkspaceRepoSlugCommitsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedChangeset?: shared.PaginatedChangeset;
}
