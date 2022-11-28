import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Limit } from "./limit";



// ProtectionLimits
/** 
 * Limits settings on protections for your subscription. 
**/
export class ProtectionLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProtectedResourceTypeLimits", elemType: Limit })
  protectedResourceTypeLimits: Limit[];
}
