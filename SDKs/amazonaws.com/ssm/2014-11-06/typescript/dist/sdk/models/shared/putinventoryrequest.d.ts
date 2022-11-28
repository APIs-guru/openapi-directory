import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryItem } from "./inventoryitem";
export declare class PutInventoryRequest extends SpeakeasyBase {
    instanceId: string;
    items: InventoryItem[];
}
