import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { InferenceExecutionStatusEnum } from "./inferenceexecutionstatusenum";



// InferenceExecutionSummary
/** 
 * Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on. 
**/
export class InferenceExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomerResultObject" })
  customerResultObject?: S3Object;

  @SpeakeasyMetadata({ data: "json, name=DataEndTime" })
  dataEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration?: InferenceInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration?: InferenceOutputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DataStartTime" })
  dataStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailedReason" })
  failedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerArn" })
  inferenceSchedulerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledStartTime" })
  scheduledStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InferenceExecutionStatusEnum;
}
