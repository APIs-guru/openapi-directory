import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchInferenceJobSummary
/** 
 * A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.
**/
export class BatchInferenceJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchInferenceJobArn" })
  batchInferenceJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
