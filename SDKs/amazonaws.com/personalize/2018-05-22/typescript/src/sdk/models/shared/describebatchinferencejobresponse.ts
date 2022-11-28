import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchInferenceJob } from "./batchinferencejob";



export class DescribeBatchInferenceJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchInferenceJob" })
  batchInferenceJob?: BatchInferenceJob;
}
