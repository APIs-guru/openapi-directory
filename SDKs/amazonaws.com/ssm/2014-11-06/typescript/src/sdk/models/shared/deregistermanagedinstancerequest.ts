import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterManagedInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
