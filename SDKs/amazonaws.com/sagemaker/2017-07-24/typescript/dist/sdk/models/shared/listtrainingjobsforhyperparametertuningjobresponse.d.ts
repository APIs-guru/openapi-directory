import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
export declare class ListTrainingJobsForHyperParameterTuningJobResponse extends SpeakeasyBase {
    nextToken?: string;
    trainingJobSummaries: HyperParameterTrainingJobSummary[];
}
