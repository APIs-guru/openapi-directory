import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams extends SpeakeasyBase {
    kind?: string;
    pattern?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedBranchrestrictions?: shared.PaginatedBranchrestrictions;
}
