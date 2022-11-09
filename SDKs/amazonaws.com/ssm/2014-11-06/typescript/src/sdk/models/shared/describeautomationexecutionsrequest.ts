import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutomationExecutionFilter } from "./automationexecutionfilter";


export class DescribeAutomationExecutionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.AutomationExecutionFilter })
  filters?: AutomationExecutionFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
