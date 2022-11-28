import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionSummaryQueryParams extends SpeakeasyBase {
    filter?: string;
}
export declare class GetTransactionSummarySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetTransactionSummaryRequest extends SpeakeasyBase {
    queryParams: GetTransactionSummaryQueryParams;
    security: GetTransactionSummarySecurity;
}
export declare class GetTransactionSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transactionSummaryResponse?: shared.TransactionSummaryResponse;
}
