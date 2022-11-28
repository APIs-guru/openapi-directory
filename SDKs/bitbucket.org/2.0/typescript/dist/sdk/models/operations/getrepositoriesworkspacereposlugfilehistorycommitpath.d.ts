import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams extends SpeakeasyBase {
    commit: string;
    path: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams extends SpeakeasyBase {
    q?: string;
    renames?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedFiles?: shared.PaginatedFiles;
}
