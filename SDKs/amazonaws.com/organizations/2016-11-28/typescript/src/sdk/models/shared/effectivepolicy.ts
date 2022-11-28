import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectivePolicyTypeEnum } from "./effectivepolicytypeenum";



// EffectivePolicy
/** 
 * Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.
**/
export class EffectivePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=PolicyContent" })
  policyContent?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: EffectivePolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;
}
