import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryResultItem
/** 
 * The inventory result item.
**/
export class InventoryResultItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureTime" })
  captureTime?: string;

  @Metadata({ data: "json, name=Content" })
  content: Map<string, string>[];

  @Metadata({ data: "json, name=ContentHash" })
  contentHash?: string;

  @Metadata({ data: "json, name=SchemaVersion" })
  schemaVersion: string;

  @Metadata({ data: "json, name=TypeName" })
  typeName: string;
}
