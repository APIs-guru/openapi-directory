import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceRam } from "./deviceram";
import { DeviceId } from "./deviceid";
import { SystemFeature } from "./systemfeature";



// DeviceSelector
/** 
 * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
**/
export class DeviceSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceRam" })
  deviceRam?: DeviceRam;

  @SpeakeasyMetadata({ data: "json, name=excludedDeviceIds", elemType: DeviceId })
  excludedDeviceIds?: DeviceId[];

  @SpeakeasyMetadata({ data: "json, name=forbiddenSystemFeatures", elemType: SystemFeature })
  forbiddenSystemFeatures?: SystemFeature[];

  @SpeakeasyMetadata({ data: "json, name=includedDeviceIds", elemType: DeviceId })
  includedDeviceIds?: DeviceId[];

  @SpeakeasyMetadata({ data: "json, name=requiredSystemFeatures", elemType: SystemFeature })
  requiredSystemFeatures?: SystemFeature[];
}
