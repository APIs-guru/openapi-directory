import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchDeleteDevicePositionHistoryError } from "./batchdeletedevicepositionhistoryerror";


export class BatchDeleteDevicePositionHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchDeleteDevicePositionHistoryError })
  errors: BatchDeleteDevicePositionHistoryError[];
}
