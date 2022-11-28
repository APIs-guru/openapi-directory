import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartChildWorkflowExecutionFailedCauseEnum } from "./startchildworkflowexecutionfailedcauseenum";
import { WorkflowType } from "./workflowtype";



// StartChildWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
**/
export class StartChildWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: StartChildWorkflowExecutionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;

  @SpeakeasyMetadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
