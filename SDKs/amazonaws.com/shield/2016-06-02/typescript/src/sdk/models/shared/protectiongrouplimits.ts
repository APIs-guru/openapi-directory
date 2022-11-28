import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroupPatternTypeLimits } from "./protectiongrouppatterntypelimits";



// ProtectionGroupLimits
/** 
 * Limits settings on protection groups for your subscription. 
**/
export class ProtectionGroupLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxProtectionGroups" })
  maxProtectionGroups: number;

  @SpeakeasyMetadata({ data: "json, name=PatternTypeLimits" })
  patternTypeLimits: ProtectionGroupPatternTypeLimits;
}
