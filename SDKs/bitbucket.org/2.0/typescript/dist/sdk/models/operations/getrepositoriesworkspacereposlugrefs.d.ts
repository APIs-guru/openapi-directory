import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugRefsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugRefsPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugRefsQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugRefsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedRefs?: shared.PaginatedRefs;
}
