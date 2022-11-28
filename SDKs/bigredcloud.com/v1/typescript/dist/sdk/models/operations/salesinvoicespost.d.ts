import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SalesInvoicesPostRequest extends SpeakeasyBase {
    request: shared.SalesInvoiceCreditNoteDto;
}
export declare class SalesInvoicesPostResponse extends SpeakeasyBase {
    contentType: string;
    salesInvoicesPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
