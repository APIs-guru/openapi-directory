import { SpeakeasyBase } from "../../../internal/utils";
import { CustomStepStatusEnum } from "./customstepstatusenum";
export declare class SendWorkflowStepStateRequest extends SpeakeasyBase {
    executionId: string;
    status: CustomStepStatusEnum;
    token: string;
    workflowId: string;
}
