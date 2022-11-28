import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernamePermissionsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernamePermissionsQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetTeamsUsernamePermissionsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernamePermissionsRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernamePermissionsPathParams;
    queryParams: GetTeamsUsernamePermissionsQueryParams;
    security: GetTeamsUsernamePermissionsSecurity;
}
export declare class GetTeamsUsernamePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedTeamPermissions?: shared.PaginatedTeamPermissions;
}
