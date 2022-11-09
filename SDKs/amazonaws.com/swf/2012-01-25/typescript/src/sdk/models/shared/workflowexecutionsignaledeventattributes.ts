import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";


// WorkflowExecutionSignaledEventAttributes
/** 
 * Provides the details of the <code>WorkflowExecutionSignaled</code> event.
**/
export class WorkflowExecutionSignaledEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalInitiatedEventId" })
  externalInitiatedEventId?: number;

  @Metadata({ data: "json, name=externalWorkflowExecution" })
  externalWorkflowExecution?: WorkflowExecution;

  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=signalName" })
  signalName: string;
}
