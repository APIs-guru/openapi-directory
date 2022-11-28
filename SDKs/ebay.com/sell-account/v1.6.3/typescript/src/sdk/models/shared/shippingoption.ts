import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { ShippingService } from "./shippingservice";



// ShippingOption
/** 
 * This complex type defines a seller's shipping configuration for either a DOMESTIC or INTERNATIONAL shipping option. Shipping options configure the high-level settings for shipments, such as flat-rate or calculated shipping, and any rate tables the seller wants to associate with the policy. Each shippingOption element has a shippingServices container that defines the list of shipping carriers and services that are available for the parent shipping option (that is, for either DOMESTIC or INTERNATIONAL shipping). If a seller offers an international shipping option, they must also offer a domestic shipping option. Note that costType (FLAT_RATE or CALCULATED) is set in shippingOptions and that all associated shipping services must be able to support this cost type.
**/
export class ShippingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costType" })
  costType?: string;

  @SpeakeasyMetadata({ data: "json, name=insuranceFee" })
  insuranceFee?: Amount;

  @SpeakeasyMetadata({ data: "json, name=insuranceOffered" })
  insuranceOffered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=optionType" })
  optionType?: string;

  @SpeakeasyMetadata({ data: "json, name=packageHandlingCost" })
  packageHandlingCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=rateTableId" })
  rateTableId?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingServices", elemType: ShippingService })
  shippingServices?: ShippingService[];
}
