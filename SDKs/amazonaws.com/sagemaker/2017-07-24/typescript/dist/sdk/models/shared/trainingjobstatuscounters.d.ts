import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
**/
export declare class TrainingJobStatusCounters extends SpeakeasyBase {
    completed?: number;
    inProgress?: number;
    nonRetryableError?: number;
    retryableError?: number;
    stopped?: number;
}
