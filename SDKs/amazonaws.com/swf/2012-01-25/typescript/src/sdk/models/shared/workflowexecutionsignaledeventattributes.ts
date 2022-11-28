import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecution } from "./workflowexecution";



// WorkflowExecutionSignaledEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionSignaled</code> event.
**/
export class WorkflowExecutionSignaledEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalInitiatedEventId" })
  externalInitiatedEventId?: number;

  @SpeakeasyMetadata({ data: "json, name=externalWorkflowExecution" })
  externalWorkflowExecution?: WorkflowExecution;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=signalName" })
  signalName: string;
}
