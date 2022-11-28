import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilter } from "./inventoryfilter";



// InventoryGroup
/** 
 * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
**/
export class InventoryGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: InventoryFilter })
  filters: InventoryFilter[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
