import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrainingJobSummary } from "./trainingjobsummary";



export class ListTrainingJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobSummaries", elemType: TrainingJobSummary })
  trainingJobSummaries: TrainingJobSummary[];
}
