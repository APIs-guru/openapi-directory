import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChargeStationsQueryParams extends SpeakeasyBase {
    active?: boolean;
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeEvses?: boolean;
    includeLocation?: boolean;
    includeOrganization?: boolean;
    location?: string;
    online?: boolean;
    organization?: string;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    public?: boolean;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetChargeStationsRequest extends SpeakeasyBase {
    queryParams: GetChargeStationsQueryParams;
}
export declare class GetChargeStationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
