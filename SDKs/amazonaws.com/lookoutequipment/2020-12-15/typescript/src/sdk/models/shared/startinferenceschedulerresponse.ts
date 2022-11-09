import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";


export class StartInferenceSchedulerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InferenceSchedulerArn" })
  inferenceSchedulerArn?: string;

  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName?: string;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: InferenceSchedulerStatusEnum;
}
