import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribedExecution } from "./describedexecution";


export class DescribeExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Execution" })
  execution: DescribedExecution;

  @Metadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
