import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchPutGeofenceError } from "./batchputgeofenceerror";
import { BatchPutGeofenceSuccess } from "./batchputgeofencesuccess";


export class BatchPutGeofenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchPutGeofenceError })
  errors: BatchPutGeofenceError[];

  @Metadata({ data: "json, name=Successes", elemType: shared.BatchPutGeofenceSuccess })
  successes: BatchPutGeofenceSuccess[];
}
