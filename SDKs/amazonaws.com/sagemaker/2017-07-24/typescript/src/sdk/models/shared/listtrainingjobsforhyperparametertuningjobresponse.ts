import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";



export class ListTrainingJobsForHyperParameterTuningJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobSummaries", elemType: HyperParameterTrainingJobSummary })
  trainingJobSummaries: HyperParameterTrainingJobSummary[];
}
