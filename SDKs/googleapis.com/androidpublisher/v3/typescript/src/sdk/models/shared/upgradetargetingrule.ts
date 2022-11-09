import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetingRuleScope } from "./targetingrulescope";


// UpgradeTargetingRule
/** 
 * Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
**/
export class UpgradeTargetingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingPeriodDuration" })
  billingPeriodDuration?: string;

  @Metadata({ data: "json, name=oncePerUser" })
  oncePerUser?: boolean;

  @Metadata({ data: "json, name=scope" })
  scope?: TargetingRuleScope;
}
