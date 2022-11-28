import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryHardBouncedEmailsQueryParams extends SpeakeasyBase {
    email?: string;
    endDate?: string;
    limit?: string;
    offset?: string;
    startDate?: string;
}
export declare class QueryHardBouncedEmailsRequest extends SpeakeasyBase {
    queryParams: QueryHardBouncedEmailsQueryParams;
}
export declare class QueryHardBouncedEmailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
