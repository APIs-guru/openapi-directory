import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiscountBenefit } from "./discountbenefit";
import { InventoryCriterion } from "./inventorycriterion";



// SelectedInventoryDiscount
/** 
 * This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.
**/
export class SelectedInventoryDiscount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discountBenefit" })
  discountBenefit?: DiscountBenefit;

  @SpeakeasyMetadata({ data: "json, name=discountId" })
  discountId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryCriterion" })
  inventoryCriterion?: InventoryCriterion;

  @SpeakeasyMetadata({ data: "json, name=ruleOrder" })
  ruleOrder?: number;
}
