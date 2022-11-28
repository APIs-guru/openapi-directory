import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { TimeDuration } from "./timeduration";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";
import { Error } from "./error";



// SetFulfillmentPolicyResponse
/** 
 * Complex type that that gets populated with a response containing a fulfillment policy.
**/
export class SetFulfillmentPolicyResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
