import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HumanLoopSummary } from "./humanloopsummary";


export class ListHumanLoopsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLoopSummaries", elemType: shared.HumanLoopSummary })
  humanLoopSummaries: HumanLoopSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
