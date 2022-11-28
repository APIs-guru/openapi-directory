import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
**/
export declare class SignalExternalWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
    control?: string;
    decisionTaskCompletedEventId: number;
    input?: string;
    runId?: string;
    signalName: string;
    workflowId: string;
}
