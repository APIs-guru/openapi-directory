import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityTaskTimeoutTypeEnum } from "./activitytasktimeouttypeenum";


// ActivityTaskTimedOutEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskTimedOut</code> event.
**/
export class ActivityTaskTimedOutEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=scheduledEventId" })
  scheduledEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=timeoutType" })
  timeoutType: ActivityTaskTimeoutTypeEnum;
}
