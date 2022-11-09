import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DevicePosition } from "./deviceposition";
import { BatchGetDevicePositionError } from "./batchgetdevicepositionerror";


export class BatchGetDevicePositionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DevicePositions", elemType: shared.DevicePosition })
  devicePositions: DevicePosition[];

  @Metadata({ data: "json, name=Errors", elemType: shared.BatchGetDevicePositionError })
  errors: BatchGetDevicePositionError[];
}
