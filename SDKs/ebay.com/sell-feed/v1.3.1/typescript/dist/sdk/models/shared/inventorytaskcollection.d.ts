import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryTask } from "./inventorytask";
export declare class InventoryTaskCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    next?: string;
    offset?: number;
    prev?: string;
    tasks?: InventoryTask[];
    total?: number;
}
