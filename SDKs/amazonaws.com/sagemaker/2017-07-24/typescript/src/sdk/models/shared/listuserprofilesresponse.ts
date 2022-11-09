import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserProfileDetails } from "./userprofiledetails";


export class ListUserProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserProfiles", elemType: shared.UserProfileDetails })
  userProfiles?: UserProfileDetails[];
}
