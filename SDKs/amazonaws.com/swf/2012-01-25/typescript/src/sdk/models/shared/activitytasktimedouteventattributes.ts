import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityTaskTimeoutTypeEnum } from "./activitytasktimeouttypeenum";



// ActivityTaskTimedOutEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskTimedOut</code> event.
**/
export class ActivityTaskTimedOutEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutType" })
  timeoutType: ActivityTaskTimeoutTypeEnum;
}
