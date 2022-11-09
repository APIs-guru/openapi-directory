import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";


// ExternalWorkflowExecutionSignaledEventAttributes
/** 
 * Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event.
**/
export class ExternalWorkflowExecutionSignaledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;
}
