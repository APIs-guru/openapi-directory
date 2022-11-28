import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelCountersForWorkteam
/** 
 * Provides counts for human-labeled tasks in the labeling job.
**/
export class LabelCountersForWorkteam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLabeled" })
  humanLabeled?: number;

  @SpeakeasyMetadata({ data: "json, name=PendingHuman" })
  pendingHuman?: number;

  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;
}
