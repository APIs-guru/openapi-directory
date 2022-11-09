import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
/**
 * Contains error details for each geofence that failed to be stored in a given geofence collection.
**/
export declare class BatchPutGeofenceError extends SpeakeasyBase {
    error: BatchItemError;
    geofenceId: string;
}
