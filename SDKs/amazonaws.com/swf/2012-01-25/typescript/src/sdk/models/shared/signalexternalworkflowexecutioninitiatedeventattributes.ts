import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignalExternalWorkflowExecutionInitiatedEventAttributes
/** 
 * Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
**/
export class SignalExternalWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=control" })
  control?: string;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=runId" })
  runId?: string;

  @Metadata({ data: "json, name=signalName" })
  signalName: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
