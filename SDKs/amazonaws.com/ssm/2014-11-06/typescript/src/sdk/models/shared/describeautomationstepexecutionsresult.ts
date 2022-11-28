import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepExecution } from "./stepexecution";



export class DescribeAutomationStepExecutionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StepExecutions", elemType: StepExecution })
  stepExecutions?: StepExecution[];
}
