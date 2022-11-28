import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryFilter } from "./inventoryfilter";
export declare class ListInventoryEntriesRequest extends SpeakeasyBase {
    filters?: InventoryFilter[];
    instanceId: string;
    maxResults?: number;
    nextToken?: string;
    typeName: string;
}
