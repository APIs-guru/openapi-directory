import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataUploadFrequencyEnum } from "./datauploadfrequencyenum";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
/**
 * Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on.
**/
export declare class InferenceSchedulerSummary extends SpeakeasyBase {
    dataDelayOffsetInMinutes?: number;
    dataUploadFrequency?: DataUploadFrequencyEnum;
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    modelArn?: string;
    modelName?: string;
    status?: InferenceSchedulerStatusEnum;
}
