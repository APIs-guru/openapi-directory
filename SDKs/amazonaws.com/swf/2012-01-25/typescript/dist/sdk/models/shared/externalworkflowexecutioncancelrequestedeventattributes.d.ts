import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
/**
 * Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
**/
export declare class ExternalWorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
    initiatedEventId: number;
    workflowExecution: WorkflowExecution;
}
