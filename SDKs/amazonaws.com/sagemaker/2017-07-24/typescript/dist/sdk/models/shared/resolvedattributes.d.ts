import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobObjective } from "./automljobobjective";
import { AutoMlJobCompletionCriteria } from "./automljobcompletioncriteria";
import { ProblemTypeEnum } from "./problemtypeenum";
/**
 * The resolved attributes.
**/
export declare class ResolvedAttributes extends SpeakeasyBase {
    autoMlJobObjective?: AutoMlJobObjective;
    completionCriteria?: AutoMlJobCompletionCriteria;
    problemType?: ProblemTypeEnum;
}
