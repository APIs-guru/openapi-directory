import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { Tag } from "./tag";



export class RegisterDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: Device })
  devices: Device[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
