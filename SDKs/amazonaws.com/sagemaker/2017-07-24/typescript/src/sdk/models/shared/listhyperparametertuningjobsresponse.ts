import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobSummary } from "./hyperparametertuningjobsummary";



export class ListHyperParameterTuningJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobSummaries", elemType: HyperParameterTuningJobSummary })
  hyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
