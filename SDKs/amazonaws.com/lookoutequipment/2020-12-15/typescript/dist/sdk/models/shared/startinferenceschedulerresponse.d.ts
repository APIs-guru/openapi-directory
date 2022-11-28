import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
export declare class StartInferenceSchedulerResponse extends SpeakeasyBase {
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    modelArn?: string;
    modelName?: string;
    status?: InferenceSchedulerStatusEnum;
}
