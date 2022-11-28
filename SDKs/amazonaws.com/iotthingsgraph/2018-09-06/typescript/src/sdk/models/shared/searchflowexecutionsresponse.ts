import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionSummary } from "./flowexecutionsummary";



export class SearchFlowExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: FlowExecutionSummary })
  summaries?: FlowExecutionSummary[];
}
