import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FlowExecutionSummary } from "./flowexecutionsummary";


export class SearchFlowExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=summaries", elemType: shared.FlowExecutionSummary })
  summaries?: FlowExecutionSummary[];
}
