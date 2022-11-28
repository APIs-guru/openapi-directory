import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";



export class StartInferenceSchedulerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerArn" })
  inferenceSchedulerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InferenceSchedulerStatusEnum;
}
