import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceLimits
/** 
 * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
**/
export class ResourceLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxNumberOfTrainingJobs" })
  maxNumberOfTrainingJobs: number;

  @SpeakeasyMetadata({ data: "json, name=MaxParallelTrainingJobs" })
  maxParallelTrainingJobs: number;
}
