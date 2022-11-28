import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTransactionsStatusEnum {
    Started = "Started",
    Ended = "Ended"
}
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    createdAtDollarGte?: Date;
    createdAtDollarLte?: Date;
    includeChargestation?: boolean;
    includeConnector?: boolean;
    includeDriver?: boolean;
    includeEvse?: boolean;
    includeOrganization?: boolean;
    includeRate?: boolean;
    includeReservation?: boolean;
    includeToken?: boolean;
    paginateEnabled?: boolean;
    paginateLimit?: number;
    paginatePage?: string;
    sortBy?: string;
    sortOrder?: shared.SortOrder1Enum;
    status?: GetTransactionsStatusEnum;
    updatedAtDollarGte?: Date;
    updatedAtDollarLte?: Date;
}
export declare class GetTransactions200ApplicationJson extends SpeakeasyBase {
    hasNext?: boolean;
    hasPrevious?: boolean;
    message?: string;
    ok?: boolean;
    result?: any[];
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    queryParams: GetTransactionsQueryParams;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTransactions200ApplicationJsonObject?: GetTransactions200ApplicationJson;
}
