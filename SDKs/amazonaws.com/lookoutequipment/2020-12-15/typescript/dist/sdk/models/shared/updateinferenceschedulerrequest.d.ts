import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
export declare class UpdateInferenceSchedulerRequest extends SpeakeasyBase {
    dataDelayOffsetInMinutes?: number;
    dataInputConfiguration?: InferenceInputConfiguration;
    dataOutputConfiguration?: InferenceOutputConfiguration;
    dataUploadFrequency?: DataUploadFrequencyEnum;
    inferenceSchedulerName: string;
    roleArn?: string;
}
