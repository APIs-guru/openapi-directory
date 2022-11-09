import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelCountersForWorkteam
/** 
 * Provides counts for human-labeled tasks in the labeling job.
**/
export class LabelCountersForWorkteam extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLabeled" })
  humanLabeled?: number;

  @Metadata({ data: "json, name=PendingHuman" })
  pendingHuman?: number;

  @Metadata({ data: "json, name=Total" })
  total?: number;
}
