import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConfigurationsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetConfigurationsQueryParams;
}
export declare class GetConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
