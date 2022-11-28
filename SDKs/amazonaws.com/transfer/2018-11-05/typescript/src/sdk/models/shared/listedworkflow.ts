import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListedWorkflow
/** 
 * Contains the ID, text description, and Amazon Resource Name (ARN) for the workflow.
**/
export class ListedWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId?: string;
}
