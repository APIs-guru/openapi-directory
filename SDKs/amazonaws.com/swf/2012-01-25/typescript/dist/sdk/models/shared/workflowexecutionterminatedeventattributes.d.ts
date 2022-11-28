import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionTerminatedCauseEnum } from "./workflowexecutionterminatedcauseenum";
import { ChildPolicyEnum } from "./childpolicyenum";
/**
 * Provides the details of the <code>WorkflowExecutionTerminated</code> event.
**/
export declare class WorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
    cause?: WorkflowExecutionTerminatedCauseEnum;
    childPolicy: ChildPolicyEnum;
    details?: string;
    reason?: string;
}
