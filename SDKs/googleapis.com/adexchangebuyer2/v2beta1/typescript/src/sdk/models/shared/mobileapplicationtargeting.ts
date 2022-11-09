import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstPartyMobileApplicationTargeting } from "./firstpartymobileapplicationtargeting";


// MobileApplicationTargeting
/** 
 * Mobile application targeting settings.
**/
export class MobileApplicationTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstPartyTargeting" })
  firstPartyTargeting?: FirstPartyMobileApplicationTargeting;
}
