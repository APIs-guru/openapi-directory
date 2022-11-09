import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceInventory } from "./resourceinventory";


export class ListResourceInventoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceInventoryList", elemType: shared.ResourceInventory })
  resourceInventoryList?: ResourceInventory[];
}
