import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuotePostGenerateSaleInvoiceRequest extends SpeakeasyBase {
    request: shared.QuoteGeneratingInvoiceDto;
}
export declare class QuotePostGenerateSaleInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    quotePostGenerateSaleInvoice200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
