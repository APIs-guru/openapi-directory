import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";



// ExternalWorkflowExecutionCancelRequestedEventAttributes
/** 
 * Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
**/
export class ExternalWorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;
}
