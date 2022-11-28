import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSelector } from "./deviceselector";
/**
 * LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
**/
export declare class DeviceGroup extends SpeakeasyBase {
    deviceSelectors?: DeviceSelector[];
    name?: string;
}
