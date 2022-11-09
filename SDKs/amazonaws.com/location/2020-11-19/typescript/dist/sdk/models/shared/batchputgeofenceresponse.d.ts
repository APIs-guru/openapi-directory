import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchPutGeofenceError } from "./batchputgeofenceerror";
import { BatchPutGeofenceSuccess } from "./batchputgeofencesuccess";
export declare class BatchPutGeofenceResponse extends SpeakeasyBase {
    errors: BatchPutGeofenceError[];
    successes: BatchPutGeofenceSuccess[];
}
