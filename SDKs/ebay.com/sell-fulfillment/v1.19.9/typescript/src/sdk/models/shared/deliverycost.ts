import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// DeliveryCost
/** 
 * This type contains a breakdown of all costs associated with the fulfillment of a line item.
**/
export class DeliveryCost extends SpeakeasyBase {
  @Metadata({ data: "json, name=importCharges" })
  importCharges?: Amount;

  @Metadata({ data: "json, name=shippingCost" })
  shippingCost?: Amount;

  @Metadata({ data: "json, name=shippingIntermediationFee" })
  shippingIntermediationFee?: Amount;
}
