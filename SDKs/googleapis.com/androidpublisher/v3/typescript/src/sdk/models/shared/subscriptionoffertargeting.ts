import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AcquisitionTargetingRule } from "./acquisitiontargetingrule";
import { UpgradeTargetingRule } from "./upgradetargetingrule";


// SubscriptionOfferTargeting
/** 
 * Defines the rule a user needs to satisfy to receive this offer.
**/
export class SubscriptionOfferTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=acquisitionRule" })
  acquisitionRule?: AcquisitionTargetingRule;

  @Metadata({ data: "json, name=upgradeRule" })
  upgradeRule?: UpgradeTargetingRule;
}
