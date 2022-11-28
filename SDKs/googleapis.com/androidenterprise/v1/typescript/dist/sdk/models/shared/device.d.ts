import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
import { DeviceReport } from "./devicereport";
export declare enum DeviceManagementTypeEnum {
    ManagedDevice = "managedDevice",
    ManagedProfile = "managedProfile",
    ContainerApp = "containerApp",
    UnmanagedProfile = "unmanagedProfile"
}
/**
 * A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
**/
export declare class Device extends SpeakeasyBase {
    androidId?: string;
    managementType?: DeviceManagementTypeEnum;
    policy?: Policy;
    report?: DeviceReport;
}
