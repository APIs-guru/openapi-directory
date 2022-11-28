import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV1QuotesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV1QuotesIdRequest extends SpeakeasyBase {
    pathParams: GetV1QuotesIdPathParams;
}
export declare class GetV1QuotesIdResponse extends SpeakeasyBase {
    contentType: string;
    quoteDto?: shared.QuoteDto;
    statusCode: number;
}
