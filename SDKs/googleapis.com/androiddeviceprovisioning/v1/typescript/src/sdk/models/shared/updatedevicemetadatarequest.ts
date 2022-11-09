import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceMetadata } from "./devicemetadata";


// UpdateDeviceMetadataRequest
/** 
 * Request to set metadata for a device.
**/
export class UpdateDeviceMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;
}
