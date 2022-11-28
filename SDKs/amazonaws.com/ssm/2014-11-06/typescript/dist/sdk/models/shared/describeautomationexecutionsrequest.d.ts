import { SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionFilter } from "./automationexecutionfilter";
export declare class DescribeAutomationExecutionsRequest extends SpeakeasyBase {
    filters?: AutomationExecutionFilter[];
    maxResults?: number;
    nextToken?: string;
}
