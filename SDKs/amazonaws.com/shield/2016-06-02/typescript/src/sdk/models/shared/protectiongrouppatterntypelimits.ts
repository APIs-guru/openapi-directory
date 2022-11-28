import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupArbitraryPatternLimits } from "./protectiongrouparbitrarypatternlimits";



// ProtectionGroupPatternTypeLimits
/** 
 * Limits settings by pattern type in the protection groups for your subscription. 
**/
export class ProtectionGroupPatternTypeLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArbitraryPatternLimits" })
  arbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits;
}
