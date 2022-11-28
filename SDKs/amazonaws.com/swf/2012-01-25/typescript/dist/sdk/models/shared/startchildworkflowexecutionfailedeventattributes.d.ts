import { SpeakeasyBase } from "../../../internal/utils";
import { StartChildWorkflowExecutionFailedCauseEnum } from "./startchildworkflowexecutionfailedcauseenum";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
**/
export declare class StartChildWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    cause: StartChildWorkflowExecutionFailedCauseEnum;
    control?: string;
    decisionTaskCompletedEventId: number;
    initiatedEventId: number;
    workflowId: string;
    workflowType: WorkflowType;
}
