import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuotePostCreateQuoteWithGeneratingReferenceRequest extends SpeakeasyBase {
    request: shared.QuoteDto;
}
export declare class QuotePostCreateQuoteWithGeneratingReferenceResponse extends SpeakeasyBase {
    contentType: string;
    quotePostCreateQuoteWithGeneratingReference200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
