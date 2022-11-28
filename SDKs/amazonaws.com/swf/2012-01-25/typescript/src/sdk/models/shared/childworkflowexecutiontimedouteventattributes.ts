import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionTimeoutTypeEnum } from "./workflowexecutiontimeouttypeenum";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";



// ChildWorkflowExecutionTimedOutEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
**/
export class ChildWorkflowExecutionTimedOutEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutType" })
  timeoutType: WorkflowExecutionTimeoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
