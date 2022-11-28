import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryListOfUnsubscribedEmailAddressesQueryParams extends SpeakeasyBase {
    email?: string;
    endDate?: string;
    limit?: string;
    offset?: string;
    sortDirection?: string;
    startDate?: string;
}
export declare class QueryListOfUnsubscribedEmailAddressesRequest extends SpeakeasyBase {
    queryParams: QueryListOfUnsubscribedEmailAddressesQueryParams;
}
export declare class QueryListOfUnsubscribedEmailAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
