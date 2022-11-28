import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { NsfwPolicyEnum } from "./nsfwpolicyenum";
export declare enum UserWithStatsRoleLabelEnum {
    User = "User",
    Moderator = "Moderator",
    Administrator = "Administrator"
}
export declare class UserWithStats extends SpeakeasyBase {
    abusesAcceptedCount?: number;
    abusesCount?: number;
    abusesCreatedCount?: number;
    account?: Account;
    autoPlayNextVideo?: boolean;
    autoPlayNextVideoPlaylist?: boolean;
    autoPlayVideo?: boolean;
    blocked?: boolean;
    blockedReason?: string;
    createdAt?: string;
    email?: string;
    emailVerified?: boolean;
    id?: Map<string, any>;
    lastLoginDate?: Date;
    noInstanceConfigWarningModal?: boolean;
    noWelcomeModal?: boolean;
    nsfwPolicy?: NsfwPolicyEnum;
    pluginAuth?: string;
    role?: number;
    roleLabel?: UserWithStatsRoleLabelEnum;
    theme?: string;
    username?: string;
    videoChannels?: any[];
    videoCommentsCount?: number;
    videoQuota?: number;
    videoQuotaDaily?: number;
    videosCount?: number;
    webtorrentEnabled?: boolean;
}
