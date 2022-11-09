import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";


// BatchPutGeofenceError
/** 
 * Contains error details for each geofence that failed to be stored in a given geofence collection.
**/
export class BatchPutGeofenceError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error: BatchItemError;

  @Metadata({ data: "json, name=GeofenceId" })
  geofenceId: string;
}
