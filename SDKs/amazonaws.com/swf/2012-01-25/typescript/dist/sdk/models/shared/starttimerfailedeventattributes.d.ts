import { SpeakeasyBase } from "../../../internal/utils";
import { StartTimerFailedCauseEnum } from "./starttimerfailedcauseenum";
/**
 * Provides the details of the <code>StartTimerFailed</code> event.
**/
export declare class StartTimerFailedEventAttributes extends SpeakeasyBase {
    cause: StartTimerFailedCauseEnum;
    decisionTaskCompletedEventId: number;
    timerId: string;
}
