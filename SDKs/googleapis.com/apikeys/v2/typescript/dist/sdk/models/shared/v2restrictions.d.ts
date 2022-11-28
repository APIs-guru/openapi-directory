import { SpeakeasyBase } from "../../../internal/utils";
import { V2AndroidKeyRestrictions } from "./v2androidkeyrestrictions";
import { V2ApiTarget } from "./v2apitarget";
import { V2BrowserKeyRestrictions } from "./v2browserkeyrestrictions";
import { V2IosKeyRestrictions } from "./v2ioskeyrestrictions";
import { V2ServerKeyRestrictions } from "./v2serverkeyrestrictions";
/**
 * Describes the restrictions on the key.
**/
export declare class V2Restrictions extends SpeakeasyBase {
    androidKeyRestrictions?: V2AndroidKeyRestrictions;
    apiTargets?: V2ApiTarget[];
    browserKeyRestrictions?: V2BrowserKeyRestrictions;
    iosKeyRestrictions?: V2IosKeyRestrictions;
    serverKeyRestrictions?: V2ServerKeyRestrictions;
}
