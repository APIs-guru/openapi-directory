import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchInferenceJob } from "./batchinferencejob";


export class DescribeBatchInferenceJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchInferenceJob" })
  batchInferenceJob?: BatchInferenceJob;
}
