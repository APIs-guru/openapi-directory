import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// ChildWorkflowExecutionCanceledEventAttributes
/** 
 * Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.
**/
export class ChildWorkflowExecutionCanceledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
