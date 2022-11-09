import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SelfUserProfile } from "./selfuserprofile";


// DescribeMyUserProfileResult
/** 
 * Contains the response to a <code>DescribeMyUserProfile</code> request.
**/
export class DescribeMyUserProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserProfile" })
  userProfile?: SelfUserProfile;
}
