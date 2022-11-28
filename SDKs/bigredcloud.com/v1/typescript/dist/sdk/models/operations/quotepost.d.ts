import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuotePostRequest extends SpeakeasyBase {
    request: shared.QuoteDto;
}
export declare class QuotePostResponse extends SpeakeasyBase {
    contentType: string;
    quotePost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
