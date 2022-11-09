import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowDetail
/** 
 * Specifies the workflow ID for the workflow to assign and the execution role used for executing the workflow.
**/
export class WorkflowDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionRole" })
  executionRole: string;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
