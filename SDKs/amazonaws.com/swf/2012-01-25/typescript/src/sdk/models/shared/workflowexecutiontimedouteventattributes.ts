import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildPolicyEnum } from "./childpolicyenum";
import { WorkflowExecutionTimeoutTypeEnum } from "./workflowexecutiontimeouttypeenum";



// WorkflowExecutionTimedOutEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
**/
export class WorkflowExecutionTimedOutEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=timeoutType" })
  timeoutType: WorkflowExecutionTimeoutTypeEnum;
}
