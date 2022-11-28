import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlJobCompletionCriteria } from "./automljobcompletioncriteria";
import { ProblemTypeEnum } from "./problemtypeenum";



// ResolvedAttributes
/** 
 * The resolved attributes.
**/
export class ResolvedAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobObjective" })
  autoMlJobObjective?: AutoMlJobObjective;

  @SpeakeasyMetadata({ data: "json, name=CompletionCriteria" })
  completionCriteria?: AutoMlJobCompletionCriteria;

  @SpeakeasyMetadata({ data: "json, name=ProblemType" })
  problemType?: ProblemTypeEnum;
}
