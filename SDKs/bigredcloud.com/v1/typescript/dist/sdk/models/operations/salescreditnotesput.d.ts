import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesCreditNotesPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesCreditNotesPutRequest extends SpeakeasyBase {
    pathParams: SalesCreditNotesPutPathParams;
    request: shared.SalesInvoiceCreditNoteDto;
}
export declare class SalesCreditNotesPutResponse extends SpeakeasyBase {
    contentType: string;
    salesCreditNotesPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
