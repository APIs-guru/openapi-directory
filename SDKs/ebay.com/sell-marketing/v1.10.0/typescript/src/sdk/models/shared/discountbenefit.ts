import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// DiscountBenefit
/** 
 * This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
**/
export class DiscountBenefit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountOffItem" })
  amountOffItem?: Amount;

  @SpeakeasyMetadata({ data: "json, name=amountOffOrder" })
  amountOffOrder?: Amount;

  @SpeakeasyMetadata({ data: "json, name=percentageOffItem" })
  percentageOffItem?: string;

  @SpeakeasyMetadata({ data: "json, name=percentageOffOrder" })
  percentageOffOrder?: string;
}
