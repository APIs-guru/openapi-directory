import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardsProfile } from "./standardsprofile";



// FindSellerStandardsProfilesResponse
/** 
 * The response container for a list of seller profiles.
**/
export class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=standardsProfiles", elemType: StandardsProfile })
  standardsProfiles?: StandardsProfile[];
}
