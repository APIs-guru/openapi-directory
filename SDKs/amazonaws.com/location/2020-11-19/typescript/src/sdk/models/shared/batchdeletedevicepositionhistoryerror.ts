import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";


// BatchDeleteDevicePositionHistoryError
/** 
 * Contains the tracker resource details.
**/
export class BatchDeleteDevicePositionHistoryError extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=Error" })
  error: BatchItemError;
}
