import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkflowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
