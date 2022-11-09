import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowExecution
/** 
 * Represents a workflow execution.
**/
export class WorkflowExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=runId" })
  runId: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId: string;
}
