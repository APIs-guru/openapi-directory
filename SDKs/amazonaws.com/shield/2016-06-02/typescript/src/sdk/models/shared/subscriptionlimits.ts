import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectionGroupLimits } from "./protectiongrouplimits";
import { ProtectionLimits } from "./protectionlimits";


// SubscriptionLimits
/** 
 * Limits settings for your subscription. 
**/
export class SubscriptionLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectionGroupLimits" })
  protectionGroupLimits: ProtectionGroupLimits;

  @Metadata({ data: "json, name=ProtectionLimits" })
  protectionLimits: ProtectionLimits;
}
