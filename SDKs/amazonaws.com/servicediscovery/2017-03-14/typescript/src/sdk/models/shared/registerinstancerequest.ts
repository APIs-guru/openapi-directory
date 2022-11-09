import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes" })
  attributes: Map<string, string>;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=ServiceId" })
  serviceId: string;
}
