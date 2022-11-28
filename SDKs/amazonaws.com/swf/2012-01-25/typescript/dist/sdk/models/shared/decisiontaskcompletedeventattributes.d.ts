import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>DecisionTaskCompleted</code> event.
**/
export declare class DecisionTaskCompletedEventAttributes extends SpeakeasyBase {
    executionContext?: string;
    scheduledEventId: number;
    startedEventId: number;
}
