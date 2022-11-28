import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceInventory } from "./resourceinventory";



export class ListResourceInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceInventoryList", elemType: ResourceInventory })
  resourceInventoryList?: ResourceInventory[];
}
