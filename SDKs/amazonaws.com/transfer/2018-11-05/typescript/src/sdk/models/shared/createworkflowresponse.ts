import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
