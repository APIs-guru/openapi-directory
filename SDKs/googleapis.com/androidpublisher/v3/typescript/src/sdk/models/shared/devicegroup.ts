import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceSelector } from "./deviceselector";


// DeviceGroup
/** 
 * LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
**/
export class DeviceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceSelectors", elemType: shared.DeviceSelector })
  deviceSelectors?: DeviceSelector[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
