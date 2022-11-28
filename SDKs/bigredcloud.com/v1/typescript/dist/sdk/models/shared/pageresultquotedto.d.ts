import { SpeakeasyBase } from "../../../internal/utils";
import { QuoteDto } from "./quotedto";
export declare class PageResultQuoteDto extends SpeakeasyBase {
    count?: number;
    items?: QuoteDto[];
    nextPageLink?: string;
}
