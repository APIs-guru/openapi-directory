import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionSummaryItem } from "./inventorydeletionsummaryitem";
/**
 * Information about the delete operation.
**/
export declare class InventoryDeletionSummary extends SpeakeasyBase {
    remainingCount?: number;
    summaryItems?: InventoryDeletionSummaryItem[];
    totalCount?: number;
}
