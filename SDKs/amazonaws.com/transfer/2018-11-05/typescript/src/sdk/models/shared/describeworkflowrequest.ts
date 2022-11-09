import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkflowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
