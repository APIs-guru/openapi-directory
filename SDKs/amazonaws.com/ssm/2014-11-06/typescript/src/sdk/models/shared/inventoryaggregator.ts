import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryGroup } from "./inventorygroup";



// InventoryAggregator
/** 
 * Specifies the inventory type and attribute for the aggregation execution.
**/
export class InventoryAggregator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aggregators", elemType: InventoryAggregator })
  aggregators?: InventoryAggregator[];

  @SpeakeasyMetadata({ data: "json, name=Expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=Groups", elemType: InventoryGroup })
  groups?: InventoryGroup[];
}
