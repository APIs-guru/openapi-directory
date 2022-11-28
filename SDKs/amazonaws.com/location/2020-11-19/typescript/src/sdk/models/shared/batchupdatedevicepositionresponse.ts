import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchUpdateDevicePositionError } from "./batchupdatedevicepositionerror";



export class BatchUpdateDevicePositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchUpdateDevicePositionError })
  errors: BatchUpdateDevicePositionError[];
}
