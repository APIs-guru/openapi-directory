import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";
export declare class DeleteInventoryResult extends SpeakeasyBase {
    deletionId?: string;
    deletionSummary?: InventoryDeletionSummary;
    typeName?: string;
}
