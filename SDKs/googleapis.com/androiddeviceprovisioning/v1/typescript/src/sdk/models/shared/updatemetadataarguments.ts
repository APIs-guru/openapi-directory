import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";


// UpdateMetadataArguments
/** 
 * Identifies metadata updates to one device.
**/
export class UpdateMetadataArguments extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @Metadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;
}
