import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// ChildWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionFailed</code> event.
**/
export class ChildWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
