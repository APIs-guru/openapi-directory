import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceStats
/** 
 * Status of devices.
**/
export class DeviceStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectedDeviceCount" })
  connectedDeviceCount: number;

  @Metadata({ data: "json, name=RegisteredDeviceCount" })
  registeredDeviceCount: number;
}
