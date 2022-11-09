import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;
}
