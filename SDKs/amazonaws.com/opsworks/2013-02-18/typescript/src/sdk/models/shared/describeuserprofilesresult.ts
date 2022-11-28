import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";



// DescribeUserProfilesResult
/** 
 * Contains the response to a <code>DescribeUserProfiles</code> request.
**/
export class DescribeUserProfilesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserProfiles", elemType: UserProfile })
  userProfiles?: UserProfile[];
}
