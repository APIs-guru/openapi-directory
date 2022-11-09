import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryFilter } from "./inventoryfilter";


// InventoryGroup
/** 
 * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
**/
export class InventoryGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.InventoryFilter })
  filters: InventoryFilter[];

  @Metadata({ data: "json, name=Name" })
  name: string;
}
