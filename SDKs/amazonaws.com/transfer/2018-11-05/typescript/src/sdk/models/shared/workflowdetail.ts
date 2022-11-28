import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowDetail
/** 
 * Specifies the workflow ID for the workflow to assign and the execution role used for executing the workflow.
**/
export class WorkflowDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionRole" })
  executionRole: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
