import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PickupStep } from "./pickupstep";
import { ShippingStep } from "./shippingstep";
/**
 * This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
**/
export declare class FulfillmentStartInstruction extends SpeakeasyBase {
    ebaySupportedFulfillment?: boolean;
    finalDestinationAddress?: Address;
    fulfillmentInstructionsType?: string;
    maxEstimatedDeliveryDate?: string;
    minEstimatedDeliveryDate?: string;
    pickupStep?: PickupStep;
    shippingStep?: ShippingStep;
}
