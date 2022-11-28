import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartInferenceSchedulerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
