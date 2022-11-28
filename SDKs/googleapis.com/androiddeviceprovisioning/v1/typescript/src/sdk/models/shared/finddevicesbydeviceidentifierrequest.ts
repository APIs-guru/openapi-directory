import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";



// FindDevicesByDeviceIdentifierRequest
/** 
 * Request to find devices.
**/
export class FindDevicesByDeviceIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
