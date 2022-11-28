import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopSummary } from "./humanloopsummary";



export class ListHumanLoopsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopSummaries", elemType: HumanLoopSummary })
  humanLoopSummaries: HumanLoopSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
