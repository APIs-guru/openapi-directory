import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExecutionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
