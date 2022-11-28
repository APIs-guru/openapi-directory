import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionStatusItem } from "./inventorydeletionstatusitem";
export declare class DescribeInventoryDeletionsResult extends SpeakeasyBase {
    inventoryDeletions?: InventoryDeletionStatusItem[];
    nextToken?: string;
}
