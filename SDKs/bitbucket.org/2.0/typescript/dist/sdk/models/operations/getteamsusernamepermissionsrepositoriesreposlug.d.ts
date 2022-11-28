import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams extends SpeakeasyBase {
    repoSlug: string;
    username: string;
}
export declare class GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams;
    queryParams: GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams;
    security: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity;
}
export declare class GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
