import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupV2ClanInfo } from "./groupsv2groupv2claninfo";



// GroupsV2GroupV2Card
/** 
 * A small infocard of group information, usually used for when a list of groups are returned
**/
export class GroupsV2GroupV2Card extends SpeakeasyBase {
  @SpeakeasyMetadata()
  about?: string;

  @SpeakeasyMetadata()
  avatarPath?: string;

  @SpeakeasyMetadata()
  capabilities?: number;

  @SpeakeasyMetadata()
  clanInfo?: GroupsV2GroupV2ClanInfo;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  groupId?: number;

  @SpeakeasyMetadata()
  groupType?: number;

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  memberCount?: number;

  @SpeakeasyMetadata()
  membershipOption?: number;

  @SpeakeasyMetadata()
  motto?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  theme?: string;
}
