import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";


// BatchDeleteGeofenceError
/** 
 * Contains error details for each geofence that failed to delete from the geofence collection.
**/
export class BatchDeleteGeofenceError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error: BatchItemError;

  @Metadata({ data: "json, name=GeofenceId" })
  geofenceId: string;
}
