import { SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionEventTypeEnum } from "./flowexecutioneventtypeenum";
/**
 * An object that contains information about a flow event.
**/
export declare class FlowExecutionMessage extends SpeakeasyBase {
    eventType?: FlowExecutionEventTypeEnum;
    messageId?: string;
    payload?: string;
    timestamp?: Date;
}
