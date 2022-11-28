import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRepositoriesRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member",
    Owner = "owner"
}
export declare class GetRepositoriesQueryParams extends SpeakeasyBase {
    after?: string;
    q?: string;
    role?: GetRepositoriesRoleEnum;
    sort?: string;
}
export declare class GetRepositoriesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesRequest extends SpeakeasyBase {
    queryParams: GetRepositoriesQueryParams;
    security: GetRepositoriesSecurity;
}
export declare class GetRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedRepositories?: shared.PaginatedRepositories;
}
