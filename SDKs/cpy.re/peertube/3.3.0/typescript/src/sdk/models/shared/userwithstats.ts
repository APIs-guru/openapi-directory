import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { NsfwPolicyEnum } from "./nsfwpolicyenum";


export enum UserWithStatsRoleLabelEnum {
    User = "User",
    Moderator = "Moderator",
    Administrator = "Administrator"
}


export class UserWithStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abusesAcceptedCount" })
  abusesAcceptedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=abusesCount" })
  abusesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=abusesCreatedCount" })
  abusesCreatedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Account;

  @SpeakeasyMetadata({ data: "json, name=autoPlayNextVideo" })
  autoPlayNextVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoPlayNextVideoPlaylist" })
  autoPlayNextVideoPlaylist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoPlayVideo" })
  autoPlayVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blockedReason" })
  blockedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=lastLoginDate" })
  lastLoginDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=noInstanceConfigWarningModal" })
  noInstanceConfigWarningModal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noWelcomeModal" })
  noWelcomeModal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nsfwPolicy" })
  nsfwPolicy?: NsfwPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=pluginAuth" })
  pluginAuth?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: number;

  @SpeakeasyMetadata({ data: "json, name=roleLabel" })
  roleLabel?: UserWithStatsRoleLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=videoChannels" })
  videoChannels?: any[];

  @SpeakeasyMetadata({ data: "json, name=videoCommentsCount" })
  videoCommentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=videoQuota" })
  videoQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=videoQuotaDaily" })
  videoQuotaDaily?: number;

  @SpeakeasyMetadata({ data: "json, name=videosCount" })
  videosCount?: number;

  @SpeakeasyMetadata({ data: "json, name=webtorrentEnabled" })
  webtorrentEnabled?: boolean;
}
