import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupMember } from "./groupsv2groupmember";
import { GroupsV2GroupPotentialMember } from "./groupsv2grouppotentialmember";
import { GroupsV2GroupV2 } from "./groupsv2groupv2";
export declare class GroupsV2GroupResponse extends SpeakeasyBase {
    allianceStatus?: number;
    alliedIds?: number[];
    currentUserMemberMap?: Map<string, GroupsV2GroupMember>;
    currentUserMembershipsInactiveForDestiny?: boolean;
    currentUserPotentialMemberMap?: Map<string, GroupsV2GroupPotentialMember>;
    detail?: GroupsV2GroupV2;
    founder?: GroupsV2GroupMember;
    groupJoinInviteCount?: number;
    parentGroup?: GroupsV2GroupV2;
}
