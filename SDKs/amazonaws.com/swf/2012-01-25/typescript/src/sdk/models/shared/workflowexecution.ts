import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowExecution
/** 
 * Represents a workflow execution.
**/
export class WorkflowExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runId" })
  runId: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId: string;
}
