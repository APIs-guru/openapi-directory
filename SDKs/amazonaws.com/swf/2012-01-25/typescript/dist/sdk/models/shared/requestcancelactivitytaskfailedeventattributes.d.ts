import { SpeakeasyBase } from "../../../internal/utils";
import { RequestCancelActivityTaskFailedCauseEnum } from "./requestcancelactivitytaskfailedcauseenum";
/**
 * Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
**/
export declare class RequestCancelActivityTaskFailedEventAttributes extends SpeakeasyBase {
    activityId: string;
    cause: RequestCancelActivityTaskFailedCauseEnum;
    decisionTaskCompletedEventId: number;
}
