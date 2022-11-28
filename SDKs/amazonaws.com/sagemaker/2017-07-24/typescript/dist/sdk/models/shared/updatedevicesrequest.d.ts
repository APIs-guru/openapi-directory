import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
export declare class UpdateDevicesRequest extends SpeakeasyBase {
    deviceFleetName: string;
    devices: Device[];
}
