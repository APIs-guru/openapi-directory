import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// PricingSummary
/** 
 * This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
**/
export class PricingSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustment" })
  adjustment?: Amount;

  @SpeakeasyMetadata({ data: "json, name=deliveryCost" })
  deliveryCost?: Amount;

  @SpeakeasyMetadata({ data: "json, name=deliveryDiscount" })
  deliveryDiscount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=fee" })
  fee?: Amount;

  @SpeakeasyMetadata({ data: "json, name=priceDiscountSubtotal" })
  priceDiscountSubtotal?: Amount;

  @SpeakeasyMetadata({ data: "json, name=priceSubtotal" })
  priceSubtotal?: Amount;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: Amount;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: Amount;
}
