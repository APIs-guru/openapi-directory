import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFromShippingQuoteSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateFromShippingQuoteRequest extends SpeakeasyBase {
    request: shared.CreateShipmentFromQuoteRequest;
    security: CreateFromShippingQuoteSecurity;
}
export declare class CreateFromShippingQuoteResponse extends SpeakeasyBase {
    contentType: string;
    shipment?: shared.Shipment;
    statusCode: number;
}
