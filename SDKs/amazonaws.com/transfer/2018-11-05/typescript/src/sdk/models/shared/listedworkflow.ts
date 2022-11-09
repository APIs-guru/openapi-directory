import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListedWorkflow
/** 
 * Contains the ID, text description, and Amazon Resource Name (ARN) for the workflow.
**/
export class ListedWorkflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId?: string;
}
