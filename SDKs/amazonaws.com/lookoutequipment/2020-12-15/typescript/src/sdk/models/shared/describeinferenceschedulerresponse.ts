import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";



export class DescribeInferenceSchedulerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration?: InferenceInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration?: InferenceOutputConfiguration;

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

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: InferenceSchedulerStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
