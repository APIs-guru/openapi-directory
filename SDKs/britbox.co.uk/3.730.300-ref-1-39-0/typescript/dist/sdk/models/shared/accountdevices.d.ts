import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceRegistrationWindow } from "./deviceregistrationwindow";
import { Device } from "./device";
export declare class AccountDevices extends SpeakeasyBase {
    deregistrationWindow?: DeviceRegistrationWindow;
    devices: Device[];
    maxRegistered: number;
    registrationWindow?: DeviceRegistrationWindow;
}
