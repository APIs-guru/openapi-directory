import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>ActivityTaskCompleted</code> event.
**/
export declare class ActivityTaskCompletedEventAttributes extends SpeakeasyBase {
    result?: string;
    scheduledEventId: number;
    startedEventId: number;
}
