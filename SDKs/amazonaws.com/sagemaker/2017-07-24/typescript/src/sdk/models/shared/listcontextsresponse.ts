import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextSummary } from "./contextsummary";



export class ListContextsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextSummaries", elemType: ContextSummary })
  contextSummaries?: ContextSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
