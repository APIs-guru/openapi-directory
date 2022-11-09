import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SignalExternalWorkflowExecutionFailedCauseEnum } from "./signalexternalworkflowexecutionfailedcauseenum";


// SignalExternalWorkflowExecutionFailedEventAttributes
/** 
 * Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
**/
export class SignalExternalWorkflowExecutionFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: SignalExternalWorkflowExecutionFailedCauseEnum;

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
