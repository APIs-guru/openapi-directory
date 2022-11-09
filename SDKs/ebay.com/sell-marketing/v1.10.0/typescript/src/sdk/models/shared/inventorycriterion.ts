import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItem } from "./inventoryitem";
import { RuleCriteria } from "./rulecriteria";


// InventoryCriterion
/** 
 * This type defines either the selections rules or the list of listing IDs for the promotion. The &quot;listing IDs&quot; are are either the seller's item IDs or the eBay listing IDs.
**/
export class InventoryCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryCriterionType" })
  inventoryCriterionType?: string;

  @Metadata({ data: "json, name=inventoryItems", elemType: shared.InventoryItem })
  inventoryItems?: InventoryItem[];

  @Metadata({ data: "json, name=listingIds" })
  listingIds?: string[];

  @Metadata({ data: "json, name=ruleCriteria" })
  ruleCriteria?: RuleCriteria;
}
