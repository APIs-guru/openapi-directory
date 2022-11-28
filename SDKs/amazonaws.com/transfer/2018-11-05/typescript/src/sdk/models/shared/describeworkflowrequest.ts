import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
