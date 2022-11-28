import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TuningJobCompletionCriteria
/** 
 * The job completion criteria.
**/
export class TuningJobCompletionCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetObjectiveMetricValue" })
  targetObjectiveMetricValue: number;
}
