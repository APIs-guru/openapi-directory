import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchEvaluateGeofencesError } from "./batchevaluategeofenceserror";


export class BatchEvaluateGeofencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchEvaluateGeofencesError })
  errors: BatchEvaluateGeofencesError[];
}
