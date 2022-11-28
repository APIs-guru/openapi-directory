import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams extends SpeakeasyBase {
    commit: string;
    path: string;
    repoSlug: string;
    workspace: string;
}
export declare enum GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum {
    Meta = "meta",
    Rendered = "rendered"
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams extends SpeakeasyBase {
    format?: GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum;
    maxDepth?: number;
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedTreeentries?: shared.PaginatedTreeentries;
}
