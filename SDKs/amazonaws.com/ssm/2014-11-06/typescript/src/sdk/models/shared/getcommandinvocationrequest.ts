import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCommandInvocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommandId" })
  commandId: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=PluginName" })
  pluginName?: string;
}
