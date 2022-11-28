import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestCancelExternalWorkflowExecutionFailedCauseEnum } from "./requestcancelexternalworkflowexecutionfailedcauseenum";



// RequestCancelExternalWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
**/
export class RequestCancelExternalWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: RequestCancelExternalWorkflowExecutionFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=initiatedEventId" })
  initiatedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
