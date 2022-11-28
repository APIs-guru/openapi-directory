import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.
**/
export declare class LambdaFunctionScheduledEventAttributes extends SpeakeasyBase {
    control?: string;
    decisionTaskCompletedEventId: number;
    id: string;
    input?: string;
    name: string;
    startToCloseTimeout?: string;
}
