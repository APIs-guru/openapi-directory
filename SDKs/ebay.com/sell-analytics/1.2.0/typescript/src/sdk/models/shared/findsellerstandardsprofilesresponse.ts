import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardsProfile } from "./standardsprofile";


// FindSellerStandardsProfilesResponse
/** 
 * The response container for a list of seller profiles.
**/
export class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=standardsProfiles", elemType: shared.StandardsProfile })
  standardsProfiles?: StandardsProfile[];
}
