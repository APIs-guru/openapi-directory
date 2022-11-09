import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItem } from "./inventoryitem";
import { InventoryItem } from "./inventoryitem";
import { SelectionRule } from "./selectionrule";


// RuleCriteria
/** 
 * This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
**/
export class RuleCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeInventoryItems", elemType: shared.InventoryItem })
  excludeInventoryItems?: InventoryItem[];

  @Metadata({ data: "json, name=excludeListingIds" })
  excludeListingIds?: string[];

  @Metadata({ data: "json, name=markupInventoryItems", elemType: shared.InventoryItem })
  markupInventoryItems?: InventoryItem[];

  @Metadata({ data: "json, name=markupListingIds" })
  markupListingIds?: string[];

  @Metadata({ data: "json, name=selectionRules", elemType: shared.SelectionRule })
  selectionRules?: SelectionRule[];
}
