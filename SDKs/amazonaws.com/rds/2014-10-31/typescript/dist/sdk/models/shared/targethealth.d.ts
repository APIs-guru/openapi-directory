import { SpeakeasyBase } from "../../../internal/utils";
import { TargetHealthReasonEnum } from "./targethealthreasonenum";
import { TargetStateEnum } from "./targetstateenum";
/**
 * Information about the connection health of an RDS Proxy target.
**/
export declare class TargetHealth extends SpeakeasyBase {
    description?: string;
    reason?: TargetHealthReasonEnum;
    state?: TargetStateEnum;
}
