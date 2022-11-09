import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// FindDevicesByDeviceIdentifierResponse
/** 
 * Response containing found devices.
**/
export class FindDevicesByDeviceIdentifierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
