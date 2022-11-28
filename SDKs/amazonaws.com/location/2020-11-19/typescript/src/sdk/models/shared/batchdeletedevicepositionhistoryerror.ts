import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";



// BatchDeleteDevicePositionHistoryError
/** 
 * Contains the tracker resource details.
**/
export class BatchDeleteDevicePositionHistoryError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error: BatchItemError;
}
