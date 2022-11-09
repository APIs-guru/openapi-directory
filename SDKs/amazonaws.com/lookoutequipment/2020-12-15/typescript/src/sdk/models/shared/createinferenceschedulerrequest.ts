import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { Tag } from "./tag";


export class CreateInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @Metadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration: InferenceInputConfiguration;

  @Metadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration: InferenceOutputConfiguration;

  @Metadata({ data: "json, name=DataUploadFrequency" })
  dataUploadFrequency: DataUploadFrequencyEnum;

  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
