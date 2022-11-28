import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceRequest extends SpeakeasyBase {
    request: shared.SalesInvoiceCreditNoteDto;
}
export declare class SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoicesPostCreateSaleInvoiceWithGeneratingReference200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
