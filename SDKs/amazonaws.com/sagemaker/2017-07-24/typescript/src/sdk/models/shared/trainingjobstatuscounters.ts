import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrainingJobStatusCounters
/** 
 * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
**/
export class TrainingJobStatusCounters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Completed" })
  completed?: number;

  @Metadata({ data: "json, name=InProgress" })
  inProgress?: number;

  @Metadata({ data: "json, name=NonRetryableError" })
  nonRetryableError?: number;

  @Metadata({ data: "json, name=RetryableError" })
  retryableError?: number;

  @Metadata({ data: "json, name=Stopped" })
  stopped?: number;
}
