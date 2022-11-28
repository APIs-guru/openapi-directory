import { SpeakeasyBase } from "../../../internal/utils";
import { SignalExternalWorkflowExecutionFailedCauseEnum } from "./signalexternalworkflowexecutionfailedcauseenum";
/**
 * Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
**/
export declare class SignalExternalWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: SignalExternalWorkflowExecutionFailedCauseEnum;
    control?: string;
    decisionTaskCompletedEventId: number;
    initiatedEventId: number;
    runId?: string;
    workflowId: string;
}
