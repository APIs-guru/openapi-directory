import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionTerminatedCauseEnum } from "./workflowexecutionterminatedcauseenum";
import { ChildPolicyEnum } from "./childpolicyenum";



// WorkflowExecutionTerminatedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionTerminated</code> event.
**/
export class WorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: WorkflowExecutionTerminatedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
