import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>ActivityTaskFailed</code> event.
**/
export declare class ActivityTaskFailedEventAttributes extends SpeakeasyBase {
    details?: string;
    reason?: string;
    scheduledEventId: number;
    startedEventId: number;
}
