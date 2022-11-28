import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceId" })
  serviceId: string;
}
