import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserUserToUserContext } from "./userusertousercontext";



export class UserGeneralUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  about?: string;

  @SpeakeasyMetadata()
  blizzardDisplayName?: string;

  @SpeakeasyMetadata()
  context?: UserUserToUserContext;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  fbDisplayName?: string;

  @SpeakeasyMetadata()
  firstAccess?: Date;

  @SpeakeasyMetadata()
  isDeleted?: boolean;

  @SpeakeasyMetadata()
  lastBanReportId?: number;

  @SpeakeasyMetadata()
  lastUpdate?: Date;

  @SpeakeasyMetadata()
  legacyPortalUid?: number;

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  localeInheritDefault?: boolean;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  normalizedName?: string;

  @SpeakeasyMetadata()
  profileBanExpire?: Date;

  @SpeakeasyMetadata()
  profilePicture?: number;

  @SpeakeasyMetadata()
  profilePicturePath?: string;

  @SpeakeasyMetadata()
  profilePictureWidePath?: string;

  @SpeakeasyMetadata()
  profileTheme?: number;

  @SpeakeasyMetadata()
  profileThemeName?: string;

  @SpeakeasyMetadata()
  psnDisplayName?: string;

  @SpeakeasyMetadata()
  showActivity?: boolean;

  @SpeakeasyMetadata()
  showGroupMessaging?: boolean;

  @SpeakeasyMetadata()
  stadiaDisplayName?: string;

  @SpeakeasyMetadata()
  statusDate?: Date;

  @SpeakeasyMetadata()
  statusText?: string;

  @SpeakeasyMetadata()
  steamDisplayName?: string;

  @SpeakeasyMetadata()
  successMessageFlags?: number;

  @SpeakeasyMetadata()
  twitchDisplayName?: string;

  @SpeakeasyMetadata()
  uniqueName?: string;

  @SpeakeasyMetadata()
  userTitle?: number;

  @SpeakeasyMetadata()
  userTitleDisplay?: string;

  @SpeakeasyMetadata()
  xboxDisplayName?: string;
}
