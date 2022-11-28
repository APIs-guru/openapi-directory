import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";



// UpdateMetadataArguments
/** 
 * Identifies metadata updates to one device.
**/
export class UpdateMetadataArguments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceIdentifier" })
  deviceIdentifier?: DeviceIdentifier;

  @SpeakeasyMetadata({ data: "json, name=deviceMetadata" })
  deviceMetadata?: DeviceMetadata;
}
