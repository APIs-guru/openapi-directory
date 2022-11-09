import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
/**
 * Contains error details for each geofence that failed to delete from the geofence collection.
**/
export declare class BatchDeleteGeofenceError extends SpeakeasyBase {
    error: BatchItemError;
    geofenceId: string;
}
