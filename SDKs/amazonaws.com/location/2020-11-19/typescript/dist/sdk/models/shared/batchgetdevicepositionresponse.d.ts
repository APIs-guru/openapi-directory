import { SpeakeasyBase } from "../../../internal/utils";
import { DevicePosition } from "./deviceposition";
import { BatchGetDevicePositionError } from "./batchgetdevicepositionerror";
export declare class BatchGetDevicePositionResponse extends SpeakeasyBase {
    devicePositions: DevicePosition[];
    errors: BatchGetDevicePositionError[];
}
