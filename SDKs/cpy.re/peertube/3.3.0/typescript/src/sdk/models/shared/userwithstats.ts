import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
import { NsfwPolicyEnum } from "./nsfwpolicyenum";

export enum UserWithStatsRoleLabelEnum {
    User = "User"
,    Moderator = "Moderator"
,    Administrator = "Administrator"
}


export class UserWithStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=abusesAcceptedCount" })
  abusesAcceptedCount?: number;

  @Metadata({ data: "json, name=abusesCount" })
  abusesCount?: number;

  @Metadata({ data: "json, name=abusesCreatedCount" })
  abusesCreatedCount?: number;

  @Metadata({ data: "json, name=account" })
  account?: Account;

  @Metadata({ data: "json, name=autoPlayNextVideo" })
  autoPlayNextVideo?: boolean;

  @Metadata({ data: "json, name=autoPlayNextVideoPlaylist" })
  autoPlayNextVideoPlaylist?: boolean;

  @Metadata({ data: "json, name=autoPlayVideo" })
  autoPlayVideo?: boolean;

  @Metadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=blockedReason" })
  blockedReason?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: Map<string, any>;

  @Metadata({ data: "json, name=lastLoginDate" })
  lastLoginDate?: Date;

  @Metadata({ data: "json, name=noInstanceConfigWarningModal" })
  noInstanceConfigWarningModal?: boolean;

  @Metadata({ data: "json, name=noWelcomeModal" })
  noWelcomeModal?: boolean;

  @Metadata({ data: "json, name=nsfwPolicy" })
  nsfwPolicy?: NsfwPolicyEnum;

  @Metadata({ data: "json, name=pluginAuth" })
  pluginAuth?: string;

  @Metadata({ data: "json, name=role" })
  role?: number;

  @Metadata({ data: "json, name=roleLabel" })
  roleLabel?: UserWithStatsRoleLabelEnum;

  @Metadata({ data: "json, name=theme" })
  theme?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=videoChannels" })
  videoChannels?: any[];

  @Metadata({ data: "json, name=videoCommentsCount" })
  videoCommentsCount?: number;

  @Metadata({ data: "json, name=videoQuota" })
  videoQuota?: number;

  @Metadata({ data: "json, name=videoQuotaDaily" })
  videoQuotaDaily?: number;

  @Metadata({ data: "json, name=videosCount" })
  videosCount?: number;

  @Metadata({ data: "json, name=webtorrentEnabled" })
  webtorrentEnabled?: boolean;
}
