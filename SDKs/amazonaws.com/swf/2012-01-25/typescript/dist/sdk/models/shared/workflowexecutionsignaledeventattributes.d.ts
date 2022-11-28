import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
/**
 * Provides the details of the <code>WorkflowExecutionSignaled</code> event.
**/
export declare class WorkflowExecutionSignaledEventAttributes extends SpeakeasyBase {
    externalInitiatedEventId?: number;
    externalWorkflowExecution?: WorkflowExecution;
    input?: string;
    signalName: string;
}
