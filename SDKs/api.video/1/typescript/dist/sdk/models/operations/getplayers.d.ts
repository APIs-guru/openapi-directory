import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPlayersSortByEnum {
    CreatedAt = "createdAt",
    UpdatedAt = "updatedAt"
}
export declare enum GetPlayersSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetPlayersQueryParams extends SpeakeasyBase {
    currentPage?: number;
    pageSize?: number;
    sortBy?: GetPlayersSortByEnum;
    sortOrder?: GetPlayersSortOrderEnum;
}
export declare class GetPlayersSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetPlayersRequest extends SpeakeasyBase {
    queryParams: GetPlayersQueryParams;
    security: GetPlayersSecurity;
}
export declare class GetPlayersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    playersListResponse?: shared.PlayersListResponse;
}
