import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>ActivityTaskCanceled</code> event.
**/
export declare class ActivityTaskCanceledEventAttributes extends SpeakeasyBase {
    details?: string;
    latestCancelRequestedEventId?: number;
    scheduledEventId: number;
    startedEventId: number;
}
