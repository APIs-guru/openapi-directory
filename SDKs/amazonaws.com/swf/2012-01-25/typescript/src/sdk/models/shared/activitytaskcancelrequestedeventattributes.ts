import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityTaskCancelRequestedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskCancelRequested</code> event.
**/
export class ActivityTaskCancelRequestedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
