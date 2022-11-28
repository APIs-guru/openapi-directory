import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandInvocationStatusEnum } from "./commandinvocationstatusenum";



export class GetCommandInvocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchOutputConfig" })
  cloudWatchOutputConfig?: CloudWatchOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId?: string;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionElapsedTime" })
  executionElapsedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionEndDateTime" })
  executionEndDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionStartDateTime" })
  executionStartDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=PluginName" })
  pluginName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseCode" })
  responseCode?: number;

  @SpeakeasyMetadata({ data: "json, name=StandardErrorContent" })
  standardErrorContent?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardErrorUrl" })
  standardErrorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardOutputContent" })
  standardOutputContent?: string;

  @SpeakeasyMetadata({ data: "json, name=StandardOutputUrl" })
  standardOutputUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CommandInvocationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;
}
