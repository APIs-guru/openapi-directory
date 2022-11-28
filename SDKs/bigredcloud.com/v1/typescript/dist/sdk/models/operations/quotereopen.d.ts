import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuoteReopenPathParams extends SpeakeasyBase {
    id: number;
}
export declare class QuoteReopenRequest extends SpeakeasyBase {
    pathParams: QuoteReopenPathParams;
}
export declare class QuoteReopenResponse extends SpeakeasyBase {
    contentType: string;
    quoteReopen200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
