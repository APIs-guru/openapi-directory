import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionCancelRequestedCauseEnum } from "./workflowexecutioncancelrequestedcauseenum";
import { WorkflowExecution } from "./workflowexecution";



// WorkflowExecutionCancelRequestedEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionCancelRequested</code> event.
**/
export class WorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: WorkflowExecutionCancelRequestedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=externalInitiatedEventId" })
  externalInitiatedEventId?: number;

  @SpeakeasyMetadata({ data: "json, name=externalWorkflowExecution" })
  externalWorkflowExecution?: WorkflowExecution;
}
