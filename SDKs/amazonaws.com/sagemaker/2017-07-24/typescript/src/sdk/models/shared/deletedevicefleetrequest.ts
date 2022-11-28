import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDeviceFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;
}
