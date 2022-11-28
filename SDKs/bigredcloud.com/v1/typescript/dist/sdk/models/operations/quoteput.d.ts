import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuotePutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class QuotePutRequest extends SpeakeasyBase {
    pathParams: QuotePutPathParams;
    request: shared.QuoteDto;
}
export declare class QuotePutResponse extends SpeakeasyBase {
    contentType: string;
    quotePut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
