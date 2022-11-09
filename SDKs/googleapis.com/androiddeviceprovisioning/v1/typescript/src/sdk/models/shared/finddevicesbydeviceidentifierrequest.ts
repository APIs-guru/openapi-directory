import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";


// FindDevicesByDeviceIdentifierRequest
/** 
 * Request to find devices.
**/
export class FindDevicesByDeviceIdentifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
