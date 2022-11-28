import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandPlugin } from "./commandplugin";
import { NotificationConfig } from "./notificationconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";



// CommandInvocation
/** 
 * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran. 
**/
export class CommandInvocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=CommandPlugins", elemType: CommandPlugin })
  commandPlugins?: CommandPlugin[];

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=RequestedDateTime" })
  requestedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardErrorUrl" })
  standardErrorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardOutputUrl" })
  standardOutputUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CommandInvocationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=TraceOutput" })
  traceOutput?: string;
}
