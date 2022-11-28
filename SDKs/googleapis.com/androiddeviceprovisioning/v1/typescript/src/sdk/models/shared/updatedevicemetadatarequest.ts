import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";



// UpdateDeviceMetadataRequest
/** 
 * Request to set metadata for a device.
**/
export class UpdateDeviceMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;
}
