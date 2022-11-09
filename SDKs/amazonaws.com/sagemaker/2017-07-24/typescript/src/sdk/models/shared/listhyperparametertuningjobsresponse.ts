import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HyperParameterTuningJobSummary } from "./hyperparametertuningjobsummary";


export class ListHyperParameterTuningJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameterTuningJobSummaries", elemType: shared.HyperParameterTuningJobSummary })
  hyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
