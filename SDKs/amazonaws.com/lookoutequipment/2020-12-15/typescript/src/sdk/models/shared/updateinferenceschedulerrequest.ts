import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";



export class UpdateInferenceSchedulerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataDelayOffsetInMinutes" })
  dataDelayOffsetInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=DataInputConfiguration" })
  dataInputConfiguration?: InferenceInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DataOutputConfiguration" })
  dataOutputConfiguration?: InferenceOutputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=DataUploadFrequency" })
  dataUploadFrequency?: DataUploadFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=InferenceSchedulerName" })
  inferenceSchedulerName: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
