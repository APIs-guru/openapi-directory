import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupLimits } from "./protectiongrouplimits";
import { ProtectionLimits } from "./protectionlimits";
/**
 * Limits settings for your subscription.
**/
export declare class SubscriptionLimits extends SpeakeasyBase {
    protectionGroupLimits: ProtectionGroupLimits;
    protectionLimits: ProtectionLimits;
}
