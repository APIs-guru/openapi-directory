import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
import { SelectionRule } from "./selectionrule";
/**
 * This type defines the fields for a set of inventory selection rules. Required: When inventoryCriterionType is set to INVENTORY_BY_RULE or INVENTORY_ANY.
**/
export declare class RuleCriteria extends SpeakeasyBase {
    excludeInventoryItems?: InventoryItem[];
    excludeListingIds?: string[];
    markupInventoryItems?: InventoryItem[];
    markupListingIds?: string[];
    selectionRules?: SelectionRule[];
}
