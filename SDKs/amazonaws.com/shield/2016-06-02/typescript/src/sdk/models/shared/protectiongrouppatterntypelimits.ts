import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectionGroupArbitraryPatternLimits } from "./protectiongrouparbitrarypatternlimits";


// ProtectionGroupPatternTypeLimits
/** 
 * Limits settings by pattern type in the protection groups for your subscription. 
**/
export class ProtectionGroupPatternTypeLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArbitraryPatternLimits" })
  arbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits;
}
