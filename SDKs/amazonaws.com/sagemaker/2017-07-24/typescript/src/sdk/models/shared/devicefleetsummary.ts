import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceFleetSummary
/** 
 * Summary of the device fleet.
**/
export class DeviceFleetSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetArn" })
  deviceFleetArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
