import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceRegistrationWindow } from "./deviceregistrationwindow";
import { Device } from "./device";
import { DeviceRegistrationWindow } from "./deviceregistrationwindow";


export class AccountDevices extends SpeakeasyBase {
  @Metadata({ data: "json, name=deregistrationWindow" })
  deregistrationWindow?: DeviceRegistrationWindow;

  @Metadata({ data: "json, name=devices", elemType: shared.Device })
  devices: Device[];

  @Metadata({ data: "json, name=maxRegistered" })
  maxRegistered: number;

  @Metadata({ data: "json, name=registrationWindow" })
  registrationWindow?: DeviceRegistrationWindow;
}
