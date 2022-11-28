import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectivePolicyTypeEnum } from "./effectivepolicytypeenum";



export class DescribeEffectivePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType: EffectivePolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;
}
