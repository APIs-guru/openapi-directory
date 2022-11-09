import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandPlugin } from "./commandplugin";
import { NotificationConfig } from "./notificationconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";


// CommandInvocation
/** 
 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran. 
**/
export class CommandInvocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @Metadata({ data: "json, name=CommandId" })
  commandId?: string;

  @Metadata({ data: "json, name=CommandPlugins", elemType: shared.CommandPlugin })
  commandPlugins?: CommandPlugin[];

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=InstanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=RequestedDateTime" })
  requestedDateTime?: Date;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=StandardErrorUrl" })
  standardErrorUrl?: string;

  @Metadata({ data: "json, name=StandardOutputUrl" })
  standardOutputUrl?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CommandInvocationStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @Metadata({ data: "json, name=TraceOutput" })
  traceOutput?: string;
}
