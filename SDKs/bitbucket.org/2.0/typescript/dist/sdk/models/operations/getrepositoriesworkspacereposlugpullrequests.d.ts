import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare enum GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum {
    Merged = "MERGED",
    Superseded = "SUPERSEDED",
    Open = "OPEN",
    Declined = "DECLINED"
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams extends SpeakeasyBase {
    state?: GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPullrequests?: shared.PaginatedPullrequests;
}
