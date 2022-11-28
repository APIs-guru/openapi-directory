import { SpeakeasyBase } from "../../../internal/utils";
import { DecisionTaskTimeoutTypeEnum } from "./decisiontasktimeouttypeenum";
/**
 * Provides the details of the <code>DecisionTaskTimedOut</code> event.
**/
export declare class DecisionTaskTimedOutEventAttributes extends SpeakeasyBase {
    scheduledEventId: number;
    startedEventId: number;
    timeoutType: DecisionTaskTimeoutTypeEnum;
}
