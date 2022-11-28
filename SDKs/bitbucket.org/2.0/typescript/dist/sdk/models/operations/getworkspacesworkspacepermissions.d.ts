import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspacePermissionsPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspacePermissionsQueryParams extends SpeakeasyBase {
    q?: string;
}
export declare class GetWorkspacesWorkspacePermissionsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspacePermissionsRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspacePermissionsPathParams;
    queryParams: GetWorkspacesWorkspacePermissionsQueryParams;
    security: GetWorkspacesWorkspacePermissionsSecurity;
}
export declare class GetWorkspacesWorkspacePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
