import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";



// ExternalWorkflowExecutionSignaledEventAttributes
/** 
 * Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
**/
export class ExternalWorkflowExecutionSignaledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;
}
