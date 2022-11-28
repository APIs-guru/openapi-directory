import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProtectionGroupArbitraryPatternLimits
/** 
 * Limits settings on protection groups with arbitrary pattern type. 
**/
export class ProtectionGroupArbitraryPatternLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxMembers" })
  maxMembers: number;
}
