import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryType } from "./categorytype";
import { TimeDuration } from "./timeduration";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";


// FulfillmentPolicyRequest
/** 
 * This root container defines a seller's fulfillment policy for a specific marketplace and category type. Used when creating or updating a fulfillment policy, fulfillmentPolicyRequest encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a fulfillmentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
export class FulfillmentPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryTypes", elemType: shared.CategoryType })
  categoryTypes?: CategoryType[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=freightShipping" })
  freightShipping?: boolean;

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
}
