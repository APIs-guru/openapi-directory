import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceGroup } from "./devicegroup";
import { DeviceTierSet } from "./devicetierset";
/**
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
export declare class DeviceTierConfig extends SpeakeasyBase {
    deviceGroups?: DeviceGroup[];
    deviceTierConfigId?: string;
    deviceTierSet?: DeviceTierSet;
}
/**
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
export declare class DeviceTierConfigInput extends SpeakeasyBase {
    deviceGroups?: DeviceGroup[];
    deviceTierSet?: DeviceTierSet;
}
