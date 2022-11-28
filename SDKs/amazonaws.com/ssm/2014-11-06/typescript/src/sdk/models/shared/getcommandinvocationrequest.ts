import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCommandInvocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommandId" })
  commandId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=PluginName" })
  pluginName?: string;
}
