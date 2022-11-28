import { SpeakeasyBase } from "../../../internal/utils";
import { EffectivePolicyTypeEnum } from "./effectivepolicytypeenum";
export declare class DescribeEffectivePolicyRequest extends SpeakeasyBase {
    policyType: EffectivePolicyTypeEnum;
    targetId?: string;
}
