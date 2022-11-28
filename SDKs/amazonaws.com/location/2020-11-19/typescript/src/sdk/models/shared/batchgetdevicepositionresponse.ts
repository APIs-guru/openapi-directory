import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DevicePosition } from "./deviceposition";
import { BatchGetDevicePositionError } from "./batchgetdevicepositionerror";



export class BatchGetDevicePositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DevicePositions", elemType: DevicePosition })
  devicePositions: DevicePosition[];

  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchGetDevicePositionError })
  errors: BatchGetDevicePositionError[];
}
