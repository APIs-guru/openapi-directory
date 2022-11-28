import { SpeakeasyBase } from "../../../internal/utils";
import { UserGeneralUser } from "./usergeneraluser";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
export declare class UserUserMembershipData extends SpeakeasyBase {
    bungieNetUser?: UserGeneralUser;
    destinyMemberships?: GroupsV2GroupUserInfoCard[];
    primaryMembershipId?: number;
}
