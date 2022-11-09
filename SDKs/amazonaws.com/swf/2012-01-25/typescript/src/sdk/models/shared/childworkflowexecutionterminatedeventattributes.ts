import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// ChildWorkflowExecutionTerminatedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.
**/
export class ChildWorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
