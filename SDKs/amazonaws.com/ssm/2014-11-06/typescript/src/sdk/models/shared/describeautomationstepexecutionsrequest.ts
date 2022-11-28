import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionFilter } from "./stepexecutionfilter";



export class DescribeAutomationStepExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: StepExecutionFilter })
  filters?: StepExecutionFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ReverseOrder" })
  reverseOrder?: boolean;
}
