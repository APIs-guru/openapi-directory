import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
**/
export declare class ObjectiveStatusCounters extends SpeakeasyBase {
    failed?: number;
    pending?: number;
    succeeded?: number;
}
