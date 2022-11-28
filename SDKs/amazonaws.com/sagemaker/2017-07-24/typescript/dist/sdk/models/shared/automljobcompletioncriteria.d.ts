import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How long a job is allowed to run, or how many candidates a job is allowed to generate.
**/
export declare class AutoMlJobCompletionCriteria extends SpeakeasyBase {
    maxAutoMlJobRuntimeInSeconds?: number;
    maxCandidates?: number;
    maxRuntimePerTrainingJobInSeconds?: number;
}
