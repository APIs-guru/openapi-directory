import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcquisitionTargetingRule } from "./acquisitiontargetingrule";
import { UpgradeTargetingRule } from "./upgradetargetingrule";



// SubscriptionOfferTargeting
/** 
 * Defines the rule a user needs to satisfy to receive this offer.
**/
export class SubscriptionOfferTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acquisitionRule" })
  acquisitionRule?: AcquisitionTargetingRule;

  @SpeakeasyMetadata({ data: "json, name=upgradeRule" })
  upgradeRule?: UpgradeTargetingRule;
}
