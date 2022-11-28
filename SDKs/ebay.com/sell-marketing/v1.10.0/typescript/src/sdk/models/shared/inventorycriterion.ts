import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
import { RuleCriteria } from "./rulecriteria";



// InventoryCriterion
/** 
 * This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
**/
export class InventoryCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inventoryCriterionType" })
  inventoryCriterionType?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryItems", elemType: InventoryItem })
  inventoryItems?: InventoryItem[];

  @SpeakeasyMetadata({ data: "json, name=listingIds" })
  listingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ruleCriteria" })
  ruleCriteria?: RuleCriteria;
}
