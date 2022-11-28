import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryTask } from "./inventorytask";



export class InventoryTaskCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: InventoryTask })
  tasks?: InventoryTask[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
