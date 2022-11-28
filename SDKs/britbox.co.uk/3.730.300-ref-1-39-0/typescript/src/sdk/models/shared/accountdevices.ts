import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceRegistrationWindow } from "./deviceregistrationwindow";
import { Device } from "./device";



export class AccountDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deregistrationWindow" })
  deregistrationWindow?: DeviceRegistrationWindow;

  @SpeakeasyMetadata({ data: "json, name=devices", elemType: Device })
  devices: Device[];

  @SpeakeasyMetadata({ data: "json, name=maxRegistered" })
  maxRegistered: number;

  @SpeakeasyMetadata({ data: "json, name=registrationWindow" })
  registrationWindow?: DeviceRegistrationWindow;
}
