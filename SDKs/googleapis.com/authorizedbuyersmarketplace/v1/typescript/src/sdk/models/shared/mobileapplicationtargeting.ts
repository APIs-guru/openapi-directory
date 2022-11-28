import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstPartyMobileApplicationTargeting } from "./firstpartymobileapplicationtargeting";



// MobileApplicationTargeting
/** 
 * Mobile application targeting settings.
**/
export class MobileApplicationTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstPartyTargeting" })
  firstPartyTargeting?: FirstPartyMobileApplicationTargeting;
}
