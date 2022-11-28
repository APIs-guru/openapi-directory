import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionSummaryItem } from "./inventorydeletionsummaryitem";



// InventoryDeletionSummary
/** 
 * Information about the delete operation.
**/
export class InventoryDeletionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RemainingCount" })
  remainingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SummaryItems", elemType: InventoryDeletionSummaryItem })
  summaryItems?: InventoryDeletionSummaryItem[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
