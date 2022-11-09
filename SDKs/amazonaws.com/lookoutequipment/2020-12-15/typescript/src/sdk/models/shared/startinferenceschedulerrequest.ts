import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
