import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// ChildWorkflowExecutionCompletedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
**/
export class ChildWorkflowExecutionCompletedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
