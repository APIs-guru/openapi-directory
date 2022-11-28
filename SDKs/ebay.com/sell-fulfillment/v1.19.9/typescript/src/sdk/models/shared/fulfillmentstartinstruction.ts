import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PickupStep } from "./pickupstep";
import { ShippingStep } from "./shippingstep";



// FulfillmentStartInstruction
/** 
 * This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
**/
export class FulfillmentStartInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ebaySupportedFulfillment" })
  ebaySupportedFulfillment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=finalDestinationAddress" })
  finalDestinationAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInstructionsType" })
  fulfillmentInstructionsType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxEstimatedDeliveryDate" })
  maxEstimatedDeliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=minEstimatedDeliveryDate" })
  minEstimatedDeliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupStep" })
  pickupStep?: PickupStep;

  @SpeakeasyMetadata({ data: "json, name=shippingStep" })
  shippingStep?: ShippingStep;
}
