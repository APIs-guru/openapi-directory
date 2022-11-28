import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceFleetSummary } from "./devicefleetsummary";
export declare class ListDeviceFleetsResponse extends SpeakeasyBase {
    deviceFleetSummaries: DeviceFleetSummary[];
    nextToken?: string;
}
