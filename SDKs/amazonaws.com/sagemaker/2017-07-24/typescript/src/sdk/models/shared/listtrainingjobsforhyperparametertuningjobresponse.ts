import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";


export class ListTrainingJobsForHyperParameterTuningJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TrainingJobSummaries", elemType: shared.HyperParameterTrainingJobSummary })
  trainingJobSummaries: HyperParameterTrainingJobSummary[];
}
