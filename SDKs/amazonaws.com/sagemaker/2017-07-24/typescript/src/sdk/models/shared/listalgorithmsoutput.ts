import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlgorithmSummary } from "./algorithmsummary";


export class ListAlgorithmsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmSummaryList", elemType: shared.AlgorithmSummary })
  algorithmSummaryList: AlgorithmSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
