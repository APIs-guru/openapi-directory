import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceRam } from "./deviceram";
import { DeviceId } from "./deviceid";
import { SystemFeature } from "./systemfeature";
import { DeviceId } from "./deviceid";
import { SystemFeature } from "./systemfeature";


// DeviceSelector
/** 
 * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
**/
export class DeviceSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceRam" })
  deviceRam?: DeviceRam;

  @Metadata({ data: "json, name=excludedDeviceIds", elemType: shared.DeviceId })
  excludedDeviceIds?: DeviceId[];

  @Metadata({ data: "json, name=forbiddenSystemFeatures", elemType: shared.SystemFeature })
  forbiddenSystemFeatures?: SystemFeature[];

  @Metadata({ data: "json, name=includedDeviceIds", elemType: shared.DeviceId })
  includedDeviceIds?: DeviceId[];

  @Metadata({ data: "json, name=requiredSystemFeatures", elemType: shared.SystemFeature })
  requiredSystemFeatures?: SystemFeature[];
}
