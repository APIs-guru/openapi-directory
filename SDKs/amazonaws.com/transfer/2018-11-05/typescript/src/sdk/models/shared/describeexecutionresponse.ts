import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribedExecution } from "./describedexecution";



export class DescribeExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Execution" })
  execution: DescribedExecution;

  @SpeakeasyMetadata({ data: "json, name=WorkflowId" })
  workflowId: string;
}
