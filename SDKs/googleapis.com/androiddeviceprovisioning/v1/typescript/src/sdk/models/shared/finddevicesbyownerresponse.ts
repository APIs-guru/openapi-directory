import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Device } from "./device";


// FindDevicesByOwnerResponse
/** 
 * Response containing found devices.
**/
export class FindDevicesByOwnerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices?: Device[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
