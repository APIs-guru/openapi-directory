import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionSummary } from "./actionsummary";


export class ListActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionSummaries", elemType: shared.ActionSummary })
  actionSummaries?: ActionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
