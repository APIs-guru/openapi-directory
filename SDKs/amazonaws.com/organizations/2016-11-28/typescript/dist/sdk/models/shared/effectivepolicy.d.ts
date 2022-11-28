import { SpeakeasyBase } from "../../../internal/utils";
import { EffectivePolicyTypeEnum } from "./effectivepolicytypeenum";
/**
 * Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.
**/
export declare class EffectivePolicy extends SpeakeasyBase {
    lastUpdatedTimestamp?: Date;
    policyContent?: string;
    policyType?: EffectivePolicyTypeEnum;
    targetId?: string;
}
