import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
export declare class GroupsV2GroupPotentialMember extends SpeakeasyBase {
    bungieNetUserInfo?: UserUserInfoCard;
    destinyUserInfo?: GroupsV2GroupUserInfoCard;
    groupId?: number;
    joinDate?: Date;
    potentialStatus?: number;
}
