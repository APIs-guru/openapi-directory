import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPermissionsRepositoriesQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetUserPermissionsRepositoriesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUserPermissionsRepositoriesRequest extends SpeakeasyBase {
    queryParams: GetUserPermissionsRepositoriesQueryParams;
    security: GetUserPermissionsRepositoriesSecurity;
}
export declare class GetUserPermissionsRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
