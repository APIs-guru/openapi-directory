import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";



export class PutInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: InventoryItem })
  items: InventoryItem[];
}
