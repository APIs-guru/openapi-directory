import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryItem } from "./inventoryitem";


export class PutInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=Items", elemType: shared.InventoryItem })
  items: InventoryItem[];
}
