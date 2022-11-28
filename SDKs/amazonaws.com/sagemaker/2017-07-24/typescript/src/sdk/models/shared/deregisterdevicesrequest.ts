import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceNames" })
  deviceNames: string[];
}
