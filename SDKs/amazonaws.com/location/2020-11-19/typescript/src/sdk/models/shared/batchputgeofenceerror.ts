import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";



// BatchPutGeofenceError
/** 
 * Contains error details for each geofence that failed to be stored in a given geofence collection.
**/
export class BatchPutGeofenceError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error: BatchItemError;

  @SpeakeasyMetadata({ data: "json, name=GeofenceId" })
  geofenceId: string;
}
