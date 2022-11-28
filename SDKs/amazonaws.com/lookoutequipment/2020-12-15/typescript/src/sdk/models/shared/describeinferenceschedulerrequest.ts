import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInferenceSchedulerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
