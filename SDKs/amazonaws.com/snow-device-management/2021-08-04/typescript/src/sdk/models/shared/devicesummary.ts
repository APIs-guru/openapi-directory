import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceSummary
/** 
 * Identifying information about the device.
**/
export class DeviceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedWithJob" })
  associatedWithJob?: string;

  @SpeakeasyMetadata({ data: "json, name=managedDeviceArn" })
  managedDeviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=managedDeviceId" })
  managedDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
