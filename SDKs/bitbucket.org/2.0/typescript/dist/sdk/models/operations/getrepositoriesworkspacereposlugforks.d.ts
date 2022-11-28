import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugForksPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare enum GetRepositoriesWorkspaceRepoSlugForksRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member",
    Owner = "owner"
}
export declare class GetRepositoriesWorkspaceRepoSlugForksQueryParams extends SpeakeasyBase {
    q?: string;
    role?: GetRepositoriesWorkspaceRepoSlugForksRoleEnum;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugForksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugForksRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugForksPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugForksQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugForksSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugForksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedRepositories?: shared.PaginatedRepositories;
}
