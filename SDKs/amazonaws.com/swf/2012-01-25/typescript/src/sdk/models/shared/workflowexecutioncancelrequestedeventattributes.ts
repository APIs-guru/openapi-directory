import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecutionCancelRequestedCauseEnum } from "./workflowexecutioncancelrequestedcauseenum";
import { WorkflowExecution } from "./workflowexecution";


// WorkflowExecutionCancelRequestedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
**/
export class WorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: WorkflowExecutionCancelRequestedCauseEnum;

  @Metadata({ data: "json, name=externalInitiatedEventId" })
  externalInitiatedEventId?: number;

  @Metadata({ data: "json, name=externalWorkflowExecution" })
  externalWorkflowExecution?: WorkflowExecution;
}
