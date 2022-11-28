import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDeleteGeofenceError } from "./batchdeletegeofenceerror";



export class BatchDeleteGeofenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchDeleteGeofenceError })
  errors: BatchDeleteGeofenceError[];
}
