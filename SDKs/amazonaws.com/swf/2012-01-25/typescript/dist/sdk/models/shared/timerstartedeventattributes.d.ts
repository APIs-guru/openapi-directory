import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>TimerStarted</code> event.
**/
export declare class TimerStartedEventAttributes extends SpeakeasyBase {
    control?: string;
    decisionTaskCompletedEventId: number;
    startToFireTimeout: string;
    timerId: string;
}
