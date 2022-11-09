import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EffectivePolicyTypeEnum } from "./effectivepolicytypeenum";


export class DescribeEffectivePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyType" })
  policyType: EffectivePolicyTypeEnum;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;
}
