import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams extends SpeakeasyBase {
    repoSlug: string;
    spec: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams extends SpeakeasyBase {
    ignoreWhitespace?: boolean;
    merge?: boolean;
    path?: string;
    renames?: boolean;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedDiffstats?: shared.PaginatedDiffstats;
}
