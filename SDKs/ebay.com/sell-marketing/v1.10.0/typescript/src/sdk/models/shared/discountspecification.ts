import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";


// DiscountSpecification
/** 
 * This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
**/
export class DiscountSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=forEachAmount" })
  forEachAmount?: Amount;

  @Metadata({ data: "json, name=forEachQuantity" })
  forEachQuantity?: number;

  @Metadata({ data: "json, name=minAmount" })
  minAmount?: Amount;

  @Metadata({ data: "json, name=minQuantity" })
  minQuantity?: number;

  @Metadata({ data: "json, name=numberOfDiscountedItems" })
  numberOfDiscountedItems?: number;
}
