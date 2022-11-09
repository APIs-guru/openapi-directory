import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryAggregator } from "./inventoryaggregator";
import { InventoryFilter } from "./inventoryfilter";
import { ResultAttribute } from "./resultattribute";


export class GetInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aggregators", elemType: shared.InventoryAggregator })
  aggregators?: InventoryAggregator[];

  @Metadata({ data: "json, name=Filters", elemType: shared.InventoryFilter })
  filters?: InventoryFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResultAttributes", elemType: shared.ResultAttribute })
  resultAttributes?: ResultAttribute[];
}
