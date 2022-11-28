import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";
/**
 * Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
**/
export declare class ChildWorkflowExecutionCompletedEventAttributes extends SpeakeasyBase {
    initiatedEventId: number;
    result?: string;
    startedEventId: number;
    workflowExecution: WorkflowExecution;
    workflowType: WorkflowType;
}
