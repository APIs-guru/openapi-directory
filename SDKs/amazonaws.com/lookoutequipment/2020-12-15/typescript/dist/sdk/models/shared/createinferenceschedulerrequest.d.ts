import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { Tag } from "./tag";
export declare class CreateInferenceSchedulerRequest extends SpeakeasyBase {
    clientToken: string;
    dataDelayOffsetInMinutes?: number;
    dataInputConfiguration: InferenceInputConfiguration;
    dataOutputConfiguration: InferenceOutputConfiguration;
    dataUploadFrequency: DataUploadFrequencyEnum;
    inferenceSchedulerName: string;
    modelName: string;
    roleArn: string;
    serverSideKmsKeyId?: string;
    tags?: Tag[];
}
