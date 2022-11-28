import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
/**
 * Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
**/
export declare class ExternalWorkflowExecutionSignaledEventAttributes extends SpeakeasyBase {
    initiatedEventId: number;
    workflowExecution: WorkflowExecution;
}
