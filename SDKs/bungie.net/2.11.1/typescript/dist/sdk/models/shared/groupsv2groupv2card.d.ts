import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupV2ClanInfo } from "./groupsv2groupv2claninfo";
/**
 * A small infocard of group information, usually used for when a list of groups are returned
**/
export declare class GroupsV2GroupV2Card extends SpeakeasyBase {
    about?: string;
    avatarPath?: string;
    capabilities?: number;
    clanInfo?: GroupsV2GroupV2ClanInfo;
    creationDate?: Date;
    groupId?: number;
    groupType?: number;
    locale?: string;
    memberCount?: number;
    membershipOption?: number;
    motto?: string;
    name?: string;
    theme?: string;
}
