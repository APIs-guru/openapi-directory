import { SpeakeasyBase } from "../../../internal/utils";
import { CanaryStateEnum } from "./canarystateenum";
import { CanaryStateReasonCodeEnum } from "./canarystatereasoncodeenum";
/**
 * A structure that contains the current state of the canary.
**/
export declare class CanaryStatus extends SpeakeasyBase {
    state?: CanaryStateEnum;
    stateReason?: string;
    stateReasonCode?: CanaryStateReasonCodeEnum;
}
