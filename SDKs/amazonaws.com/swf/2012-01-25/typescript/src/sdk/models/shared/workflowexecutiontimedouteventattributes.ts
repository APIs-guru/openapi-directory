import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { WorkflowExecutionTimeoutTypeEnum } from "./workflowexecutiontimeouttypeenum";


// WorkflowExecutionTimedOutEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
**/
export class WorkflowExecutionTimedOutEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @Metadata({ data: "json, name=timeoutType" })
  timeoutType: WorkflowExecutionTimeoutTypeEnum;
}
