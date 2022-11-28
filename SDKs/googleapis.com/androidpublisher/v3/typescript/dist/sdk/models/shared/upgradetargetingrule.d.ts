import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingRuleScope } from "./targetingrulescope";
/**
 * Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
**/
export declare class UpgradeTargetingRule extends SpeakeasyBase {
    billingPeriodDuration?: string;
    oncePerUser?: boolean;
    scope?: TargetingRuleScope;
}
