import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilter } from "./inventoryfilter";
/**
 * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
**/
export declare class InventoryGroup extends SpeakeasyBase {
    filters: InventoryFilter[];
    name: string;
}
