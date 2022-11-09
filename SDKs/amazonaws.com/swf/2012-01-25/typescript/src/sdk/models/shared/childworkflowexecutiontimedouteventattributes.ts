import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecutionTimeoutTypeEnum } from "./workflowexecutiontimeouttypeenum";
import { WorkflowExecution } from "./workflowexecution";
import { WorkflowType } from "./workflowtype";


// ChildWorkflowExecutionTimedOutEventAttributes
/** 
 * Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
**/
export class ChildWorkflowExecutionTimedOutEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=startedEventId" })
  startedEventId: number;

  @Metadata({ data: "json, name=timeoutType" })
  timeoutType: WorkflowExecutionTimeoutTypeEnum;

  @Metadata({ data: "json, name=workflowExecution" })
  workflowExecution: WorkflowExecution;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
