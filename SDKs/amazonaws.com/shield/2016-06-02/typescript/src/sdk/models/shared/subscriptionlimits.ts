import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupLimits } from "./protectiongrouplimits";
import { ProtectionLimits } from "./protectionlimits";



// SubscriptionLimits
/** 
 * Limits settings for your subscription. 
**/
export class SubscriptionLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectionGroupLimits" })
  protectionGroupLimits: ProtectionGroupLimits;

  @SpeakeasyMetadata({ data: "json, name=ProtectionLimits" })
  protectionLimits: ProtectionLimits;
}
