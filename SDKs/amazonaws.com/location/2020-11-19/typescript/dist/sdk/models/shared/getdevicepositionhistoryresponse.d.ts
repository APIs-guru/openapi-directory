import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DevicePosition } from "./deviceposition";
export declare class GetDevicePositionHistoryResponse extends SpeakeasyBase {
    devicePositions: DevicePosition[];
    nextToken?: string;
}
