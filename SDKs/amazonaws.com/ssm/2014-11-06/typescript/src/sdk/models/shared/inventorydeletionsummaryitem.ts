import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryDeletionSummaryItem
/** 
 * Either a count, remaining count, or a version number in a delete inventory summary.
**/
export class InventoryDeletionSummaryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=RemainingCount" })
  remainingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
