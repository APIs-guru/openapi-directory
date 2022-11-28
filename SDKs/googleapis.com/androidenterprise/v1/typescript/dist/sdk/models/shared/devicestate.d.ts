import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceStateAccountStateEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 * The state of a user's device, as accessed by the getState and setState methods on device resources.
**/
export declare class DeviceState extends SpeakeasyBase {
    accountState?: DeviceStateAccountStateEnum;
}
