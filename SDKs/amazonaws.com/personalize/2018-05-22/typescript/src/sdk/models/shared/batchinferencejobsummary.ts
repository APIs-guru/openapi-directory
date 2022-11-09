import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchInferenceJobSummary
/** 
 * A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.
**/
export class BatchInferenceJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchInferenceJobArn" })
  batchInferenceJobArn?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=jobName" })
  jobName?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
