import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
export declare class GroupsV2GroupBan extends SpeakeasyBase {
    bungieNetUserInfo?: UserUserInfoCard;
    comment?: string;
    createdBy?: UserUserInfoCard;
    dateBanned?: Date;
    dateExpires?: Date;
    destinyUserInfo?: GroupsV2GroupUserInfoCard;
    groupId?: number;
    lastModifiedBy?: UserUserInfoCard;
}
