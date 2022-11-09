import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DecisionTaskTimeoutTypeEnum } from "./decisiontasktimeouttypeenum";


// DecisionTaskTimedOutEventAttributes
/** 
 * Provides the details of the <code>DecisionTaskTimedOut</code> event.
**/
export class DecisionTaskTimedOutEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=timeoutType" })
  timeoutType: DecisionTaskTimeoutTypeEnum;
}
