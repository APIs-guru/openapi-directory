import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
/**
 * Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.
**/
export declare class BatchEvaluateGeofencesError extends SpeakeasyBase {
    deviceId: string;
    error: BatchItemError;
    sampleTime: Date;
}
