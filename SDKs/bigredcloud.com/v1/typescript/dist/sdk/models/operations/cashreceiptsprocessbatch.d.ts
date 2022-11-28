import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CashReceiptsProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemCashReceiptDto[];
}
export declare class CashReceiptsProcessBatchResponse extends SpeakeasyBase {
    cashReceiptsProcessBatch200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
