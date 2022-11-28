import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";
import { InventoryDeletionStatusEnum } from "./inventorydeletionstatusenum";
/**
 * Status information returned by the <code>DeleteInventory</code> operation.
**/
export declare class InventoryDeletionStatusItem extends SpeakeasyBase {
    deletionId?: string;
    deletionStartTime?: Date;
    deletionSummary?: InventoryDeletionSummary;
    lastStatus?: InventoryDeletionStatusEnum;
    lastStatusMessage?: string;
    lastStatusUpdateTime?: Date;
    typeName?: string;
}
