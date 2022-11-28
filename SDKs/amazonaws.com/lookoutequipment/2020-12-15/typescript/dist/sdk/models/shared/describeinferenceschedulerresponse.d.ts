import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
export declare class DescribeInferenceSchedulerResponse extends SpeakeasyBase {
    createdAt?: Date;
    dataDelayOffsetInMinutes?: number;
    dataInputConfiguration?: InferenceInputConfiguration;
    dataOutputConfiguration?: InferenceOutputConfiguration;
    dataUploadFrequency?: DataUploadFrequencyEnum;
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    modelArn?: string;
    modelName?: string;
    roleArn?: string;
    serverSideKmsKeyId?: string;
    status?: InferenceSchedulerStatusEnum;
    updatedAt?: Date;
}
