import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// ShippingOption
/** 
 * The details provided for the shipping provider, such as shipping cost and type.
**/
export class ShippingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=shippingCost" })
  shippingCost?: Amount;

  @Metadata({ data: "json, name=shippingCostType" })
  shippingCostType?: string;
}
