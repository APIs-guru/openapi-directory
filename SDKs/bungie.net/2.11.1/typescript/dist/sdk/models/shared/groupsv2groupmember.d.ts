import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
export declare class GroupsV2GroupMember extends SpeakeasyBase {
    bungieNetUserInfo?: UserUserInfoCard;
    destinyUserInfo?: GroupsV2GroupUserInfoCard;
    groupId?: number;
    isOnline?: boolean;
    joinDate?: Date;
    lastOnlineStatusChange?: number;
    memberType?: number;
}
