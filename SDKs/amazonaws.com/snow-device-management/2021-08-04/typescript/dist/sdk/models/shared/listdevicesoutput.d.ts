import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";
export declare class ListDevicesOutput extends SpeakeasyBase {
    devices?: DeviceSummary[];
    nextToken?: string;
}
