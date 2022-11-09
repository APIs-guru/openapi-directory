import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";


export class CreateInferenceSchedulerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerArn" })
  inferenceSchedulerArn?: string;

  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: InferenceSchedulerStatusEnum;
}
