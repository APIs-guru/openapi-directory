import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";


// ExternalWorkflowExecutionCancelRequestedEventAttributes
/** 
 * Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
**/
export class ExternalWorkflowExecutionCancelRequestedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;
}
