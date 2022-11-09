import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
