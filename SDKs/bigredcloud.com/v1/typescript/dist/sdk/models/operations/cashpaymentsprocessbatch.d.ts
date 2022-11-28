import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashPaymentsProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemCashPaymentDto[];
}
export declare class CashPaymentsProcessBatchResponse extends SpeakeasyBase {
    cashPaymentsProcessBatch200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
