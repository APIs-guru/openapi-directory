import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchEvaluateGeofencesError } from "./batchevaluategeofenceserror";



export class BatchEvaluateGeofencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchEvaluateGeofencesError })
  errors: BatchEvaluateGeofencesError[];
}
