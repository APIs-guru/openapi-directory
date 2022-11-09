import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
/** 
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
**/
export class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=runId" })
  runId?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
