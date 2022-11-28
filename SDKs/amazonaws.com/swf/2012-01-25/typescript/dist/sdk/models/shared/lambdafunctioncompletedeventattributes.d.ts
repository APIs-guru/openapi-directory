import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.
**/
export declare class LambdaFunctionCompletedEventAttributes extends SpeakeasyBase {
    result?: string;
    scheduledEventId: number;
    startedEventId: number;
}
