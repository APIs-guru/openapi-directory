import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { PickupStep } from "./pickupstep";
import { ShippingStep } from "./shippingstep";


// FulfillmentStartInstruction
/** 
 * This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
**/
export class FulfillmentStartInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=ebaySupportedFulfillment" })
  ebaySupportedFulfillment?: boolean;

  @Metadata({ data: "json, name=finalDestinationAddress" })
  finalDestinationAddress?: Address;

  @Metadata({ data: "json, name=fulfillmentInstructionsType" })
  fulfillmentInstructionsType?: string;

  @Metadata({ data: "json, name=maxEstimatedDeliveryDate" })
  maxEstimatedDeliveryDate?: string;

  @Metadata({ data: "json, name=minEstimatedDeliveryDate" })
  minEstimatedDeliveryDate?: string;

  @Metadata({ data: "json, name=pickupStep" })
  pickupStep?: PickupStep;

  @Metadata({ data: "json, name=shippingStep" })
  shippingStep?: ShippingStep;
}
