import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPermissionsWorkspacesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetUserPermissionsWorkspacesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUserPermissionsWorkspacesRequest extends SpeakeasyBase {
    queryParams: GetUserPermissionsWorkspacesQueryParams;
    security: GetUserPermissionsWorkspacesSecurity;
}
export declare class GetUserPermissionsWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
