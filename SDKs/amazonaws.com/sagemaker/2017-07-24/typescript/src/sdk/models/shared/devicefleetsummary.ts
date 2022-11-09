import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceFleetSummary
/** 
 * Summary of the device fleet.
**/
export class DeviceFleetSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DeviceFleetArn" })
  deviceFleetArn: string;

  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
