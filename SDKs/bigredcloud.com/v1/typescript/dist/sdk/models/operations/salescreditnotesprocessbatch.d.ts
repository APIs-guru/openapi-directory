import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesCreditNotesProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemSalesInvoiceCreditNoteDto[];
}
export declare class SalesCreditNotesProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    salesCreditNotesProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
