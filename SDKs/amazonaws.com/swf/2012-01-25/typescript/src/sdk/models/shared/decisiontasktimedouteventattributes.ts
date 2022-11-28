import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DecisionTaskTimeoutTypeEnum } from "./decisiontasktimeouttypeenum";



// DecisionTaskTimedOutEventAttributes
/** 
 * Provides the details of the <code>DecisionTaskTimedOut</code> event.
**/
export class DecisionTaskTimedOutEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutType" })
  timeoutType: DecisionTaskTimeoutTypeEnum;
}
