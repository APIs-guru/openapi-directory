import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityTaskTimeoutTypeEnum } from "./activitytasktimeouttypeenum";
/**
 * Provides the details of the <code>ActivityTaskTimedOut</code> event.
**/
export declare class ActivityTaskTimedOutEventAttributes extends SpeakeasyBase {
    details?: string;
    scheduledEventId: number;
    startedEventId: number;
    timeoutType: ActivityTaskTimeoutTypeEnum;
}
