import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItemAttribute } from "./inventoryitemattribute";


// InventoryItemSchema
/** 
 * The inventory item schema definition. Users can use this to compose inventory query filters.
**/
export class InventoryItemSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.InventoryItemAttribute })
  attributes: InventoryItemAttribute[];

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=TypeName" })
  typeName: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
