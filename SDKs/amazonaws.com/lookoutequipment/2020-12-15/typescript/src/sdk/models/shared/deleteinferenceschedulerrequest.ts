import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInferenceSchedulerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
