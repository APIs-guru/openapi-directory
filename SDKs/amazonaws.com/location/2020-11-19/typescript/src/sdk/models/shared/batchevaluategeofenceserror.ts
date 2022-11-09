import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";


// BatchEvaluateGeofencesError
/** 
 * Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
**/
export class BatchEvaluateGeofencesError extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=Error" })
  error: BatchItemError;

  @Metadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
