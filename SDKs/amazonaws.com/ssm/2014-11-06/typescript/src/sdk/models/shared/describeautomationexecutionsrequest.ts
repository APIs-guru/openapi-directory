import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionFilter } from "./automationexecutionfilter";



export class DescribeAutomationExecutionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: AutomationExecutionFilter })
  filters?: AutomationExecutionFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
