import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentSummary } from "./experimentsummary";


export class ListExperimentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentSummaries", elemType: shared.ExperimentSummary })
  experimentSummaries?: ExperimentSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
