import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceStatusEnum } from "./devicestatusenum";



// DeviceSummary
/** 
 * The summary of devices.
**/
export class DeviceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceStatus" })
  deviceStatus?: DeviceStatusEnum;
}
