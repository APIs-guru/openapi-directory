import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
import { RuleCriteria } from "./rulecriteria";
/**
 * This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
**/
export declare class InventoryCriterion extends SpeakeasyBase {
    inventoryCriterionType?: string;
    inventoryItems?: InventoryItem[];
    listingIds?: string[];
    ruleCriteria?: RuleCriteria;
}
