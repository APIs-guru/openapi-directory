import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsUsernamePermissionsRepositoriesPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetTeamsUsernamePermissionsRepositoriesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetTeamsUsernamePermissionsRepositoriesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetTeamsUsernamePermissionsRepositoriesRequest extends SpeakeasyBase {
    pathParams: GetTeamsUsernamePermissionsRepositoriesPathParams;
    queryParams: GetTeamsUsernamePermissionsRepositoriesQueryParams;
    security: GetTeamsUsernamePermissionsRepositoriesSecurity;
}
export declare class GetTeamsUsernamePermissionsRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
