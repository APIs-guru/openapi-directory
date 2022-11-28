import { SpeakeasyBase } from "../../../internal/utils";
import { CancelTimerFailedCauseEnum } from "./canceltimerfailedcauseenum";
/**
 * Provides the details of the <code>CancelTimerFailed</code> event.
**/
export declare class CancelTimerFailedEventAttributes extends SpeakeasyBase {
    cause: CancelTimerFailedCauseEnum;
    decisionTaskCompletedEventId: number;
    timerId: string;
}
