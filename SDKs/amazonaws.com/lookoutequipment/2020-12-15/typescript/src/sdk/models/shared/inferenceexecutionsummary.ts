import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Object } from "./s3object";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { InferenceExecutionStatusEnum } from "./inferenceexecutionstatusenum";


// InferenceExecutionSummary
/** 
 * Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on. 
**/
export class InferenceExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomerResultObject" })
  customerResultObject?: S3Object;

  @Metadata({ data: "json, name=DataEndTime" })
  dataEndTime?: Date;

  @Metadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration?: InferenceInputConfiguration;

  @Metadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration?: InferenceOutputConfiguration;

  @Metadata({ data: "json, name=DataStartTime" })
  dataStartTime?: Date;

  @Metadata({ data: "json, name=FailedReason" })
  failedReason?: string;

  @Metadata({ data: "json, name=InferenceSchedulerArn" })
  inferenceSchedulerArn?: string;

  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName?: string;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=ScheduledStartTime" })
  scheduledStartTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: InferenceExecutionStatusEnum;
}
