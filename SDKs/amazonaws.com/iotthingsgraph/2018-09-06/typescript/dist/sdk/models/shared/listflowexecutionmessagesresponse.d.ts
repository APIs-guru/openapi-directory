import { SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionMessage } from "./flowexecutionmessage";
export declare class ListFlowExecutionMessagesResponse extends SpeakeasyBase {
    messages?: FlowExecutionMessage[];
    nextToken?: string;
}
