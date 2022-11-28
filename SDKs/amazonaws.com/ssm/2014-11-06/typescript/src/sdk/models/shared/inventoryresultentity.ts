import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryResultItem } from "./inventoryresultitem";



// InventoryResultEntity
/** 
 * Inventory query results.
**/
export class InventoryResultEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data", elemType: InventoryResultItem })
  data?: Map<string, InventoryResultItem>;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
