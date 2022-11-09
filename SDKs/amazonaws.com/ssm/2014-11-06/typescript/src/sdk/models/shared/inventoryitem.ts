import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryItem
/** 
 * Information collected from managed instances based on your inventory policy document
**/
export class InventoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureTime" })
  captureTime: string;

  @Metadata({ data: "json, name=Content" })
  content?: Map<string, string>[];

  @Metadata({ data: "json, name=ContentHash" })
  contentHash?: string;

  @Metadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=SchemaVersion" })
  schemaVersion: string;

  @Metadata({ data: "json, name=TypeName" })
  typeName: string;
}
