import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V2AndroidKeyRestrictions } from "./v2androidkeyrestrictions";
import { V2ApiTarget } from "./v2apitarget";
import { V2BrowserKeyRestrictions } from "./v2browserkeyrestrictions";
import { V2IosKeyRestrictions } from "./v2ioskeyrestrictions";
import { V2ServerKeyRestrictions } from "./v2serverkeyrestrictions";



// V2Restrictions
/** 
 * Describes the restrictions on the key.
**/
export class V2Restrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidKeyRestrictions" })
  androidKeyRestrictions?: V2AndroidKeyRestrictions;

  @SpeakeasyMetadata({ data: "json, name=apiTargets", elemType: V2ApiTarget })
  apiTargets?: V2ApiTarget[];

  @SpeakeasyMetadata({ data: "json, name=browserKeyRestrictions" })
  browserKeyRestrictions?: V2BrowserKeyRestrictions;

  @SpeakeasyMetadata({ data: "json, name=iosKeyRestrictions" })
  iosKeyRestrictions?: V2IosKeyRestrictions;

  @SpeakeasyMetadata({ data: "json, name=serverKeyRestrictions" })
  serverKeyRestrictions?: V2ServerKeyRestrictions;
}
