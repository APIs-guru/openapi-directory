import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FlowExecutionMessage } from "./flowexecutionmessage";


export class ListFlowExecutionMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.FlowExecutionMessage })
  messages?: FlowExecutionMessage[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
