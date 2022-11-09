import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceStatusEnum } from "./devicestatusenum";


// DeviceSummary
/** 
 * The summary of devices.
**/
export class DeviceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=DeviceStatus" })
  deviceStatus?: DeviceStatusEnum;
}
