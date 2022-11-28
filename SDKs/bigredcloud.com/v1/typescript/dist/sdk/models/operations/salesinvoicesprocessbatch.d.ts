import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesInvoicesProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemSalesInvoiceCreditNoteDto[];
}
export declare class SalesInvoicesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoicesProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
