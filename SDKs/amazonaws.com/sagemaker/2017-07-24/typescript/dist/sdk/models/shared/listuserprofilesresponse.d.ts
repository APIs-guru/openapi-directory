import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfileDetails } from "./userprofiledetails";
export declare class ListUserProfilesResponse extends SpeakeasyBase {
    nextToken?: string;
    userProfiles?: UserProfileDetails[];
}
