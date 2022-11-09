import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
