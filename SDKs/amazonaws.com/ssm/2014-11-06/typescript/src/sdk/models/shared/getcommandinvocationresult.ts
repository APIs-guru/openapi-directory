import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";


export class GetCommandInvocationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @Metadata({ data: "json, name=CommandId" })
  commandId?: string;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=ExecutionElapsedTime" })
  executionElapsedTime?: string;

  @Metadata({ data: "json, name=ExecutionEndDateTime" })
  executionEndDateTime?: string;

  @Metadata({ data: "json, name=ExecutionStartDateTime" })
  executionStartDateTime?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=PluginName" })
  pluginName?: string;

  @Metadata({ data: "json, name=ResponseCode" })
  responseCode?: number;

  @Metadata({ data: "json, name=StandardErrorContent" })
  standardErrorContent?: string;

  @Metadata({ data: "json, name=StandardErrorUrl" })
  standardErrorUrl?: string;

  @Metadata({ data: "json, name=StandardOutputContent" })
  standardOutputContent?: string;

  @Metadata({ data: "json, name=StandardOutputUrl" })
  standardOutputUrl?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CommandInvocationStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;
}
