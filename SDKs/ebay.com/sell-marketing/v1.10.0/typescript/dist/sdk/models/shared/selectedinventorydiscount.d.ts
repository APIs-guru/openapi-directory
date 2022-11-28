import { SpeakeasyBase } from "../../../internal/utils";
import { DiscountBenefit } from "./discountbenefit";
import { InventoryCriterion } from "./inventorycriterion";
/**
 * This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
**/
export declare class SelectedInventoryDiscount extends SpeakeasyBase {
    discountBenefit?: DiscountBenefit;
    discountId?: string;
    inventoryCriterion?: InventoryCriterion;
    ruleOrder?: number;
}
