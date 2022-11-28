import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteTransactionPathParams extends SpeakeasyBase {
    transactionid: string;
}
export declare class ExecuteTransactionQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ExecuteTransactionRequest extends SpeakeasyBase {
    pathParams: ExecuteTransactionPathParams;
    queryParams: ExecuteTransactionQueryParams;
    request: shared.ItvRokuTransactionRequest;
}
export declare class ExecuteTransactionResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
