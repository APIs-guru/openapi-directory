import { SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionFilter } from "./stepexecutionfilter";
export declare class DescribeAutomationStepExecutionsRequest extends SpeakeasyBase {
    automationExecutionId: string;
    filters?: StepExecutionFilter[];
    maxResults?: number;
    nextToken?: string;
    reverseOrder?: boolean;
}
