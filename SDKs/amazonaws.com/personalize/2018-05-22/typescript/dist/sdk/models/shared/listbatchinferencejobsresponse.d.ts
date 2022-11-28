import { SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJobSummary } from "./batchinferencejobsummary";
export declare class ListBatchInferenceJobsResponse extends SpeakeasyBase {
    batchInferenceJobs?: BatchInferenceJobSummary[];
    nextToken?: string;
}
