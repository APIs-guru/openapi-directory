import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfileDetails } from "./userprofiledetails";



export class ListUserProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfiles", elemType: UserProfileDetails })
  userProfiles?: UserProfileDetails[];
}
