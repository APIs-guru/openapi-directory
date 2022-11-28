import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceStatusEnum } from "./devicestatusenum";
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    firstAccessedTime?: Date;
    lastAccessedTime?: Date;
    manufacturer?: string;
    model?: string;
    operatingSystem?: string;
    operatingSystemVersion?: string;
    patchLevel?: string;
    status?: DeviceStatusEnum;
    username?: string;
}
