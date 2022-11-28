import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilter } from "./inventoryfilter";
export declare class ListResourceInventoryRequest extends SpeakeasyBase {
    filters?: InventoryFilter[];
    maxResults?: number;
    nextToken?: string;
}
