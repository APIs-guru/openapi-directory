import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// ShippingOption
/** 
 * The details provided for the shipping provider, such as shipping cost and type.
**/
export class ShippingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shippingCost" })
  shippingCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=shippingCostType" })
  shippingCostType?: string;
}
