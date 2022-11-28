import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.
**/
export declare class ChildWorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
    initiatedEventId: number;
    startedEventId: number;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
