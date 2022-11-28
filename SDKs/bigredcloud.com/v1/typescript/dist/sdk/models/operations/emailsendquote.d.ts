import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmailSendQuoteRequest extends SpeakeasyBase {
    request: shared.EmailQuoteDto;
}
export declare class EmailSendQuoteResponse extends SpeakeasyBase {
    contentType: string;
    emailSendQuote200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
