import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSummary } from "./experimentsummary";



export class ListExperimentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentSummaries", elemType: ExperimentSummary })
  experimentSummaries?: ExperimentSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
