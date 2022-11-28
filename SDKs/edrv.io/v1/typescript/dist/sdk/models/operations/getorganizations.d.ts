import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrganizationsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeLocations?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetOrganizationsRequest extends SpeakeasyBase {
    queryParams: GetOrganizationsQueryParams;
}
export declare class GetOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
