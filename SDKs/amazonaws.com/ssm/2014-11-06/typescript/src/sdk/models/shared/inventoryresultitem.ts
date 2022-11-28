import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryResultItem
/** 
 * The inventory result item.
**/
export class InventoryResultItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureTime" })
  captureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=ContentHash" })
  contentHash?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersion" })
  schemaVersion: string;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;
}
