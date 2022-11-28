import { SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJobConfig } from "./batchinferencejobconfig";
import { BatchInferenceJobInput } from "./batchinferencejobinput";
import { BatchInferenceJobOutput } from "./batchinferencejoboutput";
/**
 * Contains information on a batch inference job.
**/
export declare class BatchInferenceJob extends SpeakeasyBase {
    batchInferenceJobArn?: string;
    batchInferenceJobConfig?: BatchInferenceJobConfig;
    creationDateTime?: Date;
    failureReason?: string;
    filterArn?: string;
    jobInput?: BatchInferenceJobInput;
    jobName?: string;
    jobOutput?: BatchInferenceJobOutput;
    lastUpdatedDateTime?: Date;
    numResults?: number;
    roleArn?: string;
    solutionVersionArn?: string;
    status?: string;
}
