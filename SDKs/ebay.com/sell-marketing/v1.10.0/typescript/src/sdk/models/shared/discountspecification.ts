import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// DiscountSpecification
/** 
 * This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
**/
export class DiscountSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forEachAmount" })
  forEachAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=forEachQuantity" })
  forEachQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=minAmount" })
  minAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=minQuantity" })
  minQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfDiscountedItems" })
  numberOfDiscountedItems?: number;
}
