import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommandsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeChargestation?: boolean;
    includeDriver?: boolean;
    includeOrganization?: boolean;
    includeTransaction?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetCommandsRequest extends SpeakeasyBase {
    queryParams: GetCommandsQueryParams;
}
export declare class GetCommandsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
