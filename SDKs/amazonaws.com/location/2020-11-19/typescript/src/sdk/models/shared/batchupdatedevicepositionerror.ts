import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";


// BatchUpdateDevicePositionError
/** 
 * Contains error details for each device that failed to update its position.
**/
export class BatchUpdateDevicePositionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=Error" })
  error: BatchItemError;

  @Metadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
