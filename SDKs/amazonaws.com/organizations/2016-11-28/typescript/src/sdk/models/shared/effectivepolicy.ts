import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EffectivePolicyTypeEnum } from "./effectivepolicytypeenum";


// EffectivePolicy
/** 
 * Contains rules to be applied to the affected accounts. The effective policy is the aggregation of any policies the account inherits, plus any policy directly attached to the account.
**/
export class EffectivePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=PolicyContent" })
  policyContent?: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: EffectivePolicyTypeEnum;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;
}
