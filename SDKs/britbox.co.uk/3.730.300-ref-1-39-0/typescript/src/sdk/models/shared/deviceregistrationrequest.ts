import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceRegistrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
