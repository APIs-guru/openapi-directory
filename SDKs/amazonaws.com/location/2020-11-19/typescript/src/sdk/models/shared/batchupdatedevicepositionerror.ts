import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";



// BatchUpdateDevicePositionError
/** 
 * Contains error details for each device that failed to update its position.
**/
export class BatchUpdateDevicePositionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error: BatchItemError;

  @SpeakeasyMetadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
