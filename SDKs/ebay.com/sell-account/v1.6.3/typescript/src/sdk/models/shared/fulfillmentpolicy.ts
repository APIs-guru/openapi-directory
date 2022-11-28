import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { TimeDuration } from "./timeduration";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";



// FulfillmentPolicy
/** 
 * This root response container defines a seller's fulfillment policy for a specific marketplace and category type. fulfillmentPolicy encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies.
**/
export class FulfillmentPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType })
  categoryTypes?: CategoryType[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=freightShipping" })
  freightShipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentPolicyId" })
  fulfillmentPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=globalShipping" })
  globalShipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=handlingTime" })
  handlingTime?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=localPickup" })
  localPickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupDropOff" })
  pickupDropOff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shipToLocations" })
  shipToLocations?: RegionSet;

  @SpeakeasyMetadata({ data: "json, name=shippingOptions", elemType: ShippingOption })
  shippingOptions?: ShippingOption[];
}
