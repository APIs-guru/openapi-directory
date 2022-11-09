import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryAggregator } from "./inventoryaggregator";
import { InventoryGroup } from "./inventorygroup";


// InventoryAggregator
/** 
 * Specifies the inventory type and attribute for the aggregation execution.
**/
export class InventoryAggregator extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aggregators", elemType: shared.InventoryAggregator })
  aggregators?: InventoryAggregator[];

  @Metadata({ data: "json, name=Expression" })
  expression?: string;

  @Metadata({ data: "json, name=Groups", elemType: shared.InventoryGroup })
  groups?: InventoryGroup[];
}
