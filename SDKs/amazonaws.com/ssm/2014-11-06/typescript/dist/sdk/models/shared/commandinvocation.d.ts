import { SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandPlugin } from "./commandplugin";
import { NotificationConfig } from "./notificationconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";
/**
 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran.
**/
export declare class CommandInvocation extends SpeakeasyBase {
    cloudWatchOutputConfig?: CloudWatchOutputConfig;
    commandId?: string;
    commandPlugins?: CommandPlugin[];
    comment?: string;
    documentName?: string;
    documentVersion?: string;
    instanceId?: string;
    instanceName?: string;
    notificationConfig?: NotificationConfig;
    requestedDateTime?: Date;
    serviceRole?: string;
    standardErrorUrl?: string;
    standardOutputUrl?: string;
    status?: CommandInvocationStatusEnum;
    statusDetails?: string;
    traceOutput?: string;
}
