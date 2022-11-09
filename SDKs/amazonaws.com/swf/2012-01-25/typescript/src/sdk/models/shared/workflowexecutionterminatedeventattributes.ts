import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecutionTerminatedCauseEnum } from "./workflowexecutionterminatedcauseenum";
import { ChildPolicyEnum } from "./childpolicyenum";


// WorkflowExecutionTerminatedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionTerminated</code> event.
**/
export class WorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: WorkflowExecutionTerminatedCauseEnum;

  @Metadata({ data: "json, name=childPolicy" })
  childPolicy: ChildPolicyEnum;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
