import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterManagedInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
