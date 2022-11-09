import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=androidKeyRestrictions" })
  androidKeyRestrictions?: V2AndroidKeyRestrictions;

  @Metadata({ data: "json, name=apiTargets", elemType: shared.V2ApiTarget })
  apiTargets?: V2ApiTarget[];

  @Metadata({ data: "json, name=browserKeyRestrictions" })
  browserKeyRestrictions?: V2BrowserKeyRestrictions;

  @Metadata({ data: "json, name=iosKeyRestrictions" })
  iosKeyRestrictions?: V2IosKeyRestrictions;

  @Metadata({ data: "json, name=serverKeyRestrictions" })
  serverKeyRestrictions?: V2ServerKeyRestrictions;
}
