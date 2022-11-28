import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSummary } from "./algorithmsummary";



export class ListAlgorithmsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmSummaryList", elemType: AlgorithmSummary })
  algorithmSummaryList: AlgorithmSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
