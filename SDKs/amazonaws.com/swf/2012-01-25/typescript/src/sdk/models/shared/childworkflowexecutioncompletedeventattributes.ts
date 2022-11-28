import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";



// ChildWorkflowExecutionCompletedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
**/
export class ChildWorkflowExecutionCompletedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
