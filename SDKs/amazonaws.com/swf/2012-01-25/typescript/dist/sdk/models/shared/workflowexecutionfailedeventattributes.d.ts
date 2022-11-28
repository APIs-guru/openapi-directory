import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>WorkflowExecutionFailed</code> event.
**/
export declare class WorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    decisionTaskCompletedEventId: number;
    details?: string;
    reason?: string;
}
