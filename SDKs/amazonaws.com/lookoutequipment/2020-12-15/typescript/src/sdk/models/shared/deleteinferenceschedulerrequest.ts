import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
