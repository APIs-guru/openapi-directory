import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchPutGeofenceError } from "./batchputgeofenceerror";
import { BatchPutGeofenceSuccess } from "./batchputgeofencesuccess";



export class BatchPutGeofenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchPutGeofenceError })
  errors: BatchPutGeofenceError[];

  @SpeakeasyMetadata({ data: "json, name=Successes", elemType: BatchPutGeofenceSuccess })
  successes: BatchPutGeofenceSuccess[];
}
