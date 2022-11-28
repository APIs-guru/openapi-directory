import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



// FindDevicesByDeviceIdentifierResponse
/** 
 * Response containing found devices.
**/
export class FindDevicesByDeviceIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: Device })
  devices?: Device[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
