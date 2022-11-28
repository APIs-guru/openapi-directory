import { SpeakeasyBase } from "../../../internal/utils";
import { DiscountBenefit } from "./discountbenefit";
import { DiscountSpecification } from "./discountspecification";
import { Amount } from "./amount";
/**
 * This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
**/
export declare class DiscountRule extends SpeakeasyBase {
    discountBenefit?: DiscountBenefit;
    discountSpecification?: DiscountSpecification;
    maxDiscountAmount?: Amount;
    ruleOrder?: number;
}
