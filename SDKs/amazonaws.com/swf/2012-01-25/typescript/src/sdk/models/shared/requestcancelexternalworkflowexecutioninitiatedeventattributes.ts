import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
/** 
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
**/
export class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
