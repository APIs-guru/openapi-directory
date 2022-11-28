import { SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJobConfig } from "./batchinferencejobconfig";
import { BatchInferenceJobInput } from "./batchinferencejobinput";
import { BatchInferenceJobOutput } from "./batchinferencejoboutput";
export declare class CreateBatchInferenceJobRequest extends SpeakeasyBase {
    batchInferenceJobConfig?: BatchInferenceJobConfig;
    filterArn?: string;
    jobInput: BatchInferenceJobInput;
    jobName: string;
    jobOutput: BatchInferenceJobOutput;
    numResults?: number;
    roleArn: string;
    solutionVersionArn: string;
}
