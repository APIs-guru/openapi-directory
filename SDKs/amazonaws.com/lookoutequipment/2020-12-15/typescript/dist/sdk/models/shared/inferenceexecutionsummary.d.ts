import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Object } from "./s3object";
import { InferenceInputConfiguration } from "./inferenceinputconfiguration";
import { InferenceOutputConfiguration } from "./inferenceoutputconfiguration";
import { InferenceExecutionStatusEnum } from "./inferenceexecutionstatusenum";
/**
 * Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on.
**/
export declare class InferenceExecutionSummary extends SpeakeasyBase {
    customerResultObject?: S3Object;
    dataEndTime?: Date;
    dataInputConfiguration?: InferenceInputConfiguration;
    dataOutputConfiguration?: InferenceOutputConfiguration;
    dataStartTime?: Date;
    failedReason?: string;
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    modelArn?: string;
    modelName?: string;
    scheduledStartTime?: Date;
    status?: InferenceExecutionStatusEnum;
}
