import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateShippingQuoteSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateShippingQuoteRequest extends SpeakeasyBase {
    request: shared.ShippingQuoteRequest;
    security: CreateShippingQuoteSecurity;
}
export declare class CreateShippingQuoteResponse extends SpeakeasyBase {
    contentType: string;
    shippingQuote?: shared.ShippingQuote;
    statusCode: number;
}
