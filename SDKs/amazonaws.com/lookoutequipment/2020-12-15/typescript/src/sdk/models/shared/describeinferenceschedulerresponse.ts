import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";


export class DescribeInferenceSchedulerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @Metadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration?: InferenceInputConfiguration;

  @Metadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration?: InferenceOutputConfiguration;

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

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: InferenceSchedulerStatusEnum;

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
