import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesQueryParams extends SpeakeasyBase {
    active?: boolean;
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeDriver?: boolean;
    includeOrganization?: boolean;
    includeToken?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetVehicles200ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetVehiclesRequest extends SpeakeasyBase {
    queryParams: GetVehiclesQueryParams;
}
export declare class GetVehiclesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVehicles200ApplicationJsonObject?: GetVehicles200ApplicationJson;
}
