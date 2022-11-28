import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilter } from "./inventoryfilter";



export class ListInventoryEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: InventoryFilter })
  filters?: InventoryFilter[];

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;
}
