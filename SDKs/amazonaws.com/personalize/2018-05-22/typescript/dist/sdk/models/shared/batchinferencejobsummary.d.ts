import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A truncated version of the <a>BatchInferenceJob</a> datatype. The <a>ListBatchInferenceJobs</a> operation returns a list of batch inference job summaries.
**/
export declare class BatchInferenceJobSummary extends SpeakeasyBase {
    batchInferenceJobArn?: string;
    creationDateTime?: Date;
    failureReason?: string;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    solutionVersionArn?: string;
    status?: string;
}
