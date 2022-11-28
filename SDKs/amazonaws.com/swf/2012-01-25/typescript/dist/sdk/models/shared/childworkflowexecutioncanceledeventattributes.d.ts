import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.
**/
export declare class ChildWorkflowExecutionCanceledEventAttributes extends SpeakeasyBase {
    details?: string;
    initiatedEventId: number;
    startedEventId: number;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
