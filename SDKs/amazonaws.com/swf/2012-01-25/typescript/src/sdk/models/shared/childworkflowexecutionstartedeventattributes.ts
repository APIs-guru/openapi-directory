import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// ChildWorkflowExecutionStartedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
**/
export class ChildWorkflowExecutionStartedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
