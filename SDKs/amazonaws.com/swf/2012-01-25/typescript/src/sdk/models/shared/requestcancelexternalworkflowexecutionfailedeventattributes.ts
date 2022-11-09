import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RequestCancelExternalWorkflowExecutionFailedCauseEnum } from "./requestcancelexternalworkflowexecutionfailedcauseenum";


// RequestCancelExternalWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
**/
export class RequestCancelExternalWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: RequestCancelExternalWorkflowExecutionFailedCauseEnum;

  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @Metadata({ data: "json, name=runId" })
  runId?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
