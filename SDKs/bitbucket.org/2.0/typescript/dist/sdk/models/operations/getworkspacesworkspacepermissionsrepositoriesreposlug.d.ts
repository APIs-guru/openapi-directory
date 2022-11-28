import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugPathParams;
    queryParams: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryParams;
    security: GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugSecurity;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
