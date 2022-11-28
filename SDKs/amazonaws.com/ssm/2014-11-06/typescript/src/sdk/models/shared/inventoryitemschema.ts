import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryItemAttribute } from "./inventoryitemattribute";



// InventoryItemSchema
/** 
 * The inventory item schema definition. Users can use this to compose inventory query filters.
**/
export class InventoryItemSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: InventoryItemAttribute })
  attributes: InventoryItemAttribute[];

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
