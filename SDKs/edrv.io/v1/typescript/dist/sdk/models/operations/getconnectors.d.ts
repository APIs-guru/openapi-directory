import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectorsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeEvse?: boolean;
    includeOrganization?: boolean;
    includeRate?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetConnectorsRequest extends SpeakeasyBase {
    queryParams: GetConnectorsQueryParams;
}
export declare class GetConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
