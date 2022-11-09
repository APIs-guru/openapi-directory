import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestCancelActivityTaskFailedCauseEnum } from "./requestcancelactivitytaskfailedcauseenum";


// RequestCancelActivityTaskFailedEventAttributes
/** 
 * Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
**/
export class RequestCancelActivityTaskFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId: string;

  @Metadata({ data: "json, name=cause" })
  cause: RequestCancelActivityTaskFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;
}
