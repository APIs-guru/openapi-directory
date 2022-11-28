import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopInferenceSchedulerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
