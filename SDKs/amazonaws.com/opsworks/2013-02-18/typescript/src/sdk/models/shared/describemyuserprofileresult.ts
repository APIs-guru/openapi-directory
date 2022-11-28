import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelfUserProfile } from "./selfuserprofile";



// DescribeMyUserProfileResult
/** 
 * Contains the response to a <code>DescribeMyUserProfile</code> request.
**/
export class DescribeMyUserProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UserProfile" })
  userProfile?: SelfUserProfile;
}
