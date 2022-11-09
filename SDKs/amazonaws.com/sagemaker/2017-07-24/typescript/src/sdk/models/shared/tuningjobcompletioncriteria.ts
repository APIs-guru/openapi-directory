import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TuningJobCompletionCriteria
/** 
 * The job completion criteria.
**/
export class TuningJobCompletionCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetObjectiveMetricValue" })
  targetObjectiveMetricValue: number;
}
