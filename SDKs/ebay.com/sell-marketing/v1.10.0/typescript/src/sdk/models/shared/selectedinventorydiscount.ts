import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiscountBenefit } from "./discountbenefit";
import { InventoryCriterion } from "./inventorycriterion";


// SelectedInventoryDiscount
/** 
 * This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
**/
export class SelectedInventoryDiscount extends SpeakeasyBase {
  @Metadata({ data: "json, name=discountBenefit" })
  discountBenefit?: DiscountBenefit;

  @Metadata({ data: "json, name=discountId" })
  discountId?: string;

  @Metadata({ data: "json, name=inventoryCriterion" })
  inventoryCriterion?: InventoryCriterion;

  @Metadata({ data: "json, name=ruleOrder" })
  ruleOrder?: number;
}
