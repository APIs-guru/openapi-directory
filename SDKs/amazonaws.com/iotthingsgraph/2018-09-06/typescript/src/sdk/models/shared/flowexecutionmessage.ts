import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowExecutionEventTypeEnum } from "./flowexecutioneventtypeenum";


// FlowExecutionMessage
/** 
 * An object that contains information about a flow event.
**/
export class FlowExecutionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventType" })
  eventType?: FlowExecutionEventTypeEnum;

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
