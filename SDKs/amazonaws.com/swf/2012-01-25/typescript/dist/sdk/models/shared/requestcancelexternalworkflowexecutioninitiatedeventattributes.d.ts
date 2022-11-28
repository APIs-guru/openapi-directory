import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
**/
export declare class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
    control?: string;
    decisionTaskCompletedEventId: number;
    runId?: string;
    workflowId: string;
}
