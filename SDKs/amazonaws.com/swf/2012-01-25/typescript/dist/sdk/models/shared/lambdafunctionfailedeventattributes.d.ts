import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
**/
export declare class LambdaFunctionFailedEventAttributes extends SpeakeasyBase {
    details?: string;
    reason?: string;
    scheduledEventId: number;
    startedEventId: number;
}
