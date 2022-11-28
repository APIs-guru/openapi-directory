import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuoteClosePathParams extends SpeakeasyBase {
    id: number;
}
export declare class QuoteCloseRequest extends SpeakeasyBase {
    pathParams: QuoteClosePathParams;
}
export declare class QuoteCloseResponse extends SpeakeasyBase {
    contentType: string;
    quoteClose200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
