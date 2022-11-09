import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryStrategy
/** 
 * The retry strategy to use when a training job fails due to an <code>InternalServerError</code>. <code>RetryStrategy</code> is specified as part of the <code>CreateTrainingJob</code> and <code>CreateHyperParameterTuningJob</code> requests. You can add the <code>StoppingCondition</code> parameter to the request to limit the training time for the complete job.
**/
export class RetryStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumRetryAttempts" })
  maximumRetryAttempts: number;
}
