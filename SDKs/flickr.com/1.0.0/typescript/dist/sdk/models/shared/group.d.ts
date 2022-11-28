import { SpeakeasyBase } from "../../../internal/utils";
import { Cover } from "./cover";
import { PhotoUrLs } from "./photourls";
export declare class GroupBlast extends SpeakeasyBase {
    content?: string;
    dateBlastAdded?: string;
    userId?: string;
}
export declare class GroupDescription extends SpeakeasyBase {
    content?: string;
}
export declare class GroupMembers extends SpeakeasyBase {
    content?: string;
}
export declare class GroupName extends SpeakeasyBase {
    content?: string;
}
export declare class GroupPoolCount extends SpeakeasyBase {
    content?: string;
}
export declare class GroupPrivacy extends SpeakeasyBase {
    content?: string;
}
export declare class GroupRestrictions extends SpeakeasyBase {
    artOk?: boolean;
    hasGeo?: boolean;
    imagesOk?: boolean;
    moderateOk?: boolean;
    photosOk?: boolean;
    restrictedOk?: boolean;
    safeOk?: boolean;
    screensOk?: boolean;
    videosOk?: boolean;
}
export declare class GroupRoles extends SpeakeasyBase {
    admin?: string;
    member?: string;
    moderator?: string;
}
export declare class GroupRules extends SpeakeasyBase {
    content?: string;
}
export declare class GroupThrottle extends SpeakeasyBase {
    count?: number;
    mode?: string;
    remaining?: string;
}
export declare class GroupTopicCount extends SpeakeasyBase {
    content?: string;
}
export declare class Group extends SpeakeasyBase {
    blast?: GroupBlast;
    cover?: Cover;
    coverphotoFarm?: string;
    coverphotoServer?: string;
    coverphotoUrl?: PhotoUrLs;
    description?: GroupDescription;
    iconfarm?: string;
    iconserver?: string;
    id?: string;
    isAdmin?: boolean;
    isMember?: boolean;
    isModerator?: boolean;
    ispoolmoderated?: boolean;
    lang?: string;
    members?: GroupMembers;
    name?: GroupName;
    pathAlias?: string;
    poolCount?: GroupPoolCount;
    poolRows?: number;
    privacy?: GroupPrivacy;
    restrictions?: GroupRestrictions;
    roles?: GroupRoles;
    rules?: GroupRules;
    throttle?: GroupThrottle;
    topicCount?: GroupTopicCount;
}
