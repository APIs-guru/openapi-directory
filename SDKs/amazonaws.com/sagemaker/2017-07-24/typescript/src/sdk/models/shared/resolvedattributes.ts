import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlJobCompletionCriteria } from "./automljobcompletioncriteria";
import { ProblemTypeEnum } from "./problemtypeenum";


// ResolvedAttributes
/** 
 * The resolved attributes.
**/
export class ResolvedAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobObjective" })
  autoMlJobObjective?: AutoMlJobObjective;

  @Metadata({ data: "json, name=CompletionCriteria" })
  completionCriteria?: AutoMlJobCompletionCriteria;

  @Metadata({ data: "json, name=ProblemType" })
  problemType?: ProblemTypeEnum;
}
