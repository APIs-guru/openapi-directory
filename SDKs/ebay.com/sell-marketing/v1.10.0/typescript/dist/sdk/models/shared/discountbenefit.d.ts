import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
**/
export declare class DiscountBenefit extends SpeakeasyBase {
    amountOffItem?: Amount;
    amountOffOrder?: Amount;
    percentageOffItem?: string;
    percentageOffOrder?: string;
}
