import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";



// ChildWorkflowExecutionStartedEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionStarted</code> event.
**/
export class ChildWorkflowExecutionStartedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
