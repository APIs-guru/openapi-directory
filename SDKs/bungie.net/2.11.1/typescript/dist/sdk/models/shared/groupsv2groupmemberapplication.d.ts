import { SpeakeasyBase } from "../../../internal/utils";
import { UserUserInfoCard } from "./useruserinfocard";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
export declare class GroupsV2GroupMemberApplication extends SpeakeasyBase {
    bungieNetUserInfo?: UserUserInfoCard;
    creationDate?: Date;
    destinyUserInfo?: GroupsV2GroupUserInfoCard;
    groupId?: number;
    requestMessage?: string;
    resolveDate?: Date;
    resolveMessage?: string;
    resolveState?: number;
    resolvedByMembershipId?: number;
}
