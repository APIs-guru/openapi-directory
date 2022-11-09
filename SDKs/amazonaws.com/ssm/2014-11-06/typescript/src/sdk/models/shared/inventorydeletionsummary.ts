import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryDeletionSummaryItem } from "./inventorydeletionsummaryitem";


// InventoryDeletionSummary
/** 
 * Information about the delete operation.
**/
export class InventoryDeletionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=RemainingCount" })
  remainingCount?: number;

  @Metadata({ data: "json, name=SummaryItems", elemType: shared.InventoryDeletionSummaryItem })
  summaryItems?: InventoryDeletionSummaryItem[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
