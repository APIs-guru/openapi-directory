import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";



// ChildWorkflowExecutionTerminatedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event.
**/
export class ChildWorkflowExecutionTerminatedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
