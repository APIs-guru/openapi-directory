import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { Tag } from "./tag";
export declare class RegisterDevicesRequest extends SpeakeasyBase {
    deviceFleetName: string;
    devices: Device[];
    tags?: Tag[];
}
