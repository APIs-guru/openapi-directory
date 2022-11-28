import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";



// BatchEvaluateGeofencesError
/** 
 * Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
**/
export class BatchEvaluateGeofencesError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error: BatchItemError;

  @SpeakeasyMetadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
