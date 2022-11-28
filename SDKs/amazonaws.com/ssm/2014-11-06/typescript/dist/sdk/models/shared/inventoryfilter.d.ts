import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryQueryOperatorTypeEnum } from "./inventoryqueryoperatortypeenum";
/**
 * One or more filters. Use a filter to return a more specific list of results.
**/
export declare class InventoryFilter extends SpeakeasyBase {
    key: string;
    type?: InventoryQueryOperatorTypeEnum;
    values: string[];
}
