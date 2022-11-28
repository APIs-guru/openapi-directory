import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceStats
/** 
 * Status of devices.
**/
export class DeviceStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectedDeviceCount" })
  connectedDeviceCount: number;

  @SpeakeasyMetadata({ data: "json, name=RegisteredDeviceCount" })
  registeredDeviceCount: number;
}
