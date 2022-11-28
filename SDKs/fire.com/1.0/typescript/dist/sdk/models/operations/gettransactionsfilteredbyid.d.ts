import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsFilteredByIdPathParams extends SpeakeasyBase {
    ican: number;
}
export declare class GetTransactionsFilteredByIdQueryParams extends SpeakeasyBase {
    dateRangeFrom: number;
    dateRangeTo: number;
    searchKeyword: string;
    transactionTypes: string[];
}
export declare class GetTransactionsFilteredByIdRequest extends SpeakeasyBase {
    pathParams: GetTransactionsFilteredByIdPathParams;
    queryParams: GetTransactionsFilteredByIdQueryParams;
}
export declare class GetTransactionsFilteredByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema?: shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema;
}
