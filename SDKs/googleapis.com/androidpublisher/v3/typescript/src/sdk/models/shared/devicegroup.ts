import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceSelector } from "./deviceselector";



// DeviceGroup
/** 
 * LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
**/
export class DeviceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceSelectors", elemType: DeviceSelector })
  deviceSelectors?: DeviceSelector[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
