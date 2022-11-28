import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Contact } from "./contact";
/**
 * This complex type contains the request payload for the createFromShippingQuote method.
**/
export declare class CreateShipmentFromQuoteRequest extends SpeakeasyBase {
    additionalOptions?: AdditionalOption[];
    labelCustomMessage?: string;
    labelSize?: string;
    rateId?: string;
    returnTo?: Contact;
    shippingQuoteId?: string;
}
