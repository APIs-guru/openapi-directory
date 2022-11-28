import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PurchasesProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemPurchaseDto[];
}
export declare class PurchasesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    purchasesProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
