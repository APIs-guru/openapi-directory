import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryFilter } from "./inventoryfilter";


export class ListResourceInventoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.InventoryFilter })
  filters?: InventoryFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
