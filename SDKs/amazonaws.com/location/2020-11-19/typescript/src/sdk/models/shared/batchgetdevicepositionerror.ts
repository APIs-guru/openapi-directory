import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";



// BatchGetDevicePositionError
/** 
 * Contains error details for each device that didn't return a position.
**/
export class BatchGetDevicePositionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error: BatchItemError;
}
