import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// PricingSummary
/** 
 * This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
**/
export class PricingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment" })
  adjustment?: Amount;

  @Metadata({ data: "json, name=deliveryCost" })
  deliveryCost?: Amount;

  @Metadata({ data: "json, name=deliveryDiscount" })
  deliveryDiscount?: Amount;

  @Metadata({ data: "json, name=fee" })
  fee?: Amount;

  @Metadata({ data: "json, name=priceDiscountSubtotal" })
  priceDiscountSubtotal?: Amount;

  @Metadata({ data: "json, name=priceSubtotal" })
  priceSubtotal?: Amount;

  @Metadata({ data: "json, name=tax" })
  tax?: Amount;

  @Metadata({ data: "json, name=total" })
  total?: Amount;
}
