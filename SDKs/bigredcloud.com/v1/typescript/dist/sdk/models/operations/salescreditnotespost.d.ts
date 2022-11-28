import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesCreditNotesPostRequest extends SpeakeasyBase {
    request: shared.SalesInvoiceCreditNoteDto;
}
export declare class SalesCreditNotesPostResponse extends SpeakeasyBase {
    contentType: string;
    salesCreditNotesPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
