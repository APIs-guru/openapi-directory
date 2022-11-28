import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";



// BatchDeleteGeofenceError
/** 
 * Contains error details for each geofence that failed to delete from the geofence collection.
**/
export class BatchDeleteGeofenceError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error: BatchItemError;

  @SpeakeasyMetadata({ data: "json, name=GeofenceId" })
  geofenceId: string;
}
