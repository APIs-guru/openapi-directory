import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowExecutionEventTypeEnum } from "./flowexecutioneventtypeenum";



// FlowExecutionMessage
/** 
 * An object that contains information about a flow event.
**/
export class FlowExecutionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: FlowExecutionEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: Date;
}
