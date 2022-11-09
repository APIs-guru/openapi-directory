import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StepExecutionFilter } from "./stepexecutionfilter";


export class DescribeAutomationStepExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId: string;

  @Metadata({ data: "json, name=Filters", elemType: shared.StepExecutionFilter })
  filters?: StepExecutionFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ReverseOrder" })
  reverseOrder?: boolean;
}
