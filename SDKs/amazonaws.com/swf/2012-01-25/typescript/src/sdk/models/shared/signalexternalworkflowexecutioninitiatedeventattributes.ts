import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignalExternalWorkflowExecutionInitiatedEventAttributes
/** 
 * Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
**/
export class SignalExternalWorkflowExecutionInitiatedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: string;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId?: string;

  @SpeakeasyMetadata({ data: "json, name=signalName" })
  signalName: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
