import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestCancelActivityTaskFailedCauseEnum } from "./requestcancelactivitytaskfailedcauseenum";



// RequestCancelActivityTaskFailedEventAttributes
/** 
 * Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
**/
export class RequestCancelActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId: string;

  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: RequestCancelActivityTaskFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
