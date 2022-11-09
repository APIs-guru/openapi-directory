import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StepExecution } from "./stepexecution";


export class DescribeAutomationStepExecutionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StepExecutions", elemType: shared.StepExecution })
  stepExecutions?: StepExecution[];
}
