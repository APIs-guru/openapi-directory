import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Limit } from "./limit";


// ProtectionLimits
/** 
 * Limits settings on protections for your subscription. 
**/
export class ProtectionLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProtectedResourceTypeLimits", elemType: shared.Limit })
  protectedResourceTypeLimits: Limit[];
}
