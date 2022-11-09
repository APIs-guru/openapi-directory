import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";
import { InventoryDeletionStatusEnum } from "./inventorydeletionstatusenum";


// InventoryDeletionStatusItem
/** 
 * Status information returned by the <code>DeleteInventory</code> operation.
**/
export class InventoryDeletionStatusItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletionId" })
  deletionId?: string;

  @Metadata({ data: "json, name=DeletionStartTime" })
  deletionStartTime?: Date;

  @Metadata({ data: "json, name=DeletionSummary" })
  deletionSummary?: InventoryDeletionSummary;

  @Metadata({ data: "json, name=LastStatus" })
  lastStatus?: InventoryDeletionStatusEnum;

  @Metadata({ data: "json, name=LastStatusMessage" })
  lastStatusMessage?: string;

  @Metadata({ data: "json, name=LastStatusUpdateTime" })
  lastStatusUpdateTime?: Date;

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;
}
