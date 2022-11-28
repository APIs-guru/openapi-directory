import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPermissionsTeamsQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetUserPermissionsTeamsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUserPermissionsTeamsRequest extends SpeakeasyBase {
    queryParams: GetUserPermissionsTeamsQueryParams;
    security: GetUserPermissionsTeamsSecurity;
}
export declare class GetUserPermissionsTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedTeamPermissions?: shared.PaginatedTeamPermissions;
}
