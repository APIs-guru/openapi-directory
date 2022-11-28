import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityTaskCancelRequestedEventAttributes
/** 
 * Provides the details of the <code>ActivityTaskCancelRequested</code> event.
**/
export class ActivityTaskCancelRequestedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
