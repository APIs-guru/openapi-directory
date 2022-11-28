import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerSummary } from "./inferenceschedulersummary";
export declare class ListInferenceSchedulersResponse extends SpeakeasyBase {
    inferenceSchedulerSummaries?: InferenceSchedulerSummary[];
    nextToken?: string;
}
