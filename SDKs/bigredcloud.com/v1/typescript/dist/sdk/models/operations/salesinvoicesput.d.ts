import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesInvoicesPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesInvoicesPutRequest extends SpeakeasyBase {
    pathParams: SalesInvoicesPutPathParams;
    request: shared.SalesInvoiceCreditNoteDto;
}
export declare class SalesInvoicesPutResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoicesPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
