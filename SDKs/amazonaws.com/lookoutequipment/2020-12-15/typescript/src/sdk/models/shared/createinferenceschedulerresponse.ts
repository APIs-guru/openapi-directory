import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";



export class CreateInferenceSchedulerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerArn" })
  inferenceSchedulerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InferenceSchedulerStatusEnum;
}
