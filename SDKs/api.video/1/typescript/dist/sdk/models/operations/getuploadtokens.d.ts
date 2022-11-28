import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUploadTokensSortByEnum {
    CreatedAt = "createdAt",
    Ttl = "ttl"
}
export declare enum GetUploadTokensSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetUploadTokensQueryParams extends SpeakeasyBase {
    currentPage?: number;
    pageSize?: number;
    sortBy?: GetUploadTokensSortByEnum;
    sortOrder?: GetUploadTokensSortOrderEnum;
}
export declare class GetUploadTokensSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetUploadTokensRequest extends SpeakeasyBase {
    queryParams: GetUploadTokensQueryParams;
    security: GetUploadTokensSecurity;
}
export declare class GetUploadTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tokenListResponse?: shared.TokenListResponse;
}
