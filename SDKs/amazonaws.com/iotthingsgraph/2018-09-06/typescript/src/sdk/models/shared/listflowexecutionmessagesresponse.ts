import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionMessage } from "./flowexecutionmessage";



export class ListFlowExecutionMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: FlowExecutionMessage })
  messages?: FlowExecutionMessage[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
