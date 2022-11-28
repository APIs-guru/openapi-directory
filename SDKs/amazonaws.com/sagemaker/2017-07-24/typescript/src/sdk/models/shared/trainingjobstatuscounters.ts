import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrainingJobStatusCounters
/** 
 * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
**/
export class TrainingJobStatusCounters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Completed" })
  completed?: number;

  @SpeakeasyMetadata({ data: "json, name=InProgress" })
  inProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=NonRetryableError" })
  nonRetryableError?: number;

  @SpeakeasyMetadata({ data: "json, name=RetryableError" })
  retryableError?: number;

  @SpeakeasyMetadata({ data: "json, name=Stopped" })
  stopped?: number;
}
