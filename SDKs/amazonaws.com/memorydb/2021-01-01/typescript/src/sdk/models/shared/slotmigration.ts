import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlotMigration
/** 
 * Represents the progress of an online resharding operation.
**/
export class SlotMigration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProgressPercentage" })
  progressPercentage?: number;
}
