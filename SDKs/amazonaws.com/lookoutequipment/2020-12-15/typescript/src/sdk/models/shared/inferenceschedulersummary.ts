import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";



// InferenceSchedulerSummary
/** 
 * Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on. 
**/
export class InferenceSchedulerSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=DataUploadFrequency" })
  dataUploadFrequency?: DataUploadFrequencyEnum;

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
