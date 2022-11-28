import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmailQuoteDto extends SpeakeasyBase {
    bccAddresses?: string[];
    messageBody?: string;
    quoteId?: number;
    toAddress?: string;
}
