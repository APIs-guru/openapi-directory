import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
