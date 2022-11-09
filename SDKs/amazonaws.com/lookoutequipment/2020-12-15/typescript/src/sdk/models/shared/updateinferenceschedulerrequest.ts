import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";


export class UpdateInferenceSchedulerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @Metadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration?: InferenceInputConfiguration;

  @Metadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration?: InferenceOutputConfiguration;

  @Metadata({ data: "json, name=DataUploadFrequency" })
  dataUploadFrequency?: DataUploadFrequencyEnum;

  @Metadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
