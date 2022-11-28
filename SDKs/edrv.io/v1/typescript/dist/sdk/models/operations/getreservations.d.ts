import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReservationsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeChargestation?: boolean;
    includeOrganization?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetReservationsRequest extends SpeakeasyBase {
    queryParams: GetReservationsQueryParams;
}
export declare class GetReservationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
