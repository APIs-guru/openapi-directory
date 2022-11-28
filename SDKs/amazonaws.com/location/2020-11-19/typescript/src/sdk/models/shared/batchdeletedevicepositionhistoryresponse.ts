import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteDevicePositionHistoryError } from "./batchdeletedevicepositionhistoryerror";



export class BatchDeleteDevicePositionHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchDeleteDevicePositionHistoryError })
  errors: BatchDeleteDevicePositionHistoryError[];
}
