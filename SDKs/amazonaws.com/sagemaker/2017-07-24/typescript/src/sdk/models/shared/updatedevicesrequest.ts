import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



export class UpdateDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: Device })
  devices: Device[];
}
