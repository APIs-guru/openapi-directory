import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
import { SelectionRule } from "./selectionrule";



// RuleCriteria
/** 
 * This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
**/
export class RuleCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeInventoryItems", elemType: InventoryItem })
  excludeInventoryItems?: InventoryItem[];

  @SpeakeasyMetadata({ data: "json, name=excludeListingIds" })
  excludeListingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=markupInventoryItems", elemType: InventoryItem })
  markupInventoryItems?: InventoryItem[];

  @SpeakeasyMetadata({ data: "json, name=markupListingIds" })
  markupListingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectionRules", elemType: SelectionRule })
  selectionRules?: SelectionRule[];
}
