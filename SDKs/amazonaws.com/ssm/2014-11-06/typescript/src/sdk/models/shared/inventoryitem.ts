import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryItem
/** 
 * Information collected from managed instances based on your inventory policy document
**/
export class InventoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureTime" })
  captureTime: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=ContentHash" })
  contentHash?: string;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersion" })
  schemaVersion: string;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;
}
