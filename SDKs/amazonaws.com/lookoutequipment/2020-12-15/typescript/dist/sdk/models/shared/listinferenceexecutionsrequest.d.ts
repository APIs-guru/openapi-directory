import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InferenceExecutionStatusEnum } from "./inferenceexecutionstatusenum";
export declare class ListInferenceExecutionsRequest extends SpeakeasyBase {
    dataEndTimeBefore?: Date;
    dataStartTimeAfter?: Date;
    inferenceSchedulerName: string;
    maxResults?: number;
    nextToken?: string;
    status?: InferenceExecutionStatusEnum;
}
