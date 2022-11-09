import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=categoryTypes", elemType: shared.CategoryType })
  categoryTypes?: CategoryType[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=freightShipping" })
  freightShipping?: boolean;

  @Metadata({ data: "json, name=fulfillmentPolicyId" })
  fulfillmentPolicyId?: string;

  @Metadata({ data: "json, name=globalShipping" })
  globalShipping?: boolean;

  @Metadata({ data: "json, name=handlingTime" })
  handlingTime?: TimeDuration;

  @Metadata({ data: "json, name=localPickup" })
  localPickup?: boolean;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pickupDropOff" })
  pickupDropOff?: boolean;

  @Metadata({ data: "json, name=shipToLocations" })
  shipToLocations?: RegionSet;

  @Metadata({ data: "json, name=shippingOptions", elemType: shared.ShippingOption })
  shippingOptions?: ShippingOption[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}
