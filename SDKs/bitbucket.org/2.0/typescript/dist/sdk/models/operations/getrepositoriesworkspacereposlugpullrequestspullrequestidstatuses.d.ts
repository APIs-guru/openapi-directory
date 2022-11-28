import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedCommitstatuses?: shared.PaginatedCommitstatuses;
}
