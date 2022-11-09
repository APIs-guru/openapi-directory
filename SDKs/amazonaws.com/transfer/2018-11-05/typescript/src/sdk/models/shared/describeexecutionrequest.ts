import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionId" })
  executionId: string;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
