import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryAggregator } from "./inventoryaggregator";
import { InventoryFilter } from "./inventoryfilter";
import { ResultAttribute } from "./resultattribute";



export class GetInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aggregators", elemType: InventoryAggregator })
  aggregators?: InventoryAggregator[];

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: InventoryFilter })
  filters?: InventoryFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResultAttributes", elemType: ResultAttribute })
  resultAttributes?: ResultAttribute[];
}
