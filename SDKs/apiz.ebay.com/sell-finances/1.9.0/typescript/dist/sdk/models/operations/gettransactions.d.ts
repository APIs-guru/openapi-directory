import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTransactionsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: string;
    offset?: string;
    sort?: string;
}
export declare class GetTransactionsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    queryParams: GetTransactionsQueryParams;
    security: GetTransactionsSecurity;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    transactions?: shared.Transactions;
}
