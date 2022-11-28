import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupV2ClanInfoAndInvestment } from "./groupsv2groupv2claninfoandinvestment";
import { GroupsV2GroupFeatures } from "./groupsv2groupfeatures";



export class GroupsV2GroupV2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  about?: string;

  @SpeakeasyMetadata()
  allowChat?: boolean;

  @SpeakeasyMetadata()
  avatarImageIndex?: number;

  @SpeakeasyMetadata()
  avatarPath?: string;

  @SpeakeasyMetadata()
  banExpireDate?: Date;

  @SpeakeasyMetadata()
  bannerPath?: string;

  @SpeakeasyMetadata()
  chatSecurity?: number;

  @SpeakeasyMetadata()
  clanInfo?: GroupsV2GroupV2ClanInfoAndInvestment;

  @SpeakeasyMetadata()
  conversationId?: number;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  defaultPublicity?: number;

  @SpeakeasyMetadata()
  enableInvitationMessagingForAdmins?: boolean;

  @SpeakeasyMetadata()
  features?: GroupsV2GroupFeatures;

  @SpeakeasyMetadata()
  groupId?: number;

  @SpeakeasyMetadata()
  groupType?: number;

  @SpeakeasyMetadata()
  homepage?: number;

  @SpeakeasyMetadata()
  isDefaultPostPublic?: boolean;

  @SpeakeasyMetadata()
  isPublic?: boolean;

  @SpeakeasyMetadata()
  isPublicTopicAdminOnly?: boolean;

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  memberCount?: number;

  @SpeakeasyMetadata()
  membershipIdCreated?: number;

  @SpeakeasyMetadata()
  membershipOption?: number;

  @SpeakeasyMetadata()
  modificationDate?: Date;

  @SpeakeasyMetadata()
  motto?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  tags?: string[];

  @SpeakeasyMetadata()
  theme?: string;
}
