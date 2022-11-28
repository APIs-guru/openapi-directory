import { SpeakeasyBase } from "../../../internal/utils";
import { Vulnerability } from "./vulnerability";
import { FirmwareInfo } from "./firmwareinfo";
export declare class DeviceInfo extends SpeakeasyBase {
    cveList?: Vulnerability[];
    deviceType?: string;
    firmwareInfo?: FirmwareInfo;
    firmwareVersion?: string;
    isDiscontinued?: boolean;
    latestFirmwareInfo?: FirmwareInfo;
    manufacturer?: string;
    modelName?: string;
}
