import { SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionMetadata } from "./automationexecutionmetadata";
export declare class DescribeAutomationExecutionsResult extends SpeakeasyBase {
    automationExecutionMetadataList?: AutomationExecutionMetadata[];
    nextToken?: string;
}
