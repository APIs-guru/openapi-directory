import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspacePermissionsRepositoriesPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspacePermissionsRepositoriesPathParams;
    queryParams: GetWorkspacesWorkspacePermissionsRepositoriesQueryParams;
    security: GetWorkspacesWorkspacePermissionsRepositoriesSecurity;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
