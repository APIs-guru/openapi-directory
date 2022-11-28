import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeOrganization?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetLocationsRequest extends SpeakeasyBase {
    queryParams: GetLocationsQueryParams;
}
export declare class GetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
