import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=ServiceId" })
  serviceId: string;
}
