import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuoteGetResponse extends SpeakeasyBase {
    contentType: string;
    pageResultQuoteDto?: shared.PageResultQuoteDto;
    statusCode: number;
}
