import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceLimits
/** 
 * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
**/
export class ResourceLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxNumberOfTrainingJobs" })
  maxNumberOfTrainingJobs: number;

  @Metadata({ data: "json, name=MaxParallelTrainingJobs" })
  maxParallelTrainingJobs: number;
}
