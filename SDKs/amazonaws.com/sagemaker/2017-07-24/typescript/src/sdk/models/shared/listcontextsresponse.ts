import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContextSummary } from "./contextsummary";


export class ListContextsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextSummaries", elemType: shared.ContextSummary })
  contextSummaries?: ContextSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
