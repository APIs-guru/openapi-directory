import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
**/
export declare class ChildWorkflowExecutionStartedEventAttributes extends SpeakeasyBase {
    initiatedEventId: number;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
