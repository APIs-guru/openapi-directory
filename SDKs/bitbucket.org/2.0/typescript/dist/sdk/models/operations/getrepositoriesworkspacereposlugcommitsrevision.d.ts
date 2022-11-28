import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams extends SpeakeasyBase {
    repoSlug: string;
    revision: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugCommitsRevisionPathParams;
    security: GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedChangeset?: shared.PaginatedChangeset;
}
