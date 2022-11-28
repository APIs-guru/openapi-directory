import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams extends SpeakeasyBase {
    repoSlug: string;
    revision: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams;
    security: PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedChangeset?: shared.PaginatedChangeset;
}
