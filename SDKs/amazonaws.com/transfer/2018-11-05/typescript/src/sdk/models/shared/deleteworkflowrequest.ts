import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
