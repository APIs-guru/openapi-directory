import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceSchedulerStatusEnum } from "./inferenceschedulerstatusenum";
export declare class CreateInferenceSchedulerResponse extends SpeakeasyBase {
    inferenceSchedulerArn?: string;
    inferenceSchedulerName?: string;
    status?: InferenceSchedulerStatusEnum;
}
