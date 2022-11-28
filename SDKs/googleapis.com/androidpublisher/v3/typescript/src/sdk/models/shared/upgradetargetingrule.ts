import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingRuleScope } from "./targetingrulescope";



// UpgradeTargetingRule
/** 
 * Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
**/
export class UpgradeTargetingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriodDuration" })
  billingPeriodDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=oncePerUser" })
  oncePerUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: TargetingRuleScope;
}
