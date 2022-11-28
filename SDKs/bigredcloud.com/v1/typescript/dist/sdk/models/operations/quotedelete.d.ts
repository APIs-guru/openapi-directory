import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuoteDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class QuoteDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class QuoteDeleteRequest extends SpeakeasyBase {
    pathParams: QuoteDeletePathParams;
    queryParams: QuoteDeleteQueryParams;
}
export declare class QuoteDeleteResponse extends SpeakeasyBase {
    contentType: string;
    quoteDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
