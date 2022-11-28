import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedCommitstatuses?: shared.PaginatedCommitstatuses;
}
