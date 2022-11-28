import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
**/
export declare class ResourceLimits extends SpeakeasyBase {
    maxNumberOfTrainingJobs: number;
    maxParallelTrainingJobs: number;
}
