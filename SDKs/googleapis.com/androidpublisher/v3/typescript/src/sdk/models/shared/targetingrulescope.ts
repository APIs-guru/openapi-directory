import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetingRuleScope
/** 
 * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
**/
export class TargetingRuleScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=specificSubscriptionInApp" })
  specificSubscriptionInApp?: string;
}
