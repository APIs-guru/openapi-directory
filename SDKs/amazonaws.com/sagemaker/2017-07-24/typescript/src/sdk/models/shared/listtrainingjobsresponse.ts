import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrainingJobSummary } from "./trainingjobsummary";


export class ListTrainingJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TrainingJobSummaries", elemType: shared.TrainingJobSummary })
  trainingJobSummaries: TrainingJobSummary[];
}
