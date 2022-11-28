import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NewDeviceEventManagementTypeEnum {
    ManagedDevice = "managedDevice",
    ManagedProfile = "managedProfile"
}
/**
 * An event generated when a new device is ready to be managed.
**/
export declare class NewDeviceEvent extends SpeakeasyBase {
    deviceId?: string;
    dpcPackageName?: string;
    managementType?: NewDeviceEventManagementTypeEnum;
    userId?: string;
}
