import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProtectionGroupArbitraryPatternLimits
/** 
 * Limits settings on protection groups with arbitrary pattern type. 
**/
export class ProtectionGroupArbitraryPatternLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxMembers" })
  maxMembers: number;
}
