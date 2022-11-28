import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuoteProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemQuoteDto[];
}
export declare class QuoteProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    quoteProcessBatch200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
