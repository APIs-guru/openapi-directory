import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// DeliveryCost
/** 
 * This type contains a breakdown of all costs associated with the fulfillment of a line item.
**/
export class DeliveryCost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importCharges" })
  importCharges?: Amount;

  @SpeakeasyMetadata({ data: "json, name=shippingCost" })
  shippingCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=shippingIntermediationFee" })
  shippingIntermediationFee?: Amount;
}
