import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryDeletionSummaryItem
/** 
 * Either a count, remaining count, or a version number in a delete inventory summary.
**/
export class InventoryDeletionSummaryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=RemainingCount" })
  remainingCount?: number;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
