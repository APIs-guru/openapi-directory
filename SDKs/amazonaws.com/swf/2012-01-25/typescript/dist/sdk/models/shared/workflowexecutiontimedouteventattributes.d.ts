import { SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { WorkflowExecutionTimeoutTypeEnum } from "./workflowexecutiontimeouttypeenum";
/**
 * Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
**/
export declare class WorkflowExecutionTimedOutEventAttributes extends SpeakeasyBase {
    childPolicy: ChildPolicyEnum;
    timeoutType: WorkflowExecutionTimeoutTypeEnum;
}
