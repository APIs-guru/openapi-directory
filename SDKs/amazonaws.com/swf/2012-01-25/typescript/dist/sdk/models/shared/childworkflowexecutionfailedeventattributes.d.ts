import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.
**/
export declare class ChildWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
    details?: string;
    initiatedEventId: number;
    reason?: string;
    startedEventId: number;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
