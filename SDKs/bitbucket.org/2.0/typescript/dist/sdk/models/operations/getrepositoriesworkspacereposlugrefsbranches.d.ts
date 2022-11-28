import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugRefsBranchesPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugRefsBranchesQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugRefsBranchesSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedBranches?: shared.PaginatedBranches;
}
