import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShippingQuotePathParams extends SpeakeasyBase {
    shippingQuoteId: string;
}
export declare class GetShippingQuoteSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetShippingQuoteRequest extends SpeakeasyBase {
    pathParams: GetShippingQuotePathParams;
    security: GetShippingQuoteSecurity;
}
export declare class GetShippingQuoteResponse extends SpeakeasyBase {
    contentType: string;
    shippingQuote?: shared.ShippingQuote;
    statusCode: number;
}
