import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDriversQueryParams extends SpeakeasyBase {
    active?: boolean;
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeGroup?: boolean;
    includeOrganization?: boolean;
    includeTokens?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetDrivers200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetDriversRequest extends SpeakeasyBase {
    queryParams: GetDriversQueryParams;
}
export declare class GetDriversResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDrivers200ApplicationJsonObject?: GetDrivers200ApplicationJson;
}
