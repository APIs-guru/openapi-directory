import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceSummary } from "./devicesummary";
export declare class ListDevicesOutput extends SpeakeasyBase {
    devices?: DeviceSummary[];
    nextToken?: string;
}
