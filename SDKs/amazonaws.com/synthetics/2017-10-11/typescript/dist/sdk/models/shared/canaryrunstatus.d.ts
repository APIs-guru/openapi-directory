import { SpeakeasyBase } from "../../../internal/utils";
import { CanaryRunStateEnum } from "./canaryrunstateenum";
import { CanaryRunStateReasonCodeEnum } from "./canaryrunstatereasoncodeenum";
/**
 * This structure contains the status information about a canary run.
**/
export declare class CanaryRunStatus extends SpeakeasyBase {
    state?: CanaryRunStateEnum;
    stateReason?: string;
    stateReasonCode?: CanaryRunStateReasonCodeEnum;
}
