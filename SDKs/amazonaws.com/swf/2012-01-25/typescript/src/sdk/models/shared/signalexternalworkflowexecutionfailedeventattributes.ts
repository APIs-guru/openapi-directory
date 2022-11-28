import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignalExternalWorkflowExecutionFailedCauseEnum } from "./signalexternalworkflowexecutionfailedcauseenum";



// SignalExternalWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
**/
export class SignalExternalWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: SignalExternalWorkflowExecutionFailedCauseEnum;

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
