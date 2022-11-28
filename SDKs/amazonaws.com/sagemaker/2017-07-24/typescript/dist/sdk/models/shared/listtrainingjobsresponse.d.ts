import { SpeakeasyBase } from "../../../internal/utils";
import { TrainingJobSummary } from "./trainingjobsummary";
export declare class ListTrainingJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    trainingJobSummaries: TrainingJobSummary[];
}
