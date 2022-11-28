import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryAggregator } from "./inventoryaggregator";
import { InventoryFilter } from "./inventoryfilter";
import { ResultAttribute } from "./resultattribute";
export declare class GetInventoryRequest extends SpeakeasyBase {
    aggregators?: InventoryAggregator[];
    filters?: InventoryFilter[];
    maxResults?: number;
    nextToken?: string;
    resultAttributes?: ResultAttribute[];
}
