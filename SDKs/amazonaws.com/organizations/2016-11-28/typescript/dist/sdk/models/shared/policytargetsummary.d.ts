import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTypeEnum } from "./targettypeenum";
/**
 * Contains information about a root, OU, or account that a policy is attached to.
**/
export declare class PolicyTargetSummary extends SpeakeasyBase {
    arn?: string;
    name?: string;
    targetId?: string;
    type?: TargetTypeEnum;
}
