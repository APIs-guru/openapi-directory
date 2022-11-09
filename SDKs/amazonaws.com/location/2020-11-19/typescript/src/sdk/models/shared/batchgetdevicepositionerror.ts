import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";


// BatchGetDevicePositionError
/** 
 * Contains error details for each device that didn't return a position.
**/
export class BatchGetDevicePositionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=Error" })
  error: BatchItemError;
}
