import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemPaymentDto[];
}
export declare class PaymentsProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    paymentsProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
