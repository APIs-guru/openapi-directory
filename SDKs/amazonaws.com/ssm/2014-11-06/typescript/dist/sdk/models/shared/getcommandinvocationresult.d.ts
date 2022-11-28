import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";
export declare class GetCommandInvocationResult extends SpeakeasyBase {
    cloudWatchOutputConfig?: CloudWatchOutputConfig;
    commandId?: string;
    comment?: string;
    documentName?: string;
    documentVersion?: string;
    executionElapsedTime?: string;
    executionEndDateTime?: string;
    executionStartDateTime?: string;
    instanceId?: string;
    pluginName?: string;
    responseCode?: number;
    standardErrorContent?: string;
    standardErrorUrl?: string;
    standardOutputContent?: string;
    standardOutputUrl?: string;
    status?: CommandInvocationStatusEnum;
    statusDetails?: string;
}
