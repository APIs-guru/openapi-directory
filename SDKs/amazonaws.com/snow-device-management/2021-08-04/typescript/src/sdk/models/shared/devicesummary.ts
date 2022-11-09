import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceSummary
/** 
 * Identifying information about the device.
**/
export class DeviceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedWithJob" })
  associatedWithJob?: string;

  @Metadata({ data: "json, name=managedDeviceArn" })
  managedDeviceArn?: string;

  @Metadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
