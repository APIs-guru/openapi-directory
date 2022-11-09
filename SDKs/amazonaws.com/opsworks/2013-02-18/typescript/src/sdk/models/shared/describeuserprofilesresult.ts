import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserProfile } from "./userprofile";


// DescribeUserProfilesResult
/** 
 * Contains the response to a <code>DescribeUserProfiles</code> request.
**/
export class DescribeUserProfilesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=UserProfiles", elemType: shared.UserProfile })
  userProfiles?: UserProfile[];
}
