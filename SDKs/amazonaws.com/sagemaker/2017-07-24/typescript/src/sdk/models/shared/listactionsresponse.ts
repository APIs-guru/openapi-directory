import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionSummary } from "./actionsummary";



export class ListActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionSummaries", elemType: ActionSummary })
  actionSummaries?: ActionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
