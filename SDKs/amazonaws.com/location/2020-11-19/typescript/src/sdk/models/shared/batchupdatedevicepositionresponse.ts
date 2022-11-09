import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchUpdateDevicePositionError } from "./batchupdatedevicepositionerror";


export class BatchUpdateDevicePositionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchUpdateDevicePositionError })
  errors: BatchUpdateDevicePositionError[];
}
