import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


export class UpdateDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=Devices", elemType: shared.Device })
  devices: Device[];
}
