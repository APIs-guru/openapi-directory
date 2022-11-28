import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";
import { InventoryDeletionStatusEnum } from "./inventorydeletionstatusenum";



// InventoryDeletionStatusItem
/** 
 * Status information returned by the <code>DeleteInventory</code> operation.
**/
export class InventoryDeletionStatusItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionId" })
  deletionId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeletionStartTime" })
  deletionStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeletionSummary" })
  deletionSummary?: InventoryDeletionSummary;

  @SpeakeasyMetadata({ data: "json, name=LastStatus" })
  lastStatus?: InventoryDeletionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastStatusMessage" })
  lastStatusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastStatusUpdateTime" })
  lastStatusUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;
}
