import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionCancelRequestedCauseEnum } from "./workflowexecutioncancelrequestedcauseenum";
import { WorkflowExecution } from "./workflowexecution";
/**
 * Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
**/
export declare class WorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
    cause?: WorkflowExecutionCancelRequestedCauseEnum;
    externalInitiatedEventId?: number;
    externalWorkflowExecution?: WorkflowExecution;
}
