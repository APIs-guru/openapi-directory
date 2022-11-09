import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryResultItem } from "./inventoryresultitem";


// InventoryResultEntity
/** 
 * Inventory query results.
**/
export class InventoryResultEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data", elemType: shared.InventoryResultItem })
  data?: Map<string, InventoryResultItem>;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
