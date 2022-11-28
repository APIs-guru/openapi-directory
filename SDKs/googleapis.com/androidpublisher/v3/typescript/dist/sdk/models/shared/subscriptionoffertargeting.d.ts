import { SpeakeasyBase } from "../../../internal/utils";
import { AcquisitionTargetingRule } from "./acquisitiontargetingrule";
import { UpgradeTargetingRule } from "./upgradetargetingrule";
/**
 * Defines the rule a user needs to satisfy to receive this offer.
**/
export declare class SubscriptionOfferTargeting extends SpeakeasyBase {
    acquisitionRule?: AcquisitionTargetingRule;
    upgradeRule?: UpgradeTargetingRule;
}
