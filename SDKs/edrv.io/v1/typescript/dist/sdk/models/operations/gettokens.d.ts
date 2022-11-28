import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTokensQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeDriver?: boolean;
    includeOrganization?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetTokens200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetTokensRequest extends SpeakeasyBase {
    queryParams: GetTokensQueryParams;
}
export declare class GetTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTokens200ApplicationJsonObject?: GetTokens200ApplicationJson;
}
