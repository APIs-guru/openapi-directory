import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SlotMigration
/** 
 * Represents the progress of an online resharding operation.
**/
export class SlotMigration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProgressPercentage" })
  progressPercentage?: number;
}
