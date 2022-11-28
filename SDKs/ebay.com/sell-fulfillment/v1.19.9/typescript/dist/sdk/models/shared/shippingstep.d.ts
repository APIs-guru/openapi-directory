import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedContact } from "./extendedcontact";
/**
 * This type contains shipping information for a fulfillment, including the shipping carrier, the shipping service option, the shipment destination, and the Global Shipping Program reference ID.
**/
export declare class ShippingStep extends SpeakeasyBase {
    shipTo?: ExtendedContact;
    shipToReferenceId?: string;
    shippingCarrierCode?: string;
    shippingServiceCode?: string;
}
