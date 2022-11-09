import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";


// InferenceSchedulerSummary
/** 
 * Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on. 
**/
export class InferenceSchedulerSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @Metadata({ data: "json, name=DataUploadFrequency" })
  dataUploadFrequency?: DataUploadFrequencyEnum;

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
