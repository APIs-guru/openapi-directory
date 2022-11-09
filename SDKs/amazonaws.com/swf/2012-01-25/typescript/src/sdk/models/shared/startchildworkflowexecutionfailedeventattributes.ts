import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartChildWorkflowExecutionFailedCauseEnum } from "./startchildworkflowexecutionfailedcauseenum";
import { WorkflowType } from "./workflowtype";


// StartChildWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event.
**/
export class StartChildWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: StartChildWorkflowExecutionFailedCauseEnum;

  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;

  @Metadata({ data: "json, name=workflowType" })
  workflowType: WorkflowType;
}
