import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProtectionGroupPatternTypeLimits } from "./protectiongrouppatterntypelimits";


// ProtectionGroupLimits
/** 
 * Limits settings on protection groups for your subscription. 
**/
export class ProtectionGroupLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxProtectionGroups" })
  maxProtectionGroups: number;

  @Metadata({ data: "json, name=PatternTypeLimits" })
  patternTypeLimits: ProtectionGroupPatternTypeLimits;
}
