import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchDeleteGeofenceError } from "./batchdeletegeofenceerror";


export class BatchDeleteGeofenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchDeleteGeofenceError })
  errors: BatchDeleteGeofenceError[];
}
